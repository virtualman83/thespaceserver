const db = require("./database");
var path = require("path");
const fs = require("fs");
const util = require("util");
const readdir = util.promisify(fs.readdir);

module.exports = async function() {
  /*InsertConstante();
  InsertService();
  InsertSpriteImage();
  InsertActionType();
  InsertMenu();
  //InsertFamille();
  InsertLocation();
  InsertClasseAlimentaire();
  InsertPresation();
  InsertBackGround();
  InsertAccessoires();
*/
};

async function getFiles(url, callback) {
  //joining path of directory
  const directoryPath = path.join(__dirname, url);
  //	console.log("for "+url);
  //passsing directoryPath and callback function
  await fs.readdir(directoryPath, function(err, files) {
    //handling error
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }

    callback(files);
  });
}

function InsertIngredient(id) {
  let ingredientFiles = getFiles("../public/images/ingredients", function(
    ingFiles
  ) {
    console.log("ingFiles " + ingFiles.length);
    let ingworks = [];

    //listing all files using forEach
    ingFiles.forEach(function(file) {
      // Do whatever you want to do with the file

      let fileName = file.replace(".png", "");
      let icon = "images/ingredients/" + fileName + ".png";

      let work = db.models.Ingredient.findOrCreate({
        where: {
          Nom: fileName,
          Description: fileName + " description",
          KeyWord: fileName,
          Icone: icon,
          Calories: 10,
          Glucides: 20,
          Lipides: 30,
          Proteines: 40,
          Prix: 2,
          Ajoutable: true,


        }
      }).spread(function(ingredientResult, created) {
        db.models.IngredientFamille.findOrCreate({
          where: {
            IngredientID: ingredientResult.ID,
            FamilleID: id
          }
        });
      });
      ingworks.push(work);
    });
    Promise.all(ingworks);
  });
}

function InsertConstante() {
  //Create Constante
  db.models.Constante.findOrCreate({
    where: {
      Nom: "Tax",
      Description: "Tax",
      Icone: "images/constantes/Tax.png",
      Type: 1,
      KeyWord: "Tax",
      Valeur: "20"
    }
  });
}

function InsertService() {
  //Create Service
  db.models.Service.findOrCreate({
    where: {
      Nom: "Service",
      Description: "Service de table",
      KeyWord: "ServiceTable",
      Icone: "images/services/ServiceTable.png",
      Par: 0,
      Coef: 0,
      Valeur: 1
    }
  });
}

 function InsertLocation() {
  db.models.Location.findOrCreate({
    where: {
      ID:1,
      Nom: "Salle Restaurant",
      Description: "Espace Salle Restaurant",
      KeyWord: "SalleRestaurant",
    }
  });
  db.models.Location.findOrCreate({
    where: {
      ID:2,
      Nom: "Cuisine",
      Description: "Espace Cuisine",
      KeyWord: "Cuisine",

    }
  });
  db.models.Location.findOrCreate({
    where: {
      ID:3,
      Nom: "Bureau direction",
      Description: "Espace bureau direction",
      KeyWord: "BureauDirection",
    }
  });
  db.models.Location.findOrCreate({
    where: {
      ID:4,
      Nom: "Salle VR",
      Description: "Espace salle VR",
      KeyWord: "VRSpace",
    }
  });
  db.models.Location.findOrCreate({
    where: {
      ID:5,
      Nom: "Salle AR",
      Description: "Espace salle AR",
      KeyWord: "ARSpace",
    }
  });
  db.models.Location.findOrCreate({
    where: {
      ID:6,
      Nom: "Jeux enfants -3 ans",
      Description: "Espace jeux enfants -3 ans",
      KeyWord: "jeuxenfantsMoins3ans",
    }
  });
  db.models.Location.findOrCreate({
    where: {
      ID:7,
      Nom: "Jeux enfants +3 ans",
      Description: "Espace jeux enfants +3 ans",
      KeyWord: "jeuxenfantsPlus3ans",
    }
  });
}


