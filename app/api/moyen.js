
module.exports = (app, db) => {
  app.post( "/moyen", (req, res) =>
    db.models.MoyenPayement.findAll({  order: [
       ['ID', 'ASC']
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

  app.post("/insertmoyen", (req, res) =>
  {
    console.log(req.body.element);
    let element = JSON.parse(req.body.element);

    db.models.MoyenPayement.create(element).then( (result1) => {
        //retourne tt les classes
        db.models.MoyenPayement.findAll({  order: [
           ['ID', 'ASC']
         ] }).then( (result) => {
          console.log(result);
          res.json(result.map(x=>x.dataValues));

        } )

    });
   });

  app.post( "/updatemoyen", (req, res) =>{
    console.log(req.body.element);
      let element = JSON.parse(req.body.element);
    db.models.MoyenPayement.update({
        Nom: element.Nom,
        Description: element.Description,
        Icone: element.Icone,

      },
      {
      where: {
        ID: element.ID
      }
    }).then( (result1) =>{
      //retourne tt les classes
      db.models.MoyenPayement.findAll({  order: [
         ['ID', 'DESC']
       ] }).then( (result) => {
        console.log(result);
        res.json(result.map(x=>x.dataValues));
      })

    })
  }
  );

  app.delete( "/deletemoyen/:id", (req, res) =>
    db.models.MoyenPayement.destroy({
        where: {
          ID: req.params.id
        }
      }).then((result1) => {
            console.log(result1);
          //retourne tt les classes
          db.models.MoyenPayement.findAll({  order: [
             ['ID', 'ASC']
           ] }).then( (result) => {
            console.log(result);
            res.json(result.map(x=>x.dataValues));

          })


      })
  );
}
