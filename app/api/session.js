module.exports = (app, db) => {

  app.post("/session", (req, res) => {
    db.models.Session.findAll({
      order: [
        ["ID", "ASC"]
      ]

    }).then(result => {
      res.json(result.map(x => x.dataValues));
    })

  })


  app.post("/GetSession", (req, res) => {
    let idDevice = req.body.deviceID;
    db.models.DeviceTable.findOne({
      where: {
        DeviceID: idDevice
      }
    }).then(deviceTable => {

      db.models.Device.findOne({
        where: {
          ID: idDevice
        }
      }).then(device => {
        device.LastConnexion = new Date();
        device.save().catch(function(error) {
          console.log(error);
        });
      })


      db.models.Session.findOrCreate({
        where: {
          IDTable: deviceTable.TableID,
          Open: true
        }
      }).spread(function(mySession, isCreated) {
        console.log(mySession.dataValues);
        console.log(`Session ID ${mySession.ID} Device ID  ${idDevice}`);
        db.models.SessionDevice.findOrCreate({
          where: {
            SessionID: mySession.ID,
            DeviceID: idDevice
          }
        }).spread(function(mySessiondevice, isCreated) {
          db.models.SessionDevice.count({
            where: {
              SessionID: mySession.ID
            }
          }).then(counter => {
            console.log(
              `There is ${counter} device connected to session ${mySession.ID}`
            );
          });
        });

        let sessionData = mySession.dataValues;

        /*  sessionData.StartDate = moment.utc(sessionData.StartDate).format('DD-MM-YYYY HH:mm:ss');
          sessionData.EndDate = moment.utc(sessionData.EndDate).format('DD-MM-YYYY HH:mm:ss');
*/
        res.json(sessionData);
      });
    })
  });
  /*
    function DateConvertor(date) {
      let myDate = null;
      if (date != "") {
        myDate =
          date.getDate() +
          "/" +
          (date.getMonth() < 9 ? "0" : "") +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear() +
          " " +
          (date.getHours() < 9 ? "0" : "") +
          date.getHours() +
          ":" +
          (date.getMinutes() < 9 ? "0" : "") +
          date.getMinutes() +
          ":" +
          (date.getSeconds() < 9 ? "0" : "") +
          date.getSeconds();
      }
      return myDate;
    }

  */

  app.post("/QuitSession", (req, res) => {
    let idDevice = req.body.deviceID;
    db.models.DeviceTable.findOne({
      where: {
        DeviceID: idDevice
      }
    }).then(deviceTableResult => {

      db.models.Session.findOne({
        where: {
          IDTable: deviceTableResult.TableID,
          Open: true
        }
      }).then(session => {
        if (session != null) {
          idSession = session.ID;
          console.log(session.dataValues);
          db.models.SessionDevice.destroy({
            where: {
              SessionID: idSession,
              DeviceID: idDevice
            }
          }).then(() => {
            db.models.SessionDevice.count({
                where: {
                  SessionID: idSession
                }
              })
              .then(counter => {
                console.log(
                  `There is ${counter} device connected to session ${session.ID}`
                );
                if (counter == 0) {
                  //Close Session
                  session.EndDate = new Date();
                  session.Open = false;
                  session.save().catch(function(error) {
                    console.log(error);
                  });
                  console.log("Session closed");
                }
              })
              .then(() => {
                let sessionData = session.dataValues;
                //sessionData.StartDate = DateConvertor(sessionData.StartDate);
                //sessionData.EndDate = DateConvertor(sessionData.EndDate);
                res.json(sessionData);
              });
          })
        } else {
          res.send("NoSessionOpen");
        }
      });
    });
  });
};