function InsertSpriteImage() {
  //Create Service
  db.models.SpriteImage.findOrCreate({
    where: {
      Nom: "Total",
      Description: "Total",
      KeyWord: "Total",
      Icone: "images/Sprites/total.png"
    }
  });
  //Create Service
  db.models.SpriteImage.findOrCreate({
    where: {
      Nom: "Retour",
      Description: "Retour",
      KeyWord: "Retour",
      Icone: "images/Sprites/Retour.png"
    }
  });
}

function InsertMenu() {
  //Create Racine Menu
  db.models.Menu.findOrCreate({
    where: {
      Nom: "SOI-MEME",
      Description: "Navigation vers les enfants de soi-meme",
      Icone: "images/menus/root.png",
      Removable: false,
      Updatable: false,
      IsRoot: false,
      Actif: false
    }
  });

  //Create Racine Menu
  db.models.Menu.findOrCreate({
    where: {
      Nom: "MENUS",
      Description: "La racine des menus",
      Icone: "images/menus/root.png",
      Removable: false,
      Updatable: false,
      IsRoot: true,
      Actif: true
    }
  });
}

function InsertActionType() {
  db.models.ActionType.bulkCreate(
    [
      {
        ID: 1,
        Nom: "VIDE_ZONE",
        Description: "Vider une zone"
      },
      {
        ID: 2,
        Nom: "CHARGER_ENFANTS",
        Description: "Charger les enfants d'un menu parent"
      },
      {
        ID: 3,
        Nom: "CHARGER_COMPOSITION",
        Description: "Charger une composition"
      },
      {
        ID: 4,
        Nom: "CHARGER_MENU_SPECIFIQUE",
        Description: "Charger une menu spécifique"
      },
      {
        ID: 5,
        Nom: "OUVRIR_PAGE_WEB",
        Description: "Ouvrir une page Web"
      },
      {
        ID: 6,
        Nom: "CHARGER_PREFAB",
        Description: "CHARGER UNE PREFAB"
      }
    ],
    {ignoreDuplicates: true}
  ).then(() => {
    //HOME PAGE
    db.models.Menu.findOrCreate({
      where: {
        Nom: "Retour",
        Description: "Accueil",
        Icone: "images/menus/Home.png",
        IsRoot: false,
        Removable: false,
        Updatable: true,
        Actif: true
      }
    }).spread(function(menu, isCreated) {
      db.models.Actionmenu.findOrCreate({
        where: {
          ActionTypeID: 2, //CHARGER_MENU
          ScreenZone: "GAUCHE_MILIEU",
          Parameter1: 2,
          Parameter2: "GO_HOME",
          Parameter3: "GO_HOME",
          MenuID: menu.ID,
  
        }
      });
      db.models.Actionmenu.findOrCreate({
        where: {
          ActionTypeID: 1, //Vide Zone
          ScreenZone: "GAUCHE_BAS",
          Parameter1: 0,
          Parameter2: "GO_HOME",
          Parameter3: "GO_HOME",
          MenuID: menu.ID,
  
        }
      });
      db.models.Actionmenu.findOrCreate({
        where: {
          ActionTypeID: 1, //Vide menu
          ScreenZone: "CENTRE_MILIEU",
          Parameter1: 0,
          Parameter2: "GO_HOME",
          Parameter3: "GO_HOME",
          MenuID: menu.ID,
        }
      });
      db.models.Actionmenu.findOrCreate({
        where: {
          ActionTypeID: 1, //Vide menu
          ScreenZone: "CENTRE_HAUT",
          Parameter1: 0,
          Parameter2: "GO_HOME",
          Parameter3: "GO_HOME",
          MenuID: menu.ID,
  
        }
      });
      db.models.Actionmenu.findOrCreate({
        where: {
          ActionTypeID: 1, //Vide menu
          ScreenZone: "CENTRE_BAS",
          Parameter1: 0,
          Parameter2: "GO_HOME",
          Parameter3: "GO_HOME",
          MenuID: menu.ID,
  
        }
      });
      db.models.Actionmenu.findOrCreate({
        where: {
          ActionTypeID: 1, //Vide menu
          ScreenZone: "DROITE_MILIEU",
          Parameter1: 0,
          Parameter2:  "GO_HOME",
          Parameter3: "GO_HOME",
          MenuID: menu.ID,
  
        }
      });
      db.models.Actionmenu.findOrCreate({
        where: {
          ActionTypeID: 1, //Vide menu
          ScreenZone: "DROITE_BAS",
          Parameter1: 0,
          Parameter2:  "GO_HOME",
          Parameter3: "GO_HOME",
          MenuID: menu.ID,
  
        }
      });
    });
  });
}

