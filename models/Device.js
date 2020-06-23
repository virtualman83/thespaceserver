const withDateNoTz = require('sequelize-date-no-tz-postgres');
module.exports = function(sequelize, Sequelize) {
const DataTypes = withDateNoTz(Sequelize);
	var device = sequelize.define('Device', {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Nom: {
      type: Sequelize.STRING,
      defaultValue: ""
    },
    Description: {
      type: Sequelize.STRING,
      defaultValue: ""
    },
    KeyWord: {
      type: Sequelize.STRING,
      defaultValue: ""
    },
    DeviceType: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    DeviceUniqueIdentifier: {
      type: Sequelize.STRING,
      defaultValue: 0
    },
    Login: {
      type: Sequelize.STRING,
      default: ""
    },
    Password: {
      type: Sequelize.STRING,
      default: ""
    }

  }, {
    timestamps: false
  });
  return device;
}
