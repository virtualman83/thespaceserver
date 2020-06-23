module.exports = function (sequelize, Sequelize) {
	var classe = sequelize.define('IngredientComposition', {
		ID: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		Indisponsable:{
			type: Sequelize.BOOLEAN,
			defaultValue : false
		},
		Quantite: {
			type: Sequelize.FLOAT
		},
		CompositionType: {
			type: Sequelize.STRING
		}
	},{
    timestamps: false
  });
	return classe;
}