function InsertFamille() {
  getFiles("../public/images/familles", function(familleFiles) {
    console.log("familleFiles " + familleFiles.length);
    let familleworks = [];
    //listing all files using forEach
    familleFiles.forEach(function(file) {
      // Do whatever you want to do with the file
      let fileName = file.replace(".png", "");
      let icon = "images/familles/" + fileName + ".png";

      let work = db.models.Famille.findOrCreate({
        where: {
          Nom: fileName,
          Description: fileName + " description",
          KeyWord: fileName,
          Icone: icon
        }
      }).spread(function(createdMenu, isCreated) {
        if (createdMenu.Nom == "Légumes") {
          InsertIngredient(createdMenu.ID);
        }
      });
    });
  });
}

function InsertClasseAlimentaire() {
  db.models.ClasseAlimentaire.bulkCreate(
    [
      {
        ID: 1,
        Nom: "Tous",
        Description: "Tous description",
        KeyWord: "Tous",
        Icone: "images/classes/Tous.png"
      },
      {
        ID: 2,
        Nom: "Healthy",
        Description: "Healthy description",
        KeyWord: "Healthy",
        Icone: "images/classes/Healthy.png"
      },
      {
        ID: 3,
        Nom: "Bio",
        Description: "Bio description",
        KeyWord: "Bio",
        Icone: "images/classes/Bio.png"
      },
      {
        ID: 4,
        Nom: "Pescétarien",
        Description: "Pescétarien description",
        KeyWord: "Pescétarien",
        Icone: "images/classes/Pescétarien.png"
      },
      {
        ID: 5,
        Nom: "Végétalien",
        Description: "Végétalien description",
        KeyWord: "Végétalien",
        Icone: "images/classes/Végétalien.png"
      },
      {
        ID: 6,
        Nom: "Végétarien",
        Description: "Végétarien description",
        KeyWord: "Végétarien",
        Icone: "images/classes/Végétarien.png"
      }
    ],
    {ignoreDuplicates: true}
  ).then(() => {
    let classFiles = getFiles("../public/images/classes", function(classFiles) {
      let classeworks = [];
      console.log("classFiles " + classFiles.length);
      //listing all files using forEach
      classFiles.forEach(function(file) {
        // Do whatever you want to do with the file
        let fileName = file.replace(".png", "");
        let icon = "images/classes/" + fileName + ".png";

        let work = db.models.ClasseAlimentaire.findOrCreate({
          where: {
            Nom: fileName,
            Description: fileName + " description",
            KeyWord: fileName,
            Icone: icon
          }
        });
      });
    });
  });
}

function InsertPresation() {
  getFiles("../public/images/prestations", function(prestationFiles) {
    console.log("prestations " + prestationFiles.length);
    //listing all files using forEach
    prestationFiles.forEach(function(file) {
      // Do whatever you want to do with the file
      let fileName = file.replace(".png", "");
      let icon = "images/prestations/" + fileName + ".png";

      let work = db.models.Prestation.findOrCreate({
        where: {
          Nom: fileName,
          Description: fileName + " description",
          KeyWord: fileName,
          Icone: icon
        }
      });
    });
  });
}

