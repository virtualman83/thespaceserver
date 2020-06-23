module.exports = (app, db) => {
  app.post("/menu", (req, res) =>
    db.models.Menu.findAll({
      order: [["ID", "ASC"]],
      include: [{model:db.models.Actionmenu,include:[
      {model:db.models.ActionType}]},
          {model:db.models.CommandeType}]

      /*  ,{model:db.models.ClasseAlimentaire,
          include:{model:db.models.ClasseAlimentaire,as: "UnCompatibleClasse"}},
      {model:db.models.Famille},
      {model:db.models.Prestation}*/
      /*,
      where:{
        Actif:true

      }*/
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

  app.post("/insertmenu", (req, res) => {
    console.log(req.body.element);
    let monmenu = JSON.parse(req.body.element);

    db.models.Menu.create(monmenu).then(result => {

    if (monmenu.isCommandType){
      db.models.CommandeType.findOrCreate({
        where: {
          Nom: monmenu.Nom,
          Description: monmenu.Description,
          Icone: monmenu.Icone,
          MenuID:result.ID
        }
      });
    }


      //Insert Actionmenu
      if (monmenu.Actionmenus.length > 0) {
        monmenu.Actionmenus.forEach((item, i) => {
          if (item.Parameter1 == 1 && item.ActionTypeID==2){
            //'SELF_KIDS'
            //Navigation
            item.Parameter1 = result.ID;
          }
          db.models.Actionmenu.findOrCreate({
            where: {
              ActionTypeID: item.ActionTypeID,
              Parameter1: item.Parameter1,
              Parameter2: item.Parameter2,
              Parameter3: item.Parameter3,
              MenuID: result.ID,
              ScreenZone:item.ScreenZone
            }
          });
        });
      }

      db.models.Menu.findAll({
        order: [["ID", "ASC"]],
        include: [{model:db.models.Actionmenu,include:[
        {model:db.models.ActionType}]},
            {model:db.models.CommandeType}]
      }).then(result1 => {
        res.json(result1.map(x => x.dataValues));
      });
    });
  });

  app.post("/updatemenu", (req, res) => {
    console.log(req.body.element);
    let monMenu = JSON.parse(req.body.element);
    db.models.Menu.update(
      {
        Nom: monMenu.Nom,
        Description: monMenu.Description,
        Icone: monMenu.Icone,
        MenuParentID: monMenu.MenuParentID,
        Actif: monMenu.Actif,
        Prefab:monMenu.Prefab,
        PrefabParameter:monMenu.PrefabParameter,
      },
      {
        where: {
          ID: monMenu.ID
        }
      }
    ).then(result1 => {




      if (monMenu.isCommandType){
        db.models.CommandeType.findOrCreate({
          where: {
            Nom: monMenu.Nom,
            Description: monMenu.Description,
            Icone: monMenu.Icone,
            MenuID:monMenu.ID
          }
        });
      }else{
        db.models.CommandeType.destroy({
          where: {
            MenuID: monMenu.ID
          }
        })
      }




      db.models.Actionmenu.destroy({
        where: {
          MenuID: monMenu.ID
        }
      })
        .then(() => {
          if (monMenu.Actionmenus.length > 0) {
            monMenu.Actionmenus.forEach((item, i) => {

              if (item.Parameter1 == 1 && item.ActionTypeID==2){//'SELF_KIDS'
                //Navigation
                item.Parameter1 = monMenu.ID;
              }
              db.models.Actionmenu.findOrCreate({
                where: {
                  ActionTypeID: item.ActionTypeID,
                  Parameter1: item.Parameter1,
                  Parameter2: item.Parameter2,
                  Parameter3: item.Parameter3,
                  MenuID: monMenu.ID,
                  ScreenZone:item.ScreenZone
                }
              });
            });
          }
        })
        .then(() => {
          db.models.Menu.findAll({
            order: [["ID", "ASC"]],
            include: [{model:db.models.Actionmenu,include:[
            {model:db.models.ActionType}]},
                {model:db.models.CommandeType}]
          }).then(result => {
            //console.log(result);
            res.json(result.map(x => x.dataValues));
          });
        });
    });
  });

  app.delete("/deletemenu/:id", (req, res) => {

    db.models.Actionmenu.destroy({
      where: {
        MenuID: req.params.id
      }
    });

    db.models.Menu.destroy({
      where: {
        ID: req.params.id
      }
    }).then(result1 => {
      db.models.Menu.findAll({
        order: [["ID", "ASC"]],
        include: [{model:db.models.Actionmenu,include:[
        {model:db.models.ActionType}]},
            {model:db.models.CommandeType}]
      }).then(result => {
      //  console.log(result);
        res.json(result.map(x => x.dataValues));
      });
    });
  });
};
