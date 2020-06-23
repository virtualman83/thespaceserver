module.exports = (app, db) => {
  app.post("/device", (req, res) =>
    db.models.Device.findAll({
      order: [
        ["Nom", "ASC"]
      ],
      include: [{
          model: db.models.ElementTransform,
          as: "transform",
          include: [{
            model: db.models.Element,
            as: "element"
          }]
        },
        {
          model: db.models.Location
        },
        {
          model: db.models.IPAdresse
        },
        {
          model: db.models.Device,
          as :"Cameras"
        }

        
      ]
    }).then(result => {
      res.json(result.map(x => x.dataValues));
    })
  );

  app.post("/ecran", (req, res) =>
    db.models.Device.findAll({
      order: [
        ["ID", "ASC"]
      ],
      include: [{
        model: db.models.Table,
        as: "Table"
      }],
      where: {
        DeviceType: "ECRAN"
      }
    }).then(result => {
      res.json(result.map(x => x.dataValues));
    })
  );


 
/*
  app.post("/kitchenresponder", (req, res) =>
    db.models.Device.findAll({
      order: [
        ["Nom", "ASC"]
      ],
      include: [{
        model: db.models.ElementTransform,
        as: "transform"
      },
   { model: db.models.Location},
   { model: db.models.IPAdresse}
    ],
      where: {
        DeviceType: 1,
        LocationID: 2
      }
    }).then(result => {
      res.json(result.map(x => x.dataValues));
    })
  );
*/

  app.post("/test", (req, res) =>{
    console.log(req.body.element);
      console.log("Brut "+req.body.element);
    let device =  JSON.parse(JSON.stringify(req.body.element));
        console.log("Parsed "+device.Nom);
    res.send("ok");
  }
);





  app.post("/insertdevice", async function (req, res) {
    console.log(req.body.element);
    let maclasse = JSON.parse(req.body.element);

    db.models.Device.create(maclasse).then(device => {
      //retourne tt les classes
      db.models.Device.findAll({
        order: [
          ["Nom", "ASC"]
        ]
      }).then(result => {
        res.json(result.map(x => x.dataValues));
      });
    });
  });

/*
  app.post("/getDeviceID", async function (req, res) {

    let device =  JSON.parse(req.body.element);
    console.log("element " + device.DeviceUniqueIdentifier);
    let [myDevice, created] = await db.models.Device.findOrCreate({
      where: {
        DeviceUniqueIdentifier: device.DeviceUniqueIdentifier,
        DeviceType: device.DeviceType,
      }
    });
    myDevice.LocationID = device.LocationID;
    myDevice.Nom = device.Nom;
    myDevice.KeyWord = device.KeyWord;



    device.IPAdresses.forEach(async function (ip, indexip) {
      [ipDevice, created] = await db.models.IPAdresse.findOrCreate({
        where: {
          AdresseIP: ip.AdresseIP,
          Port: ip.Port,
          DeviceID: myDevice.ID,
        }
      })
    });

    await myDevice.save().catch(function (error) {
      console.log(error);
    });
    res.json(myDevice);

  });*/


  app.post("/updatedevice", (req, res) => {
    console.log(req.body.element);
    let maclasse = JSON.parse(req.body.element);
    db.models.Device.update({
      Nom: maclasse.Nom,
      Description: maclasse.Description,
      Icone: maclasse.Icone,
      LanIP: maclasse.LanIP,
      WifiIP: maclasse.WifiIP,
      PosX: maclasse.PosX,
      PosY: maclasse.PosY,
      PosZ: maclasse.PosZ,
      Port: maclasse.Port,
      Login: maclasse.Login,
      Password: maclasse.Password,
      LocationID: maclasse.LocationID
    }, {
      where: {
        ID: maclasse.ID
      }
    }).then(result1 => {
      db.models.Device.findAll({
        order: [
          ["Nom", "ASC"]
        ]
      }).then(result => {
        res.json(result.map(x => x.dataValues));
      });
    });
  });

  app.delete("/deletedevice/:id", (req, res) => {
    console.log("Delete rpi with id " + req.params.id);

    db.models.Device.destroy({
      where: {
        ID: req.params.id
      }
    }).then(result1 => {
      db.models.Device.findAll({
        order: [
          ["Nom", "ASC"]
        ]
      }).then(result => {
        res.json(result.map(x => x.dataValues));
      });
    });
  });
};