function InsertBackGround() {
  db.models.Background.findOrCreate({
    where: {
      Nom: "None",
      Description: " Sans fond",
        KeyWord: "None",
      Icone: "images/None.png",

      Url_Blur0: "images/None_HD.png",
      Url_Blur1: "images/None_HD.png",
      Url_Blur2: "images/None_HD.png",
      Type: "Image"
    }
  }).spread(function(menu, isCreated) {
    //Empty Scene
    db.models.Scene.findOrCreate({
      where: {
        Nom: "Vide",
        Description: "Scene vide",
        ElementType: "",
        SceneType:"Decoration",
        backgroundID: 1
      }
    });
  });

  getFiles("../public/images/background", function(bgFiles) {
    console.log("bgFiles " + bgFiles.length);
    let bgworks = [];
    //listing all files using forEach
    bgFiles.forEach(function(file) {
      // Do whatever you want to do with the file
      if (file.indexOf("_HD.png") != -1) {
        let fileName = file.replace("_HD.png", "");
        let icon = "images/background/" + fileName + "_ICONE.png";
        let hd = "images/background/" + fileName + "_HD.png";
        let blur1 = "images/background/" + fileName + "_HD_BLUR1.png";
        let blur2 = "images/background/" + fileName + "_HD_BLUR2.png";
        if (fileName == "Plan") {
          blur1 = null;
          blur2 = null;
        }

        db.models.Background.findOrCreate({
          where: {
            Nom: fileName,
            Description: fileName + " description",
            KeyWord: fileName,
            Icone: icon,
            Url_Blur0: hd,
            Url_Blur1: blur1,
            Url_Blur2: blur2,
            Type: "Image"
          }
        }).spread(function(bg, isCreated) {
          if (fileName == "Plan") {
            db.models.Scene.findOrCreate({
              where: {
                Nom: "Plan",
                Description: "Scene plan",
                KeyWord: "Plan",
                ElementType: "plan",
                SceneType:"Plan",
                backgroundID: bg.ID
              }
            });
          }
        });
      }
    });
  });
}
function InsertAccessoires() {
  getFiles("../public/images/accessoires", function(accessoireFiles) {
    console.log("accessoireFiles " + accessoireFiles.length);
    worksAccessoire = [];
    //listing all files using forEach
    accessoireFiles.forEach(function(file) {
      // Do whatever you want to do with the file
      if (file.indexOf("_HD.png") != -1) {
        let fileName = file.replace("_HD.png", "");
        let hd = "images/accessoires/" + fileName + "_HD.png";
        let icon = "images/accessoires/" + fileName + "_ICONE.png";

        let type = "";

        if (fileName.includes("desserts")) {
          type = "Dessert";
        } else if (fileName.includes("dishes")) {
          type = "Vaisselle";
        } else if (fileName.includes("ingredients")) {
          type = "Ingrédients";
        } else if (fileName.includes("kitchenware")) {
          type = "Ustensiles";
        } else if (fileName.includes("plan")) {
          type = "Plan";
        }
        let work;
      if (type != "Plan") {
         work = db.models.Element.findOrCreate({
            where: {
              Nom: fileName,
              Description: fileName + "description",
              Icone: icon,
              KeyWord: "scene",
              Url_Blur0: "images/accessoires/" + fileName + "_HD.png",
              Url_Blur1: "images/accessoires/" + fileName + "_HD_BLUR1.png",
              Url_Blur2: "images/accessoires/" + fileName + "_HD_BLUR2.png",
              ElementType: "scene"
            }
          });
        } else {
          let cleanedName = fileName.replace("plan-", "").replace("device-", "");
          let deviceType;
          if (fileName.includes("device")){
            devideType = "DEVICE";
          }else if(fileName.includes("Table")){
              devideType = "TABLE";
          }

          work = db.models.Element.findOrCreate({
            where: {
              Nom: cleanedName,
              Description: devideType ,
              Icone: icon,
              Url_Blur0: "images/accessoires/" + fileName + "_HD.png",
              Url_Blur1: "images/accessoires/" + fileName + "_HD.png",
              Url_Blur2: "images/accessoires/" + fileName + "_HD.png",
              KeyWord: "plan",
              ElementType: cleanedName.toUpperCase().replace(" ", "_")
            }
          });
       }
        worksAccessoire.push(work);
      }
    });
    Promise.all(worksAccessoire);
  });
}
