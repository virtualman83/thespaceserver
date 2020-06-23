module.exports = (app, db) => {
  app.post("/ingredient", (req, res) =>
    db.models.Ingredient.findAll({
      order: [
        ["Nom", "ASC"]
      ],
      include: [{
        model: db.models.Famille,
        as: "familles"
      }]
    }).then(result => {
      //  console.log(result);
      res.json(result.map(x => x.dataValues));
    })
  );

  app.post("/getIngredientWithComposition", (req, res) =>
    db.models.Ingredient.findAll({
      order: [
        ["Nom", "ASC"]
      ],
      include: [{
          model: db.models.Famille,
          as: "familles"
        },
        {
          model: db.models.Composition,
          as: "compositions"
        }

      ]

    }).then(result => {
      //  console.log(result);
      res.json(result.map(x => x.dataValues));
    })
  );


  app.post("/getIngredientByID", (req, res) => {
    let id = req.body.element;
    db.models.Ingredient.findByPk(id).then(result => {
      //  console.log(result);
      res.json(result);
    });
  });

  app.post("/getFamilyingredient", (req, res) => {
    let familyID = req.body.idFamily;
    console.log(familyID);
    db.models.Famille.findOne({
      include: [db.models.Ingredient],
      where: {
        ID: familyID
      }
    }).then(result => {
      //  console.log(result);
      res.json(result.dataValues);
    });
  });



  app.post("/UpdateIngredientComposition", async function (req, res) {
    console.log(req.body.json);
    let ing = JSON.parse(req.body.json);

    db.models.Ingredient.findOne({
      where: {
        ID: ing.ID
      }
    }).then(ingredient => {
      //  console.log(result);
      ingredient.Disponible = ing.Disponible;
      ingredient.Ajoutable = ing.Ajoutable;
      ingredient.save().catch(function (error) {
        console.log(error);
      });

      ing.compositions.forEach(async function (item, i) {
        let [myComposition, compdevcreated] = await db.models.Composition.findOrCreate({
          where: {
            ID: item.ID,
          }
        });
        myComposition.Disponible = item.Disponible;
        await myComposition.save().catch(function (error) {
          console.log(error);
        });
      });
      res.send("ok");
    });



   
  });




  app.post("/insertingredient", (req, res) => {
    console.log(req.body.element);
    let ing = JSON.parse(req.body.element);
    db.models.Ingredient.create(ing)
      .then(ingredient => {
        let works = [];
        ing.familles.forEach((item, i) => {
          let work = db.models.IngredientFamille.findOrCreate({
            where: {
              IngredientID: ingredient.ID,
              FamilleID: item.ID
            }
          });
          works.push(work);
        });
        Promise.all(works).then(() => {
          db.models.Ingredient.findAll({
            order: [
              ["Nom", "ASC"]
            ],
            include: [{
              model: db.models.Famille,
              as: "familles"
            }]
          }).then(result => {
            //  console.log(result);
            res.json(result.map(x => x.dataValues));
          });
        });
      })
      .catch(function (e) {
        res.send("Erreur " + e);
      });
  });

  app.post("/destroyingredientfamille", (req, res) => {
    let ingfam = JSON.parse(req.body.ingfam);
    console.log(ingfam);
    db.models.IngredientFamille.destroy({
      where: {
        IngredientID: ingfam.ingredientID,
        FamilleID: ingfam.familleID
      }
    }).then(result => {
      res.send("ok");
    });
  });

  /*  console.log(req.body.element);
    let ing = JSON.parse(req.body.element);
    db.models.Ingredient.create(ing).then( ingredient => {
         let works = [];
          ing.familles.forEach((item, i) => {
              console.log("ingredient id "+ingredient.ID+" famille ID "+item.ID);
                let work =   db.models.IngredientFamille.findOrCreate({
                      where : {
                        ingredientID : ingredient.ID,
                        familleID : item.ID
                      }
                   })
                 works.push(work);
          });
        Promise.all(works).then(() =>  {
          db.models.Ingredient.findAll({
            order: [
              ['ID', 'ASC']
            ],
            include: [
             db.models.Famille
            ]
          }).then( (result) => {
          //  console.log(result);
            res.json(result.map(x=>x.dataValues));
          })

        });
    }).catch(function (e){
      res.send("Erreur "+e);
    });*/

  app.post("/updateingredient", (req, res) => {
    console.log(req.body.element);
    let ing = JSON.parse(req.body.element);
    console.log("Calories " + ing.Calories + " where Ingredient ID " + ing.ID);
    db.models.Ingredient.update({
      Nom: ing.Nom,
      Description: ing.Description,
      Icone: ing.Icone,
      Calories: ing.Calories,
      Glucides: ing.Glucides,
      Lipides: ing.Lipides,
      Proteines: ing.Proteines,
      Prix: ing.Prix,
      Ajoutable: ing.Ajoutable,

    }, {
      where: {
        ID: ing.ID
      }
    }).then(updatedingredient => {
      console.log("Update done");
      //Destroy all old links
      db.models.IngredientFamille.destroy({
        where: {
          IngredientID: ing.ID
        }
      }).then(cleanedingredient => {
        console.log("Delete done");
        //Insert new ones
        let works = [];
        ing.familles.forEach((item, i) => {
          let work = db.models.IngredientFamille.findOrCreate({
            where: {
              IngredientID: ing.ID,
              FamilleID: item.ID
            }
          });
          works.push(work);
        });
        Promise.all(works).then(() => {
          db.models.Ingredient.findAll({
            order: [
              ["Nom", "ASC"]
            ],
            include: [{
              model: db.models.Famille,
              as: "familles"
            }]
          }).then(result => {
            //  console.log(result);
            res.json(result.map(x => x.dataValues));
          });
        });
      });
    });
  });

  app.delete("/deleteingredient/:id", (req, res) =>
    db.models.Ingredient.destroy({
      where: {
        ID: req.params.id
      }
    }).then(result1 => {
      console.log(result1);
      //retourne tt les familles

      db.models.Ingredient.findAll({
        order: [
          ["Nom", "ASC"]
        ],
        include: [{
          model: db.models.Famille,
          as: "familles"
        }]
      }).then(result => {
        //  console.log(result);
        res.json(result.map(x => x.dataValues));
      });
    })
  );
};