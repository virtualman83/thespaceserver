module.exports = function (sequelize, Sequelize) {
	var constante = sequelize.define('UnCompatibleClasses', {
		ID: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		}

	},{
    timestamps: false
  });
	return constante;
}
