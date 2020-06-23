module.exports = (app, db) => {
  app.post("/SpriteImage", (req, res) =>
    db.models.SpriteImage.findAll({order: [["Nom", "ASC"]]}).then(result => {
    //  console.log(result);
      res.json(result.map(x => x.dataValues));
    })
  );
  /*
  app.post( "/classe/:id", (req, res) =>
    db.models.classe.findByPk(req.params.id).then( (result) => res.json(result))
  );

*/

  app.post("/insertSpriteImage", (req, res) => {
    console.log(req.body.element);
    let sprite = JSON.parse(req.body.element);

      db.models.SpriteImage.create(sprite).then(result1 => {
        //retourne tt les classes
        db.models.SpriteImage.findAll().then(result => {
          console.log(result);
          res.json(result.map(x => x.dataValues));
        });
      });

  });


  app.post("/updateSpriteImage", (req, res) => {
    console.log(req.body.element);
    let sprite = JSON.parse(req.body.element);
    db.models.SpriteImage.update(
      {
        Nom: sprite.Nom,
        Description: sprite.Description,
        Icone: sprite.Icone
      },
      {
        where: {
          ID: sprite.ID
        }
      }
    ).then(result1 => {
      //retourne tt les classes
      db.models.SpriteImage.findAll({order: [["Nom", "ASC"]]}).then(result => {
        console.log(result);
        res.json(result.map(x => x.dataValues));
      });
    });
  });

  app.delete("/deleteSpriteImage/:id", (req, res) => {

        db.models.SpriteImage.destroy({
          where: {
            ID: req.params.id
          }
        })
      .then(result1 => {
        //retourne tt les classes
        db.models.Famille.findAll({order: [["Nom", "ASC"]]}).then(result => {
          console.log(result);
          res.json(result.map(x => x.dataValues));
        });
      });
  });
};
