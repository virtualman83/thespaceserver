
module.exports = function(sequelize, Sequelize) {
  var commandeExtra = sequelize.define('CommandeExtra', {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    AddRemove: {
      type: Sequelize.BOOLEAN,

    }
  }, {
    timestamps: false
  });
  return commandeExtra;
}
