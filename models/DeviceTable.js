module.exports = function (sequelize, Sequelize) {
	var device = sequelize.define('DeviceTable', {
		ID: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		Index: {
			type: Sequelize.INTEGER
		}
	},{
    timestamps: false
  });
	return device;
}
