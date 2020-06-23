module.exports = function(sequelize, Sequelize) {
  var Classe = require("./ClasseAlimentaire")(sequelize, Sequelize);
  var Prestation = require("./Prestation")(sequelize, Sequelize);
  var Client = require("./Client")(sequelize, Sequelize);
  var Commande = require("./Commande")(sequelize, Sequelize);
  var CommandeType = require("./CommandeType")(sequelize, Sequelize);
  var Composition = require("./Composition")(sequelize, Sequelize);
  var CompositionClient = require("./CompositionClient")(sequelize, Sequelize);
  var Constante = require("./Constante")(sequelize, Sequelize);
  var Famille = require("./Famille")(sequelize, Sequelize);
  var FeedBack = require("./FeedBack")(sequelize, Sequelize);
  var IngredientComposition = require("./IngredientComposition")(
    sequelize,
    Sequelize
  );
  var Ingredient = require("./Ingredient")(sequelize, Sequelize);
  var Menu = require("./Menu")(sequelize, Sequelize);
  var MoyenPayement = require("./MoyenPayement")(sequelize, Sequelize);
  var Device = require("./Device")(sequelize, Sequelize);
  var Service = require("./Service")(sequelize, Sequelize);
  var Session = require("./Session")(sequelize, Sequelize);
  var Table = require("./Table")(sequelize, Sequelize);
  var IngredientFamille = require("./IngredientFamille")(sequelize, Sequelize);
  var Background = require("./Background")(sequelize, Sequelize);
  var Element = require("./Element")(sequelize, Sequelize);
  var ElementTransform = require("./ElementTransform")(sequelize, Sequelize);
  var Scene = require("./Scene")(sequelize, Sequelize);
  var Light = require("./Light")(sequelize, Sequelize);
  var CompositionClasse = require("./CompositionClasse")(sequelize, Sequelize);
  var UnCompatibleClasses = require("./UnCompatibleClasses")(
    sequelize,
    Sequelize
  );
  var ActionType = require("./ActionType")(sequelize, Sequelize);
  var Actionmenu = require("./Actionmenu")(sequelize, Sequelize);
  var SpriteImage = require("./SpriteImage")(sequelize, Sequelize);
  var DeviceTable = require("./DeviceTable")(sequelize, Sequelize);
  var TransformRecipient = require("./TransformRecipient")(sequelize, Sequelize);
  var Prefab = require("./Prefab")(sequelize, Sequelize);
  var SessionDevice = require("./SessionDevice")(sequelize, Sequelize);
  var CommandeExtra = require("./CommandeExtra")(sequelize, Sequelize);
  var IPAdresse = require("./IPAdresse")(sequelize, Sequelize);
  var Location = require("./Location")(sequelize, Sequelize);
  var CompositionFamille = require("./CompositionFamille")(
    sequelize,
    Sequelize
  );
  var CompositionDevice = require("./CompositionDevice")(sequelize, Sequelize);
  var RepondeurCamera = require("./RepondeurCamera")(sequelize, Sequelize);
  var param = require("./Parametre")(sequelize, Sequelize);

  

  
  //Action
  ActionType.hasOne(Actionmenu, {
    onDelete: "CASCADE",
    foreignKey: "ActionTypeID"
  });
  Actionmenu.belongsTo(ActionType);

  //Device
  Device.belongsTo(ElementTransform, {
    onDelete: "CASCADE",
    as: "transform",
    foreignKey: "ElementTransformID"
  });
  //Device
  Table.belongsTo(ElementTransform, {
    onDelete: "CASCADE",
    as: "transform",
    foreignKey: "ElementTransformID"
  });
/*
  Table.hasOne(ElementTransform, {
    as: "table"
  });
  Device.hasOne(ElementTransform, {
    as: "device"
  });*/


  //Composition
  Scene.hasOne(Composition, {
    as: "scene"
  });
  Composition.belongsTo(Scene, {
    as: "scene"
  });

  Light.belongsTo(Composition, {
    onDelete: "CASCADE",
    as: "lights",
    foreignKey: "CompositionID"
  });
  Composition.hasMany(Light, {
    onDelete: "CASCADE",
    as: "lights"
  });

  Background.hasOne(Scene, {
    as: "background"
  });
  Scene.belongsTo(Background, {
    as: "background"
  });



  Classe.belongsToMany(Classe, {
    through: "UnCompatibleClasses",
    onDelete: "CASCADE",
    as: "UnCompatibleClasse",
    timestamps: false
  });




  ElementTransform.belongsTo(Element, {
    onDelete: "CASCADE",
    as: "element",
    foreignKey: "ElementID"
  });





  Composition.belongsToMany(ElementTransform, {
    through: {
      model: "TransformRecipient",
      unique: false
    },
    foreignKey: {
      name: "RecipientId",
      unique: false
    },
    constraints: false,
    as: "transforms",
    unique: false,
    timestamps: false,
    scope: {
      ElementType: "composition"
    }
  });

  ElementTransform.belongsToMany(Composition, {
    through: {
      model: "TransformRecipient",
      unique: false
    },
    foreignKey: {
      name: "ElementTransformId",
      unique: false
    },
    timestamps: false,
    unique: false,
    constraints: false
  });

  Scene.belongsToMany(ElementTransform, {
    through: {
      model: "TransformRecipient",
      unique: false
    },
    foreignKey: {
      name: "RecipientId",
      unique: false
    },
    constraints: false,
    as: "transforms",
    unique: false,
    timestamps: false,
    scope: {
      ElementType: "scene"
    }
  });

  ElementTransform.belongsToMany(Scene, {
    through: {
      model: "TransformRecipient",
      unique: false
    },
    foreignKey: {
      name: "ElementTransformId",
      unique: false
    },

    unique: false,
    timestamps: false,
    constraints: false
  });


  Composition.belongsToMany(Ingredient, {
    through: "IngredientComposition",
    onDelete: "CASCADE",
    as: "ingredients"
  });
  Ingredient.belongsToMany(Composition, {
    through: "IngredientComposition",
    onDelete: "CASCADE",
    as: "compositions"
  });

  Composition.belongsToMany(Classe, {
    through: "CompositionClasse",
    onDelete: "CASCADE",
    as: "classes"
  });
  Classe.belongsToMany(Composition, {
    through: "CompositionClasse",
    onDelete: "CASCADE",
    as: "classes"
  });

  Composition.belongsToMany(Famille, {
    through: "CompositionFamille",
    onDelete: "CASCADE",
    as: "familles"
  });
  Famille.belongsToMany(Composition, {
    through: "CompositionFamille",
    onDelete: "CASCADE",
    as: "familles"
  });


  Composition.belongsToMany(Device, {
    through: "CompositionDevice",
    onDelete: "CASCADE",
    as: "CamerasCuisine"
  });
  Device.belongsToMany(Composition, {
    through: "CompositionDevice",
    onDelete: "CASCADE",
    as: "CamerasCuisine"
  });

  

  Device.belongsToMany(Device, {
    through: "RepondeurCamera",
    onDelete: "CASCADE",
    as: "Cameras"
  });



  Classe.hasOne(Client, {
    foreignKey: {
      name: "ClasseID",
      defaultValue: 5
    }
  });
  Client.belongsTo(Classe, {
    foreignKey: {
      name: "ClasseID",
      defaultValue: 5
    }
  });


  Composition.belongsToMany(Client, {
    through: "CompositionClient"
  });

  Client.belongsToMany(Composition, {
    through: "CompositionClient"
  });



    Commande.belongsToMany(Ingredient, {
      through: "CommandeExtra"
    });

    Ingredient.belongsToMany(Commande, {
      through: "CommandeExtra"
    });

  //Commande
  //Composition
  Commande.belongsTo(Composition);
  Commande.belongsTo(Session);
  Commande.belongsTo(Service);
  Commande.belongsTo(MoyenPayement);

  Commande.belongsTo(Device, {
    foreignKey: {
      name: "ResponderID"
    },
    as: "Responder",
    scope: {
      DeviceType: 1
    }
  });

  Commande.belongsTo(Device, {
    foreignKey: {
      name: "CommanderID"
    },
    as: "Commander",
    scope: {
      DeviceType: 0
    }
  });
 
  Commande.belongsTo(CommandeType);

  CommandeType.belongsTo(Menu);
  Menu.hasOne(CommandeType);

  //Ingredient ImageIngredient ModeleIngredient
  Ingredient.belongsToMany(Famille, {
    through: "IngredientFamille",
    onDelete: "CASCADE",
    as: "familles"
  });
  Famille.belongsToMany(Ingredient, {
    through: "IngredientFamille",
    onDelete: "CASCADE",
    as: "ingredients"
  });


  //feedBack
  FeedBack.belongsTo(Commande);

  //Menu
  Menu.hasOne(Menu, {
    foreignKey: "MenuParentID"
  });
  Menu.hasMany(Actionmenu, {
    foreignKey: "MenuID"
  });

  Table.belongsToMany(Device, {
    through: "DeviceTable",
    as: "Ecrans"
  });

  Device.belongsToMany(Table, {
    through: "DeviceTable",
    as: "Table"
  });



  Device.hasMany(IPAdresse, {
    foreignKey: "DeviceID"
  });

  Location.hasOne(Device);
  Device.belongsTo(Location);
  
  //Session
  Session.belongsTo(Table, {
    foreignKey: "IDTable"
  });

  Session.belongsToMany(Device, {
    through: "SessionDevice"
  });

};
