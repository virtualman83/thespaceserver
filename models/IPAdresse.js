const withDateNoTz = require('sequelize-date-no-tz-postgres');
module.exports = function(sequelize, Sequelize) {
const DataTypes = withDateNoTz(Sequelize);
	var device = sequelize.define('IPAdresse', {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    AdresseIP: {
      type: Sequelize.STRING,
      defaultValue: ""
    },
    Type: {// 0 : Ethernet / 1 : Wifi
      type: Sequelize.INTEGER,
      default: 0
    }
  

  }, {
    timestamps: false
  });
  return device;
}
