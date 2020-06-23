module.exports = (app, db) => {
  app.post("/famille", (req, res) =>
      db.models.Famille.findAll(
        {order: [["Nom", "ASC"]],
        include: [{model: db.models.Ingredient, as: "ingredients"}]
        }).then(result => {
      //  console.log(result);
        res.json(result.map(x => x.dataValues));
      })
  );


  /*
  app.post( "/classe/:id", (req, res) =>
    db.models.classe.findByPk(req.params.id).then( (result) => res.json(result))
  );

*/

  app.post("/insertfamille", (req, res) => {
    console.log(req.body.element);
    let mafamille = JSON.parse(req.body.element);
    db.models.Menu.findAll({
      limit: 1,
      where: {
        Nom: "FAMILLE"
      }
    }).then(root => {
      db.models.Famille.create(mafamille).then(result1 => {
        db.models.Menu.findOrCreate({
          where: {
            Nom: mafamille.Nom,
            Description: mafamille.Description,
            Icone: mafamille.Icone,
            Removable: true,
            Updatable: true,
            Actif: true,
            MenuParentID: root[0].ID
          }
        });

        //retourne tt les classes
        db.models.Famille.findAll().then(result => {
          console.log(result);
          res.json(result.map(x => x.dataValues));
        });
      });
    });
  });

  app.post("/updatefamille", (req, res) => {
    console.log(req.body.element);
    let maclasse = JSON.parse(req.body.element);
    db.models.Famille.update(
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
      db.models.Famille.findAll(
        {order: [["Nom", "ASC"]],
        include: [{model: db.models.Ingredient, as: "ingredients"}]
        }).then(result => {
        console.log(result);
        res.json(result.map(x => x.dataValues));
      })
    });
  });

  app.delete("/deletefamille/:id", (req, res) => {
    db.models.Famille.findAll({
      limit: 1,
      where: {
        ID: req.params.id
      }
    })
      .then(function(familles) {
        db.models.Famille.destroy({
          where: {
            ID: req.params.id
          }
        });
        db.models.Menu.destroy({
          where: {
            ID: familles[0].MenuID
          }
        });
      })
      .then(result1 => {
        //retourne tt les classes
        db.models.Famille.findAll(
          {order: [["Nom", "ASC"]],
          include: [{model: db.models.Ingredient, as: "ingredients"}]
          }).then(result => {
          console.log(result);
          res.json(result.map(x => x.dataValues));
        })
      });
  });
};
