module.exports = function(sequelize, Sequelize) {
  var bg = sequelize.define('Background', {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Nom: {
      type: Sequelize.STRING

    },
    Description: {
      type: Sequelize.STRING

    },
    KeyWord: {
      type: Sequelize.STRING

    },
    Icone: {
      type: Sequelize.STRING
    },
    Url_Blur0: {
      type: Sequelize.STRING
    },
    Url_Blur1: {
      type: Sequelize.STRING
    },
    Url_Blur2: {
      type: Sequelize.STRING
    },
    Type: { // Image or Video or Animation
      type: Sequelize.STRING,
      defaultValue: 'Image'
    }
  },{
    timestamps: false
  });
  return bg;
}
