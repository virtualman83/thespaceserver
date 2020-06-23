module.exports = function (sequelize, Sequelize) {
	var composition = sequelize.define('CompositionClient', {
		ID: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		}
	},{
    timestamps: false
  });
	return composition;
}
