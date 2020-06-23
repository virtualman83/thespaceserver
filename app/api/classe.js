module.exports = (app, db) => {
  app.post("/classe", (req, res) =>
    db.models.ClasseAlimentaire.findAll({
      order: [["ID", "ASC"]],
      include: [{model: db.models.ClasseAlimentaire, as: "UnCompatibleClasse"}]
    }).then(result => {
      res.json(result.map(x => x.dataValues));
    })
  );
  /*
  app.post( "/classe/:id", (req, res) =>
    db.models.Classe.findByPk(req.params.id).then( (result) => res.json(result))
  );

*/

  app.post("/insertclasse", (req, res) => {
    console.log(req.body.element);
    let maclasse = JSON.parse(req.body.element);
    db.models.Menu.findAll({
      limit: 1,
      where: {
        Nom: "CLASSES"
      }
    }).then(root => {
      db.models.Menu.findOrCreate({
        where: {
          Nom: maclasse.Nom,
          Description: maclasse.Description,
          Icone: maclasse.Icone,
          Removable: true,
          Updatable: true,
          Actif: true,
          MenuParentID: root[0].ID
        }
      }).spread(function(menu, isCreated) {
        maclasse.MenuID = menu.ID;
        db.models.ClasseAlimentaire.create(maclasse).then(result1 => {
          let works = [];

          maclasse.UnCompatibleClasse.forEach((item, i) => {
            let work = db.models.UnCompatibleClasses.findOrCreate({
              where: {
                ClasseAlimentaireID: result1.ID,
                UnCompatibleClasseID: item.ID
              }
            });
            works.push(work);
          });

          Promise.all(works).then(() => {
            //retourne tt les classes
            db.models.ClasseAlimentaire.findAll({
              order: [["ID", "ASC"]],
              include: [
                {model: db.models.ClasseAlimentaire, as: "UnCompatibleClasse"}
              ]
            }).then(result => {
              console.log(result);
              res.json(result.map(x => x.dataValues));
            });
          });
        });
      });
    });
  });

  app.post("/updateclasse", (req, res) => {
    console.log(req.body.element);
    let maclasse = JSON.parse(req.body.element);
    db.models.ClasseAlimentaire.update(
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
console.log("Destroy Uncompatible with "+maclasse.ID);
      // Then, we do some calls passing this transaction as an option:
     db.models.UnCompatibleClasses.destroy({
        where: {
          ClasseAlimentaireID: maclasse.ID
        }
      }).then(() => {
        maclasse.UnCompatibleClasse.forEach((item, i) => {
          db.models.UnCompatibleClasses.findOrCreate({
            where: {
              ClasseAlimentaireID: maclasse.ID,
              UnCompatibleClasseID: item.ID
            }
          });
        });
      }).then(() => {
        res.send("ok");
      });

    });
  });

  app.delete("/deleteclasse/:id", (req, res) =>
    db.models.ClasseAlimentaire.destroy({
      where: {
        ID: req.params.id
      }
    }).then(result1 => {
      let works = [];
      let work = db.models.Menu.destroy({
        where: {
          ID: req.params.id
        }
      });
      works.push(work);
      let work2 = db.models.UnCompatibleClasses.destroy({
        where: {
          ClasseAlimentaireID: req.params.id
        }
      });
      works.push(work2);

      Promise.all(works).then(() => {
        //retourne tt les classes
        db.models.ClasseAlimentaire.findAll({
          order: [["ID", "ASC"]],
          include: [
            {model: db.models.ClasseAlimentaire, as: "UnCompatibleClasse"}
          ]
        }).then(result => {
          console.log(result);
          res.json(result.map(x => x.dataValues));
        });
      });
    })
  );
};
