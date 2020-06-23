var dateFormat = require('dateformat');
const moment = require('moment');
module.exports = (app, db) => {
  app.post("/commande", (req, res) =>
    db.models.Commande.findAll({
      order: [
        ['ID', 'ASC']
      ],
      include: [{
          model: db.models.Device,
          as: "Commander",
          scope: {
            DeviceType: 0
          }
        },
        {
          model: db.models.Device,
          as: "Responder",
          scope: {
            DeviceType: 1
          }
        },
        {
          model: db.models.Session
        },
        {
          model: db.models.Composition,
          include: [{
            model: db.models.Ingredient,
            as: "ingredients"
          }]
        },
        {
          model: db.models.CommandeType
        },
        {
          model: db.models.Service
        },
        {
          model: db.models.MoyenPayement
        },
        {
          model: db.models.Ingredient
          /*,
          attributes: ['ID']*/
        }
      ]
    }).then((result) => {
      console.log(result);
      res.json(result.map(x => x.dataValues));

    })
  );



  app.post("/getDeviceCommands", (req, res) => {
    let deviceID = req.body.deviceID;
    let sessionID = req.body.sessionID;
    db.models.Commande.findAll({
      order: [
        ['ID', 'ASC']
      ],
      where: {
        SessionID: sessionID,
        CommanderID: deviceID
      }
    }).then((result) => {
      //console.log(result);
      res.json(result.map(x => x.dataValues));

    })
  });




  app.post("/getCommandeType", (req, res) => {

    db.models.CommandeType.findAll({
      order: [
        ['ID', 'ASC']
      ],
      include: [{
        model: db.models.Menu,
        where: {
          MenuParentID: req.body.menuID
        }
      }]
    }).then((result) => {
      //console.log(result);
      res.json(result.map(x => x.dataValues));

    })
  });




  app.post("/insertcommande", async function (req, res) {
    console.log(req.body.commande);
    let element = JSON.parse(req.body.commande);
    let date = new Date();

    [commande, created] = await db.models.Commande.findOrCreate({
      where: {
        Nom: element.Nom,
        Somme: element.Somme,
        SessionID: element.SessionID,
        ServiceID: element.ServiceID,
        CompositionID: element.CompositionID,
        CommandeTypeID: element.CommandeTypeID,
        ServiceID: element.ServiceID,
        CommanderID: element.CommanderID,
        Commentaire: element.Commentaire,
        DateCommande: date,
        MoyenPayementID: null,
        ResponderID: null,
        Etat: element.Etat,
        Quantite: element.Quantite,
        NatureCommande: element.NatureCommande,
        Payer: false
      }
    })

    element.ExtraCommande.forEach(async function (extra, indexScreen) {
      [extracreated, created] = await db.models.CommandeExtra.findOrCreate({
        where: {
          CommandeID: commande.ID,
          AddRemove: extra.AddRemove,
          IngredientID: extra.IngredientID
        }
      })
    })

    res.send("ok");
  });



  app.post("/UpdateCommande", async function (req, res) {
    console.log("UpdateCommande");
    let commande = JSON.parse(req.body.json);

    db.models.Commande.findOne({
      where: {
        ID: commande.ID
      },
      include: [{
          model: db.models.Device,
          as: "Commander",
          scope: {
            DeviceType: 0
          }
        },
        {
          model: db.models.Device,
          as: "Responder",
          scope: {
            DeviceType: 1
          }
        },
        {
          model: db.models.Session
        },
        {
          model: db.models.Composition,
          include: [{
            model: db.models.Ingredient,
            as: "ingredients"
          }]
        },
        {
          model: db.models.CommandeType
        },
        {
          model: db.models.Service
        },
        {
          model: db.models.MoyenPayement
        },
        {
          model: db.models.Ingredient
          /*,
          attributes: ['ID']*/
        }
      ]
    }).then(cmd => {

      if (commande.Etat == 1) { //En cours de préparation 
        cmd.HeureCommancementPreparation = new Date();
        cmd.ResponderID = commande.ResponderID;
      } else if (commande.Etat == 2) { //En cours de Livraison
        cmd.HeureFinPreparation = new Date();
      }
      cmd.Etat = commande.Etat;
      cmd.save().catch(function (error) {
        console.log(error);
      });

      console.log(cmd.dataValues);
      res.json(cmd.dataValues);


    })


  });






  app.delete("/deleteccommande/:id", (req, res) =>
    db.models.Constante.destroy({
      where: {
        ID: req.params.id
      }
    }).then((result1) => {
      console.log(result1);
      //retourne tt les classes
      db.models.Constante.findAll({
        order: [
          ['ID', 'ASC']
        ]
      }).then((result) => {
        console.log(result);
        res.json(result.map(x => x.dataValues));

      })


    })
  );
}