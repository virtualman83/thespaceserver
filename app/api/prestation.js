module.exports = (app, db) => {
  app.post("/prestation", (req, res) =>
    db.models.Prestation.findAll({order: [["Nom", "ASC"]]}).then(result => {
    //  console.log(result);
      res.json(result.map(x => x.dataValues));
    })
  );
  /*
  app.post( "/classe/:id", (req, res) =>
    db.models.Classe.findByPk(req.params.id).then( (result) => res.json(result))
  );

*/

  app.post("/insertprestation", (req, res) => {
    console.log(req.body.element);
    let maclasse = JSON.parse(req.body.element);

    db.models.Prestation.create(maclasse).then(result1 => {
      //retourne tt les classes
      db.models.Menu.findOrCreate({
        where: {
          Nom: maclasse.Nom,
          Description: maclasse.Description,
          Icone: maclasse.Icone,
          Removable: true,
          Updatable: true,
          Actif: true,
          MenuParentID: 4
        }
      });

      db.models.Prestation.findAll({order: [["Nom", "ASC"]]}).then(result => {
        console.log(result);
        res.json(result.map(x => x.dataValues));
      });
    });
  });

  app.post("/updateprestation", (req, res) => {
    console.log(req.body.element);
    let maclasse = JSON.parse(req.body.element);
    db.models.Prestation.update(
      {
        Nom: maclasse.Nom,
        Description: maclasse.Description,
        Icone: maclasse.Icone
      },
      {
        where: {
          ID: maclasse.ID
        }
      }
    ).then(result1 => {
      //retourne tt les classes
      db.models.Prestation.findAll({order: [["Nom", "ASC"]]}).then(result => {
        console.log(result);
        res.json(result.map(x => x.dataValues));
      });
    });
  });

  app.delete("/deleteprestation/:id", (req, res) => {
    db.models.Prestation.findAll({
      limit: 1,
      where: {
        ID: req.params.id
      }
    })
      .then(function(prestations) {
        db.models.Prestation.destroy({
          where: {
            ID: req.params.id
          }
        });
        db.models.Menu.destroy({
          where: {
            ID: prestations[0].MenuID
          }
        });
      })
      .then(result1 => {
        //retourne tt les classes
        db.models.Classe.findAll({order: [["Nom", "ASC"]]}).then(result => {
          console.log(result);
          res.json(result.map(x => x.dataValues));
        });
      });
  });
};
