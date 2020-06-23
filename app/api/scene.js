module.exports = (app, db) => {
  app.post("/scene", (req, res) => {
    db.models.Scene.findAll({
      order: [
        ["Nom", "ASC"]
      ],
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
    }).then(result => {
      //const nodeData = result.map((node) =>node.get({ plain: true }));
      //  console.log(JSON.stringify(result));
      res.json(result);
    });
  });









  app.post("/insertscene", (req, res) => {
    console.log(req.body.element);
    let mascene = JSON.parse(req.body.element);

    db.models.Scene.findOrCreate({
      where: {
        Nom: mascene.Nom,
        Description: mascene.Description,
        Icone: mascene.Icone,
        Type: mascene.Type,
        backgroundID: mascene.backgroundID
      }
    }).spread(function (scene, isCreated) {
      let works = [];
      mascene.transforms.forEach((item, i) => {
        let work = db.models.ElementTransform.findOrCreate({
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
            ElementType: "scene",
            ElementID: item.ElementID
          }
        }).spread(function (element, isCreated) {
          db.models.TransformRecipient.findOrCreate({
            where: {
              ElementTransformId: element.ID,
              RecipientId: scene.ID
            }
          });
        });
        works.push(work);
      });
      Promise.all(works).then(() => {
        db.models.Scene.findAll({
          order: [
            ["Nom", "ASC"]
          ],
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
        }).then(result => {
          //const nodeData = result.map((node) =>node.get({ plain: true }));
          console.log(JSON.stringify(result));
          res.json(result);
        });
      });
    });
  });

  app.post("/updatesceneplan", async function (req, res) {
    //  console.log(req.body.element);
    let restaurantData = JSON.parse(req.body.element);
    restaurantData.Tables.forEach(async function (item, i) {

      let myTransform;
      if (item.transform.ID == 0) {
        // New Table
        [myTransform, created] = await db.models.ElementTransform.findOrCreate({
          where: {
            PosInitialX: item.transform.PosInitialX,
            PosInitialY: item.transform.PosInitialY,
            InitialScale: item.transform.InitialScale,
            InitialRotation: item.transform.InitialRotation,
            InitialAlpha: item.transform.InitialAlpha,
            PosFinalX: item.transform.PosFinalX,
            PosFinalY: item.transform.PosFinalY,
            FinalScale: item.transform.FinalScale,
            FinalRotation: item.transform.FinalRotation,
            FinalAlpha: item.transform.FinalAlpha,
            AnimationSpeed: item.transform.AnimationSpeed,
            ZOrder: item.transform.ZOrder,
            flipX: item.transform.flipX,
            flipY: item.transform.flipY,
            Rotation: item.transform.Rotation,
            RotationSpeed: item.transform.RotationSpeed,
            ElementType: "plan",
            ElementID: item.transform.ElementID
          }
        })
      } else {
        //Old Table
        myTransform = await db.models.ElementTransform.findOne({
          where: {
            ID: item.transform.ID
          }
        })
        myTransform.PosInitialX = item.transform.PosInitialX;
        myTransform.PosInitialY = item.transform.PosInitialY;
        myTransform.InitialScale = item.transform.InitialScale;
        myTransform.InitialRotation = item.transform.InitialRotation;
        myTransform.InitialAlpha = item.transform.InitialAlpha;
        myTransform.PosFinalX = item.transform.PosFinalX;
        myTransform.PosFinalY = item.transform.PosFinalY;
        myTransform.FinalScale = item.transform.FinalScale;
        myTransform.FinalRotation = item.transform.FinalRotation;
        myTransform.FinalAlpha = item.transform.FinalAlpha;
        myTransform.AnimationSpeed = item.transform.AnimationSpeed;
        myTransform.ZOrder = item.transform.ZOrder;
        myTransform.flipX = item.transform.flipX;
        myTransform.flipY = item.transform.flipY;
        myTransform.Rotation = item.transform.Rotation;
        myTransform.RotationSpeed = item.transform.RotationSpeed;
        myTransform.ElementType = "plan";
        myTransform.ElementID = item.transform.ElementID;
        await myTransform.save().catch(function (error) {
          console.log(error);
        });
      }
      let table;
      if (item.ID == 0) {
        // New Table
        [table, created] = await db.models.Table.findOrCreate({
          where: {
            Nom: item.Nom,
            Description: item.Description,
            KeyWord: item.KeyWord,
            TableType: item.TableType,
            ElementTransformID: myTransform.ID
          }
        })
      } else {
        //Old Table
        table = await db.models.Table.findOne({
          where: {
            ID: item.ID
          }
        })
        table.Nom = item.Nom;
        table.Description = item.Description;
        table.KeyWord = item.KeyWord;
        table.TableType = item.TableType;
        table.ElementTransformID = myTransform.ID;
        await table.save().catch(function (error) {
          console.log(error);
        });
      }

      if (table.TableType == "TABLE_CONNECTE") {
        item.Ecrans.forEach(async function (ecran, indexScreen) {
          let myScreen;
          if (ecran.ID == 0) {
            // New Ecran
            [myScreen, created] = await db.models.Device.findOrCreate({
              where: {
                DeviceType: ecran.DeviceType,
                Nom: ecran.Nom,
                Description: ecran.Description,
                KeyWord: ecran.KeyWord,
                Login: ecran.Login,
                Password: ecran.Password,
                LocationID: ecran.LocationID,
                DeviceUniqueIdentifier: ecran.DeviceUniqueIdentifier
              }
            })

            //Insert IPS
            if (ecran.IPAdresses != undefined) {
              ecran.IPAdresses.forEach(async function (adresse, i) {
                [ipDevice, created] = await db.models.IPAdresse.findOrCreate({
                  where: {
                    AdresseIP: adresse.AdresseIP,
                    Type: adresse.Type,
                    DeviceID: myScreen.ID,
                  }
                })
              })
            }
          } else {
            //Old Ecran
            myScreen = await db.models.Device.findOne({
              where: {
                ID: ecran.ID
              }
            })

            myScreen.DeviceType = ecran.DeviceType;
            myScreen.Nom = ecran.Nom;
            myScreen.Description = ecran.Description;
            myScreen.KeyWord = ecran.KeyWord;
            myScreen.Login = ecran.Login;
            myScreen.Password = ecran.Password;
            myScreen.LocationID = ecran.LocationID;
            myScreen.DeviceUniqueIdentifier = ecran.DeviceUniqueIdentifier;

            db.models.IPAdresse.destroy({
              where: {
                DeviceID: myScreen.ID
              }
            }).then(result => {
              //Insert IPS
              if (ecran.IPAdresses != undefined) {
                ecran.IPAdresses.forEach(async function (adresse, i) {
                  [ipDevice, created] = await db.models.IPAdresse.findOrCreate({
                    where: {
                      AdresseIP: adresse.AdresseIP,
                      Type: adresse.Type,
                      DeviceID: myScreen.ID
                    }
                  })
                })
              }
            });


            await myScreen.save().catch(function (error) {
              console.log(error);
            });
          }

          try {
            let connection = await db.models.DeviceTable.findOne({
              where: {
                TableID: table.ID,
                DeviceID: myScreen.ID
              }
            });

            if (connection == null) {

              const deviceTableConnection = db.models.DeviceTable.build({
                TableID: table.ID,
                DeviceID: myScreen.ID,
                Index: (indexScreen + 1)
              });
              await deviceTableConnection.save();

            } else {
              connection.Index = indexScreen + 1;
              await connection.save();
            }



          } catch (error) {
            console.log(error);
          }

        })
      }
    })

    //Update devices
    restaurantData.Devices.forEach(async function (item, i) {
      if (item.DeviceType == 0) {
        return;
      }
      let [transformDevice, created] = await db.models.ElementTransform.findOrCreate({
        where: {
          PosInitialX: item.transform.PosInitialX,
          PosInitialY: item.transform.PosInitialY,
          InitialScale: item.transform.InitialScale,
          InitialRotation: item.transform.InitialRotation,
          InitialAlpha: item.transform.InitialAlpha,
          PosFinalX: item.transform.PosFinalX,
          PosFinalY: item.transform.PosFinalY,
          FinalScale: item.transform.FinalScale,
          FinalRotation: item.transform.FinalRotation,
          FinalAlpha: item.transform.FinalAlpha,
          AnimationSpeed: item.transform.AnimationSpeed,
          ZOrder: item.transform.ZOrder,
          flipX: item.transform.flipX,
          flipY: item.transform.flipY,
          Rotation: item.transform.Rotation,
          RotationSpeed: item.transform.RotationSpeed,
          ElementType: "plan",
          ElementID: item.transform.ElementID
        }
      });
      let myDevice;
      if (item.ID == 0) {

        // New Device
        [myDevice, created] = await db.models.Device.findOrCreate({
          where: {
            DeviceType: item.DeviceType,
            Nom: item.Nom,
            Description: item.Description,
            KeyWord: item.KeyWord,
            DeviceType: item.DeviceType,
            Login: item.Login,
            Password: item.Password,
            LocationID: item.LocationID,
            ElementTransformID: transformDevice.ID,
            DeviceUniqueIdentifier: item.DeviceUniqueIdentifier
          }
        })
        //Insert IPS
        item.IPAdresses.forEach(async function (adresse, i) {
          [ipDevice, created] = await db.models.IPAdresse.findOrCreate({
            where: {
              AdresseIP: adresse.AdresseIP,
              Type: adresse.Type,
              DeviceID: myDevice.ID,
            }
          })
        })
        if (myDevice.DeviceType == 2) { //Repondeur cuisine

          //Insert Cameras
          item.Cameras.forEach(async function (camera, i) {
            [cameraRepondeur, created] = await db.models.RepondeurCamera.findOrCreate({
              where: {
                DeviceID: myDevice.ID,
                CameraID: camera.ID
              }
            })
          })

        }


      } else {
        //Old Device
        myDevice = await db.models.Device.findOne({
          where: {
            ID: item.ID
          }
        })

        myDevice.DeviceType = item.DeviceType;
        myDevice.Nom = item.Nom;
        myDevice.Description = item.Description;
        myDevice.KeyWord = item.KeyWord,
        myDevice.Login = item.Login;
        myDevice.LocationID = item.LocationID;
        myDevice.Password = item.Password;
        myDevice.ElementTransformID = transformDevice.ID;
        myDevice.DeviceUniqueIdentifier = item.DeviceUniqueIdentifier



        if (myDevice.DeviceType == 2) { //Repondeur cuisine
          db.models.RepondeurCamera.destroy({
            where: {
              DeviceID: myDevice.ID
            }
          }).then(result => {
            //Insert Cameras
            item.Cameras.forEach(async function (camera, i) {
              [cameraRepondeur, created] = await db.models.RepondeurCamera.findOrCreate({
                where: {
                  DeviceID: myDevice.ID,
                  CameraID: camera.ID
                }
              })
            })
          });
        }

        db.models.IPAdresse.destroy({
          where: {
            DeviceID: myDevice.ID
          }
        }).then(result => {
          //Insert IPS
          item.IPAdresses.forEach(async function (adresse, i) {
            [ipDevice, created] = await db.models.IPAdresse.findOrCreate({
              where: {
                AdresseIP: adresse.AdresseIP,
                Type: adresse.Type,
                DeviceID: myDevice.ID
              }
            })
          })
        });

        await myDevice.save().catch(function (error) {
          console.log(error);
        });
      }



    })
    res.send("ok");
  });


  app.post("/updatescene", (req, res) => {
    console.log(req.body.element);
    let mascene = JSON.parse(req.body.element);
    db.models.Scene.update({
      Nom: mascene.Nom,
      Description: mascene.Description,
      Icone: mascene.Icone,
      Type: mascene.Type,
      backgroundID: mascene.backgroundID
    }, {
      where: {
        ID: mascene.ID
      }
    }).then(result1 => {
      let works = [];
      console.log("Update done");
      let work1 = db.models.ElementTransform.findAll({
          where: {
            ElementType: "scene"
          }
        })
        .then(elementsIds => {
          let arrayID = elementsIds.map(element => element.ID);
          console.log("arrayID ==> " + arrayID);
          db.models.TransformRecipient.destroy({
            where: {
              RecipientId: mascene.ID,
              ElementTransformId: arrayID
            }
          }).then(() => {
            db.models.ElementTransform.destroy({
              where: {
                ID: arrayID
              }
            }).then(cleanedScene => {
              mascene.transforms.forEach((item, i) => {
                console.log("Insert Element " + item.ElementID);
                db.models.ElementTransform.findOrCreate({
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
                    ElementType: "scene",
                    ElementID: item.ElementID
                  }
                }).spread(function (element, isCreated) {
                  db.models.TransformRecipient.findOrCreate({
                    where: {
                      ElementTransformId: element.ID,
                      RecipientId: mascene.ID
                    }
                  });
                });
              });
            });
          });
        })
        .then(() => {
          res.send("ok");
        });
    });
  });

  app.delete("/deletescene/:id", (req, res) => {
    let sceneID = req.params.id;

    db.models.ElementTransform.findAll({
      where: {
        ElementType: "scene"
      }
    }).then(elementsIds => {
      let arrayID = elementsIds.map(element => element.ID);
      console.log("arrayID ==> " + arrayID);
      db.models.TransformRecipient.destroy({
          where: {
            RecipientId: sceneID,
            ElementTransformId: arrayID
          }
        })
        .then(() => {
          db.models.ElementTransform.destroy({
            where: {
              ID: arrayID
            }
          });
        })
        .then(() => {
          db.models.Scene.destroy({
            where: {
              ID: sceneID
            }
          });
        })
        .then(() => {
          db.models.Scene.findAll({
            order: [
              ["Nom", "ASC"]
            ],
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
          }).then(result => {
            //const nodeData = result.map((node) =>node.get({ plain: true }));
            console.log(JSON.stringify(result));
            res.json(result);
          });
        });
    });
  });
};