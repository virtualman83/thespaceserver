
module.exports = (app, db) => {
  app.post( "/background", (req, res) =>
    db.models.Background.findAll({
      order: [
       ['Nom', 'ASC']
     ]
      }).then( (result) => {
    //  console.log(result);
      res.json(result.map(x=>x.dataValues));

    } )
  );
/*
  app.post( "/classe/:id", (req, res) =>
    db.models.classe.findByPk(req.params.id).then( (result) => res.json(result))
  );

*/

  app.post("/insertbackground", (req, res) =>
  {
    console.log(req.body.element);
    let bg = JSON.parse(req.body.element);

    db.models.Background.create(bg).then( (result) => {
        //retourne tt les classes
        db.models.Background.findAll({
          order: [
           ['ID', 'ASC']
         ]
          }).then( (result) => {
          console.log(result);
          res.json(result.map(x=>x.dataValues));

        } )

    });
   });

  app.post( "/updatebackground", (req, res) =>{
    console.log(req.body.element);
    let maclasse = JSON.parse(req.body.element);
    db.models.Background.update({
        Nom: maclasse.Nom,
        Description: maclasse.Description,
        Icone: maclasse.Icone,
        Url:maclasse.Url,
        Type:maclasse.Type
      },
      {
      where: {
        ID: maclasse.ID
      }
    }).then( (result1) =>{
      db.models.Background.findAll({
        order: [
         ['Nom', 'ASC']
       ]
        }).then( (result) => {
        console.log(result);
        res.json(result.map(x=>x.dataValues));

      } )

    })
  }
  );

  app.delete( "/deletebackground/:id", (req, res) =>
    db.models.Background.destroy({
        where: {
          ID: req.params.id
        }
      }).then((result1) => {
            console.log(result1);
          //retourne tt les classes
          db.models.Background.findAll({
            order: [
             ['Nom', 'ASC']
           ]
            }).then( (result) => {
            console.log(result);
            res.json(result.map(x=>x.dataValues));

          } )


      })
  );
}
