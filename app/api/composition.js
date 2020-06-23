module.exports = (app, db) => {
  app.post("/composition", (req, res) =>
    db.models.Composition.findAll({
      order: [
        ["Nom", "ASC"]
      ],
      include: [{
          model: db.models.Ingredient,
          as: "ingredients"
        },
        {
          model: db.models.ElementTransform,
          as: "transforms",
          include: [{
            model: db.models.Element,
            as: "element"
          }]
        },
        {
          model: db.models.Light,
          as: "lights"
        },
        {
          model: db.models.Scene,
          as: "scene",
          include: [{
              model: db.models.ElementTransform,
              as: "transforms",
              include: [{
                model: db.models.Element,
                as: "element"
              }]
            },
            {
              model: db.models.Background,
              as: "background"
            }
          ]
        },
        {
          model: db.models.ClasseAlimentaire,
          as: "classes"
        },
        {
          model: db.models.Famille,
          as: "familles",
          include: [{
            model: db.models.Ingredient,
            as: "ingredients"
          }]
        },
        {
          model: db.models.Device,
          as: "CamerasCuisine"
        }
      ]
    }).then(result => {
      //  console.log(result);
      res.json(result.map(x => x.dataValues));
    })
  );



  app.post("/insertcomposition", async function (req, res) {
    //  console.log(req.body.element);
    let macomposition = JSON.parse(req.body.element);
    db.models.Composition.create({
      Nom: macomposition.Nom,
      Description: macomposition.Description,
      Icone: macomposition.Icone,
      Disponible: macomposition.Disponible,
      Prix: macomposition.Prix,
      SceneBlurLevel: macomposition.SceneBlurLevel,
      sceneID: macomposition.sceneID,
      Type: macomposition.Type
    }).then(composition => {
      macomposition.classes.forEach(async function (item, i) {
        let [myClasse, classecreated] = await db.models.CompositionClasse.findOrCreate({
          where: {
            CompositionID: composition.ID,
            ClasseAlimentaireID: item.ID
          }
        });
      });
      macomposition.familles.forEach(async function (item, i) {
        let [myFamille, famcreated] = await db.models.CompositionFamille.findOrCreate({
          where: {
            CompositionID: composition.ID,
            FamilleID: item.ID
          }
        });
      });
      macomposition.ingredients.forEach(async function (item, i) {
        let [myIng, ingcreated] = await db.models.IngredientComposition.findOrCreate({
          where: {
            Indisponsable: item.IngredientComposition.Indisponsable,
            Quantite: item.IngredientComposition.Quantite,
            CompositionID: composition.ID,
            IngredientID: item.ID
          }
        });
      });
      macomposition.CamerasCuisine.forEach(async function (item, i) {
        let [myCompDevice, compdevcreated] = await db.models.CompositionDevice.findOrCreate({
          where: {
            CompositionID: composition.ID,
            DeviceID: item.ID
          }
        });
      });


      //Lights
      macomposition.lights.forEach(async function (item, i) {
        let [myLight, lightcreated] = await db.models.Light.findOrCreate({
          where: {
            Red: item.Red,
            Green: item.Green,
            Blue: item.Blue,
            InitialLightIntensity: item.InitialLightIntensity,
            InitialLightInnerRadius: item.InitialLightInnerRadius,
            InitialLightOuterRadius: item.InitialLightOuterRadius,
            LightShake: item.LightShake,
            FinalLightIntensity: item.FinalLightIntensity,
            FinalLightInnerRadius: item.FinalLightInnerRadius,
            FinalLightOuterRadius: item.FinalLightOuterRadius,
            PosInitialX: item.PosInitialX,
            PosInitialY: item.PosInitialY,
            InitialRotation: item.InitialRotation,
            PosFinalX: item.PosFinalX,
            PosFinalY: item.PosFinalY,
            FinalRotation: item.FinalRotation,
            AnimationSpeed: item.AnimationSpeed,
            Rotation: item.Rotation,
            RotationSpeed: item.RotationSpeed,
            CompositionID: composition.ID
          }
        });
      });
      //Elements
      macomposition.transforms.forEach(async function (item, i) {
        let [myElement, elemcreated] = await db.models.Element.findOrCreate({
          where: {
            Nom: macomposition.Nom,
            Description: macomposition.Description,
            Icone: item.element.Url_Blur0,
            Url_Blur0: item.element.Url_Blur0,
            Url_Blur1: item.element.Url_Blur1,
            Url_Blur2: item.element.Url_Blur2,
            ElementType: item.element.ElementType
          }
        });

        let [myElementTransform, elemTranscreated] = await db.models.ElementTransform.findOrCreate({
          where: {
            PosInitialX: item.PosInitialX,
            PosInitialY: item.PosInitialY,
            InitialScale: item.InitialScale,
            InitialRotation: item.InitialRotation,
            InitialAlpha: item.InitialAlpha,
            PosFinalX: item.PosFinalX,
            PosFinalY: item.PosFinalY,
            FinalScale: item.FinalScale,
            FinalRotation: item.FinalRotation,
            FinalAlpha: item.FinalAlpha,
            AnimationSpeed: item.AnimationSpeed,
            ZOrder: item.ZOrder,
            flipX: item.flipX,
            flipY: item.flipY,
            Rotation: item.Rotation,
            RotationSpeed: item.RotationSpeed,
            ElementType: "composition",
            ElementID: myElement.ID
          }
        });
        let [myTransRecipient, transRecicreated] = await db.models.TransformRecipient.findOrCreate({
          where: {
            ElementTransformId: myElementTransform.ID,
            RecipientId: composition.ID
          }
        });
      });

      res.send("ok");

    });
  });




  app.post("/UpdateCompositionDisponible", async function (req, res) {
    console.log(req.body.json);
    let comp = JSON.parse(req.body.json);

    db.models.Composition.findOne({
      where: {
        ID: comp.ID
      }
    }).then(composition => {
      //  console.log(result);
      composition.Disponible = comp.Disponible;
      composition.save().catch(function (error) {
        console.log(error);
      });

      comp.ingredients.forEach(async function (item, i) {
        let [myIngredient, ingdevcreated] = await db.models.Ingredient.findOrCreate({
          where: {
            ID: item.ID,
          }
        });
        myIngredient.Disponible = item.Disponible;
        await myIngredient.save().catch(function (error) {
          console.log(error);
        });
      });
      res.send("ok");
    });



   
  });


  app.post("/updatecomposition", async function (req, res) {

    let macomposition = JSON.parse(req.body.element);
    db.models.Composition.update({
      Nom: macomposition.Nom,
      Description: macomposition.Description,
      Icone: macomposition.Icone,
      Disponible: macomposition.Disponible,
      Prix: macomposition.Prix,
      SceneBlurLevel: macomposition.SceneBlurLevel,
      sceneID: macomposition.sceneID,
      Type: macomposition.Type
    }, {
      where: {
        ID: macomposition.ID
      }
    }).then(composition => {
  //Classes
      db.models.CompositionClasse.destroy({
        where: {
          CompositionID: macomposition.ID
        }
      }).then(() => {
        macomposition.classes.forEach(async function (item, i) {
          let [myclasse, classecreated] = await db.models.CompositionClasse.findOrCreate({
            where: {
              CompositionID: macomposition.ID,
              ClasseAlimentaireID: item.ID
            }
          });
        });
      })
//Famille
      db.models.CompositionFamille.destroy({
        where: {
          CompositionID: macomposition.ID
        }
      }).then(() => {
        macomposition.familles.forEach(async function (item, i) {
          let [myfamily, famcreated] = await db.models.CompositionFamille.findOrCreate({
            where: {
              CompositionID: macomposition.ID,
              FamilleID: item.ID
            }
          });
        });
      })
//CameraDevices
db.models.CompositionDevice.destroy({
  where: {
    CompositionID: macomposition.ID
  }
}).then(() => {
 macomposition.CamerasCuisine.forEach(async function (item, i) {
    let [myCompDevice, compdevcreated] = await db.models.CompositionDevice.findOrCreate({
      where: {
        CompositionID: macomposition.ID,
        DeviceID: item.ID
      }
    });
  });
})









//Ingredients
      db.models.IngredientComposition.destroy({
        where: {
          CompositionID: macomposition.ID
        }
      }).then(() => {
        macomposition.ingredients.forEach(async function (item, i) {
          let [ingComp, ingcreated] = await db.models.IngredientComposition.findOrCreate({
            where: {
              Indisponsable: item.IngredientComposition.Indisponsable,
              Quantite: item.IngredientComposition.Quantite,
              CompositionID: macomposition.ID,
              IngredientID: item.ID
            }
          });
        });
      })

      //Elements
      db.models.ElementTransform.findAll({
        where: {
          ElementType: "composition"
        }
      }).then(elementsIds => {
        let arrayID = elementsIds.map(element => element.ID);
        db.models.TransformRecipient.destroy({
          where: {
            RecipientId: macomposition.ID,
            ElementTransformId: arrayID
          }
        }).then(() => {
          /*db.models.ElementTransform.destroy({
            where: {
              ID: arrayID
            }
          }).then(() => {*/

            macomposition.transforms.forEach(async function (item, i) {
              let [element, elemcreated] = await db.models.Element.findOrCreate({
                where: {
                  Nom: macomposition.Nom,
                  Description: macomposition.Description,
                  Icone: item.element.Url_Blur0,
                  Url_Blur0: item.element.Url_Blur0,
                  Url_Blur1: item.element.Url_Blur1,
                  Url_Blur2: item.element.Url_Blur2,
                  ElementType: "composition"
                }
              })

              let [elementTransform, elemtranscreated] = await db.models.ElementTransform.findOrCreate({
                where: {
                  PosInitialX: item.PosInitialX,
                  PosInitialY: item.PosInitialY,
                  InitialScale: item.InitialScale,
                  InitialRotation: item.InitialRotation,
                  InitialAlpha: item.InitialAlpha,
                  PosFinalX: item.PosFinalX,
                  PosFinalY: item.PosFinalY,
                  FinalScale: item.FinalScale,
                  FinalRotation: item.FinalRotation,
                  FinalAlpha: item.FinalAlpha,
                  AnimationSpeed: item.AnimationSpeed,
                  ZOrder: item.ZOrder,
                  flipX: item.flipX,
                  flipY: item.flipY,
                  Rotation: item.Rotation,
                  RotationSpeed: item.RotationSpeed,
                  ElementType: "composition",
                  ElementID: element.ID
                }
              })
              let [transformRecipient, tranreccreated] = await db.models.TransformRecipient.findOrCreate({
                where: {
                  ElementTransformId: elementTransform.ID,
                  RecipientId: macomposition.ID
                }
              });
            })
         // })
        })
        //Lights
        db.models.Light.destroy({
          where: {
            CompositionID: macomposition.ID
          }
        }).then(() => {

          macomposition.lights.forEach(async function (item, i) {
            let [light, lightcreated] = await db.models.Light.findOrCreate({
              where: {
                Red: item.Red,
                Green: item.Green,
                Blue: item.Blue,
                InitialLightIntensity: item.InitialLightIntensity,
                InitialLightInnerRadius: item.InitialLightInnerRadius,
                InitialLightOuterRadius: item.InitialLightOuterRadius,
                LightShake: item.LightShake,
                FinalLightIntensity: item.FinalLightIntensity,
                FinalLightInnerRadius: item.FinalLightInnerRadius,
                FinalLightOuterRadius: item.FinalLightOuterRadius,
                PosInitialX: item.PosInitialX,
                PosInitialY: item.PosInitialY,
                InitialRotation: item.InitialRotation,
                PosFinalX: item.PosFinalX,
                PosFinalY: item.PosFinalY,
                FinalRotation: item.FinalRotation,
                AnimationSpeed: item.AnimationSpeed,
                Rotation: item.Rotation,
                RotationSpeed: item.RotationSpeed,
                CompositionID: macomposition.ID
              }
            });
          });
          res.send("ok");
        });
      });
    });
  })



  app.delete("/deletecomposition/:id", (req, res) => {
    let compositionID = req.params.id;
    let works = [];
    let work1 = db.models.ElementTransform.findAll({
      where: {
        ElementType: "composition"
      }
    }).then(elementsIds => {
      let arrayID = elementsIds.map(element => element.ID);
      console.log("arrayID ==> " + arrayID);
      db.models.TransformRecipient.destroy({
        where: {
          RecipientId: compositionID,
          ElementTransformId: arrayID
        }
      }).then(() => {
        db.models.ElementTransform.destroy({
          where: {
            ID: arrayID
          }
        }).then(() => {
          db.models.Composition.destroy({
            where: {
              ID: compositionID
            }
          }).then(() => {
            db.models.Composition.findAll({
              order: [
                ["Nom", "ASC"]
              ],
              include: [{
                  model: db.models.Ingredient,
                  as: "ingredients"
                },
                {
                  model: db.models.ElementTransform,
                  as: "transforms",
                  include: [{
                    model: db.models.Element,
                    as: "element"
                  }]
                },
                {
                  model: db.models.Light,
                  as: "lights"
                },
                {
                  model: db.models.Scene,
                  as: "scene",
                  include: [{
                      model: db.models.ElementTransform,
                      as: "transforms",
                      include: [{
                        model: db.models.Element,
                        as: "element"
                      }]
                    },
                    {
                      model: db.models.Background,
                      as: "background"
                    }
                  ]
                },
                {
                  model: db.models.ClasseAlimentaire,
                  as: "classes"
                },
                {
                  model: db.models.Famille,
                  as: "familles",
                  include: [{
                    model: db.models.Ingredient,
                    as: "ingredients"
                  }]
                }
              ]
            }).then(result => {
              //  console.log(result);
              res.json(result.map(x => x.dataValues));
            });
          });
        });
      });
    });
  });
};