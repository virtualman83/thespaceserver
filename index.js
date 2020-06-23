const express = require("express");
const bodyParser = require("body-parser");
const faker = require("faker");
const times = require("lodash.times");
const random = require("lodash.random");
const exphbs = require("express-handlebars");
const cors = require("cors");
var path = require("path");
const fs = require("fs");
const util = require("util");
const readdir = util.promisify(fs.readdir);
const hierarchy = require("sequelize-hierarchy");
var readlineSync = require("readline-sync");
var colors = require("colors");
var net = require("net");
const app = express();
var server = require("./server")(app);



//const localtunnel = require('localtunnel');

// upload file path
const apiUpload = require("./app/api/upload");

//API
const apiScene = require("./app/api/scene");
const apiElement = require("./app/api/element");
const apiBg = require("./app/api/background");
const apiMenu = require("./app/api/menu");
const apiComposition = require("./app/api/composition");
const apiFamille = require("./app/api/famille");
const apiConstante = require("./app/api/constante");
const apiMoyen = require("./app/api/moyen");
const apiService = require("./app/api/service");
const apiClasse = require("./app/api/classe");
const apiIngredient = require("./app/api/ingredient");
const apiDevice = require("./app/api/device");
const apiPrestation = require("./app/api/prestation");
const apiActionType = require("./app/api/actionType");
const apiSpriteImage = require("./app/api/spriteimage");
const apiTable = require("./app/api/table");
const apiPrefab = require("./app/api/prefab");
const apiSession = require("./app/api/session");
const apiCommande= require("./app/api/commande");
const apiLocation= require("./app/api/location");
var models = require("./models/Association");

var sockets = [];

//Database
const db = require("./config/database");
const bulkInsert = require("./config/bulkInsert");


const pg = require("pg");
const Sequelize = require("sequelize");


const PORT = process.env.PORT || 8080;
const COMMUNICATIONPORT = 3000;
// enable CORS
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("app/public"));
app.use(express.static("public"));
//app.use(morgan("dev"));


//api
apiUpload(app);
apiClasse(app, db);
apiFamille(app, db);
apiConstante(app, db);
apiMoyen(app, db);
apiService(app, db);
apiIngredient(app, db);
apiComposition(app, db);
apiMenu(app, db);
apiBg(app, db);
apiElement(app, db);
apiScene(app, db);
apiDevice(app, db);
apiPrestation(app, db);
apiActionType(app, db);
apiSpriteImage(app, db);
apiTable(app, db);
apiPrefab(app, db);
apiSession(app, db);
apiLocation(app, db);
apiCommande(app, db);


//app.get("/", (req, res) => res.send("INDEX"));

app.get('/',function(req,res){
     res.sendFile(__dirname + "/index.html");

});

require("./models/Association")(db, Sequelize);

db.authenticate()
  .then(() => {
    console.log("connection to database success");

    db.sync({
      force: false
    }).then(async function (req, res) {
      bulkInsert();
    app.listen(PORT, () =>
        console.log("App listening on port " + PORT + "!")
      );


          console.log("Communication listening on port " + COMMUNICATIONPORT + "!")

    });
  })
  .catch(e => console.log("Error " + err));






module.exports.sequelize = db;
module.exports.Sequelize = Sequelize;
