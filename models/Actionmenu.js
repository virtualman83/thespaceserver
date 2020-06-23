module.exports = function(sequelize, Sequelize) {
  var action = sequelize.define('Actionmenu', {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Parameter1: {
      type: Sequelize.INTEGER,

    },
    Parameter2: {
      type: Sequelize.STRING
    },
    Parameter3: {
      type: Sequelize.STRING
    },
    ScreenZone: {
      type: Sequelize.STRING
    }


  }, {
    timestamps: false
  });
  return action;
}