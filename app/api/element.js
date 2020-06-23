module.exports = (app, db) => {
  app.post("/element", (req, res) =>{
    db.models.Element.findAll({
      order: [['Nom', 'ASC']]
    }).then((result) => {
      //console.log(result);
      res.json(result.map(x => x.dataValues));

    })
  });

  app.post("/elementtransform", (req, res) =>{
    db.models.ElementTransform.findAll({
      order: [['Nom', 'ASC']],
      include: [{model: db.models.Element}]
    }).then((result) => {
      console.log(result);
      res.json(result.map(x => x.dataValues));

    })
  });




  app.post("/elementscene", (req, res) =>{
    db.models.Element.findAll({
      order: [
        ['Nom', 'ASC']
      ],where:{
        ElementType:"scene"
      }
    }).then((result) => {
      console.log(result);
      res.json(result.map(x => x.dataValues));

    })
  });


  app.post("/elementplan", (req, res) =>{
    db.models.Element.findAll({
      order: [
        ['Nom', 'ASC']
      ],where:{
        ElementType:"plan"
      }
    }).then((result) => {
      console.log(result);
      res.json(result.map(x => x.dataValues));

    })
  });


  app.post("/getelementscenebytype", (req, res) =>{
    let maclasse = req.body.element;
    console.log('Get all element with type '+maclasse)
    db.models.Element.findAll({
      order: [
        ['Nom', 'ASC']
      ],
      where:{
          Type:maclasse,
          ElementType:"scene"
      }
    }).then((result) => {
      console.log(result);
      res.json(result.map(x => x.dataValues));

    })
  });

  /*
    app.post( "/classe/:id", (req, res) =>
      db.models.classe.findByPk(req.params.id).then( (result) => res.json(result))
    );

  */

  app.post("/insertelement", (req, res) => {
    console.log(req.body.element);
    let maclasse = JSON.parse(req.body.element);

    db.models.Element.create(maclasse).then((result1) => {
      //retourne tt les classes
      db.models.Element.findAll({
        order: [
          ['Nom', 'ASC']
        ]
      }).then((result) => {
        console.log(result);
        res.json(result.map(x => x.dataValues));

      })

    });
  });

  app.post("/updateelement", (req, res) => {
    console.log(req.body.element);
    let maclasse = JSON.parse(req.body.element);
    db.models.Element.update({
      Nom: maclasse.Nom,
      Description: maclasse.Description,
      Icone: maclasse.Icone,
      Url_Blur0: maclasse.Url_Blur0,
      Url_Blur1: maclasse.Url_Blur1,
      Url_Blur2: maclasse.Url_Blur2,
      Type: maclasse.Type,
      ElementType: maclasse.ElementType

    }, {
      where: {
        ID: maclasse.ID
      }
    }).then((result1) => {
      //retourne tt les classes
      db.models.Element.findAll({
        order: [
          ['Nom', 'DESC']
        ]
      }).then((result) => {
        console.log(result);
        res.json(result.map(x => x.dataValues));
      })

    })
  });

  app.delete("/deleteaccessoire/:id", (req, res) =>
    db.models.Element.destroy({
      where: {
        ID: req.params.id
      }
    }).then((result1) => {
      db.models.Element.findAll({
        order: [
          ['Nom', 'DESC']
        ]
      }).then((result) => {
        console.log(result);
        res.json(result.map(x => x.dataValues));
      })

    })
  );
}
