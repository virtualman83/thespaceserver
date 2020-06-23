
module.exports = (app, db) => {
  app.post( "/service", (req, res) =>
    db.models.Service.findAll({  order: [
       ['Nom', 'ASC']
     ] }).then( (result) => {
    //  console.log(result);
      res.json(result.map(x=>x.dataValues));

    } )
  );
/*
  app.post( "/classe/:id", (req, res) =>
    db.models.classe.findByPk(req.params.id).then( (result) => res.json(result))
  );

*/

  app.post("/insertservice", (req, res) =>
  {
    console.log(req.body.element);
    let element = JSON.parse(req.body.element);

    db.models.Service.create(element).then( (result1) => {
        //retourne tt les classes
        db.models.Service.findAll({  order: [
           ['Nom', 'ASC']
         ] }).then( (result) => {
          console.log(result);
          res.json(result.map(x=>x.dataValues));

        } )

    });
   });

  app.post( "/updateservice", (req, res) =>{
    console.log(req.body.element);
      let element = JSON.parse(req.body.element);
    db.models.Service.update({
        Nom: element.Nom,
        Description: element.Description,
        Icone: element.Icone,
        Valeur : element.Valeur,
        Par: element.Par,

        Coef: element.Coef
      },
      {
      where: {
        ID: element.ID
      }
    }).then( (result1) =>{
      //retourne tt les classes
      db.models.Service.findAll({  order: [
         ['ID', 'ASC']
       ] }).then( (result) => {
        console.log(result);
        res.json(result.map(x=>x.dataValues));
      })

    })
  }
  );

  app.delete( "/deleteservice/:id", (req, res) =>
    db.models.Service.destroy({
        where: {
          ID: req.params.id
        }
      }).then((result1) => {
            console.log(result1);
          //retourne tt les classes
          db.models.Service.findAll({  order: [
             ['Nom', 'ASC']
           ] }).then( (result) => {
            console.log(result);
            res.json(result.map(x=>x.dataValues));

          })


      })
  );
}
