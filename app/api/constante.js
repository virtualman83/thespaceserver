
module.exports = (app, db) => {
  app.post( "/constante", (req, res) =>
    db.models.Constante.findAll({  order: [
       ['ID', 'ASC']
     ] }).then( (result) => {
      //console.log(result);
      res.json(result.map(x=>x.dataValues));

    } )
  );
/*
  app.post( "/classe/:id", (req, res) =>
    db.models.classe.findByPk(req.params.id).then( (result) => res.json(result))
  );

*/

  app.post("/insertconstante", (req, res) =>
  {
    console.log(req.body.element);
    let element = JSON.parse(req.body.element);

    db.models.Constante.create(element).then( (result1) => {
        //retourne tt les classes
        db.models.Constante.findAll({  order: [
           ['ID', 'ASC']
         ] }).then( (result) => {
          console.log(result);
          res.json(result.map(x=>x.dataValues));

        } )

    });
   });

  app.post( "/updateconstante", (req, res) =>{
    console.log(req.body.element);
      let element = JSON.parse(req.body.element);
    db.models.Constante.update({
        Nom: element.Nom,
        Description: element.Description,
        Icone: element.Icone,
        Type: element.Type,
        Valeur: element.Valeur
      },
      {
      where: {
        ID: element.ID
      }
    }).then( (result1) =>{
      //retourne tt les classes
      db.models.Constante.findAll({  order: [
         ['ID', 'ASC']
       ] }).then( (result) => {
        console.log(result);
        res.json(result.map(x=>x.dataValues));
      })

    })
  }
  );

  app.delete( "/deleteconstante/:id", (req, res) =>
    db.models.Constante.destroy({
        where: {
          ID: req.params.id
        }
      }).then((result1) => {
            console.log(result1);
          //retourne tt les classes
          db.models.Constante.findAll({  order: [
             ['ID', 'ASC']
           ] }).then( (result) => {
            console.log(result);
            res.json(result.map(x=>x.dataValues));

          })


      })
  );
}
