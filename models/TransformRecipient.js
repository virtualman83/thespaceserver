module.exports = function (sequelize, Sequelize) {
	var TransformRecipient = sequelize.define('TransformRecipient', {
		ID: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		}
	},{
    timestamps: false
  });
	return TransformRecipient;
}
