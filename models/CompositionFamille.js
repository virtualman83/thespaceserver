module.exports = function (sequelize, Sequelize) {
	var classe = sequelize.define('CompositionFamille', {
		ID: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		}
	},{
    timestamps: false
  });
	return classe;
}
