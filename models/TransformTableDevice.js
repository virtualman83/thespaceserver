module.exports = function (sequelize, Sequelize) {
	var TransformTableDevice = sequelize.define('TransformTableDevice', {
		ID: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		}
	},{
    timestamps: false
  });
	return TransformTableDevice;
}
