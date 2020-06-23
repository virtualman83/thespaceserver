module.exports = function (sequelize, Sequelize) {
	var device = sequelize.define('SessionDevice', {
		ID: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		}
	},{
    timestamps: false
  });
	return device;
}
