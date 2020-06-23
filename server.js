
module.exports = function(app) {

process.env['DEBUG'] = 'server:*';
var config = require('./config.json'),
    debug = {
        io: require('debug')('server:io'),
        app: require('debug')('server:app'),
        server: require('debug')('server:server'),
        config: require('debug')('server:config'),
        error: require('debug')('server:error')
    },

    http = require('http'),
    express = require('express'),
    //app = express(),
    util = require('util'),
    socketio = require('socket.io'),
    socketioWildcard = require('socket.io-wildcard'),
    server, io,

    //server = http.createServer(app),
    //io = socketio.listen(server),
    webApi = require('./routes/api'),
    store = require('./store'); // cheap key-value stand-in for redis

// Splash Info
debug.config('');
debug.config('The Space Communication server\r\n');
debug.config('\tNodejs: %s', process.version);
debug.config('\tsocket.io: v%s', socketio.version);
debug.config('\tListening on port %d', config.web.port);
debug.config('');

// *******************************
// Configure Express
// *******************************
app.use(logErrors);
const favicons = require('favicons');
const bodyParser = require("body-parser");
var connect = require('connect');
var compression = require('compression')
var methodOverride = require('method-override')
var errorhandler = require('errorhandler')

  // serve static assets from these folder
  app.use('/scripts', express.static('scripts'));
  app.use('/content', express.static('content'));
  app.use('/app', express.static('app'));


  // basic usage logging
  app.use(function (req, res, next) {
    // console.log('%s %s', req.method, req.url);
    if (req.url.indexOf('/api') === 0) {
      store.incr('app.apiCount');
    }
    //watchBcast('log', { level: 5, zone: 'app', eventCode: 'request', message: 'url', data: { 'method': req.method, 'url': req.url, 'count': cnt } });
    next();
  });



server = http.createServer(app).listen(config.web.port);
//io = socketio.listen(server);
io = socketioWildcard(socketio).listen(server);

// General Handlers
app.get('/api/:target', webApi.get);
app.get('/config', function(req, res) {
  res.send(config.clientConfiguration);
});
app.get('/', function (req, res) {
  store.incr('app.visits');
  res.sendFile(__dirname + '/index.html');
  watchBcastAnalytics();
});

// *******************************
// Configure socket.io
// *******************************
io.enable('browser client minification');  // send minified client
io.enable('browser client etag');          // apply etag caching logic based on version number
io.enable('browser client gzip');          // gzip the file
io.set('log level', 1);                    // reduce logging: 0-error, 1-warn, 2-info, 3-debug
io.set('transports', ['websocket', 'xhr-polling', 'jsonp-polling', 'htmlfile']);

// *******************************
// socket.io handlers
// *******************************

var dict = [];
io.sockets.on('connection', function (socket) { // initial connection from a client

  var transport = io.transports[socket.id].name,
      key = transport === 'websocket' ? 'websocket' : 'other';

  store.incr('io.connection.' + key);
  debug.io('client connection: %s', transport);
  watchBcastAnalytics();
  watchBcast('log', { zone: 'io', eventCode: 'connection', message: 'connection' }); // bcast connection count to 'watch' room
  watchBcast('log', { zone: 'server', eventCode: 'api', message: webApi.statusCounts() });
  socket.on('*', function onWildcard(event) {
      watchBcast('log', { zone: 'io', eventCode: event.name || '?', message: util.inspect(event) });
  });
  socket.on('message', function (data) {
      watchBcast('log', { zone: 'client', eventCode: 'message', message: data });
  });

  socket.on('echo', function (message) {
    socket.emit('echo', message);
  });
//  socket.emit('news', { hello: 'world' });

socket.on('privatemessage', function (data) {
  try {
    let targetDevice = data.toDevice;
    let targetElements = dict.filter(item => item.id === targetDevice);
    if (dict.filter(item => item.id === targetDevice).length ==1){
      let action = data.action;
      let fromDevice = data.fromDevice;
      let socketTarget = targetElements[0].socket;
      let message = data.msg;
      io.sockets.sockets[socketTarget].emit("Private Message", { action:action, from: fromDevice, to: targetDevice, msg:message });
    console.log("From device "+fromDevice+" Target device "+targetDevice+ " Socket "+socketTarget+" Message "+message+" action "+action);
  }else{
    console.log("No socket with device id "+targetDevice);
  }
  } catch (err) {
    debug.io('privatemessage error', data, err);
    store.incr('io.errors');
    watchBcastAnalytics();
  }
});

  socket.on('clientBroadcast', function (data) {
    try {
      //0 means all the devices if Event or all room visitors
      let action = data.action;
      let fromDevice = data.fromDevice;
      let message = data.msg;
      if (data.room) {
        let targetDevice = data.room;
        console.log("Message to the room "+data.room +" action "+action);
        socket.broadcast.to(data.room).emit("Room Message", {action:action, from: fromDevice, to: 0, msg:message });
      } else if (data.evennement) {
        let targetDevice = "ALL";
        console.log("Message event to all  "+data.evennement+" action "+action);
        socket.broadcast.emit("Event Message", { action:action, from: fromDevice, to: 0, msg:message }); //emit to all sockets except this one
      }
      //watchBcast('log', { zone: 'clientBroadcast', eventCode: combinedMsg, message: message.data });
    } catch (err) {
        debug.io('clientBroadcast error', message, err);
      store.incr('io.errors');
      watchBcastAnalytics();
    }
  });



  // client request to join 'room' data.room by name
  socket.on('subscribe', function(data) {
    let id = data.id;
    let room = data.room;
    console.log("join room "+room+" device id "+id);
    let arrayItems = dict.filter(item => item.id === id);
    if (arrayItems.length != 0){
        dict = dict.filter(item => item.id !== id);
        socket.leave(room);
    }
    socket.join(room);
    dict.push({ id: id, socket: socket.id });
    console.log(dict);
    if (room === 'watch') {
      socket.emit('analytics', webApi.statusCounts());
    }

  });
  // client request to leave 'room' data.room by name
  socket.on('unsubscribe', function (data) {
    let id = data.id;
    let room = data.room;
    socket.leave(room);
    dict = dict.filter(item => item.id !== id);
    console.log(dict);
  });

  socket.on('disconnect', function () { // client-server connection is closed
    store.decr('io.connection.' + key);
    watchBcastAnalytics();
    watchBcast('log', { zone: 'io', eventCode: 'disconnect', message: 'client' });
  });
});

// *******************************
// Error Logging / broadcast helpers
// *******************************
function watchBcast(event, data) {
  try {
    data.dateTime = new Date(Date.now());
    io.sockets.in('watch').emit(event, data);
    debug.io(util.inspect(data));
  } catch(err) {
      debug.error('watchBcast error: %s', err);
    store.incr('io.errors');
  }
}
function watchBcastAnalytics() {
  watchBcast('analytics', webApi.statusCounts());
}

function logErrors(err, req, res, next) {
  store.incr('app:errors');
  var status = err.statusCode || 500;
  debug.io(status + ' ' + (err.message ? err.message : err));
  if (err.stack) {
      debug.error(err.stack);
  }
  watchBcastAnalytics();
  next(err);
}

function errorHandler(err, req, res, next) {
  var status = err.statusCode || 500;
  if (err.message) {
    res.send(status, err.message);
  } else {
    res.send(status, err);
  }
  watchBcastAnalytics();
}

process.on('uncaughtException', function (err) {
  // handle the error safely
    debug.error(err);
  store.incr('app:errors');
  watchBcastAnalytics();
});

};
