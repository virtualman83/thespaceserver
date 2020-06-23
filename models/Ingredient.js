module.exports = function (sequelize, Sequelize) {
	var ingredient = sequelize.define('Ingredient', {
		ID: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		Nom: {
			type: Sequelize.STRING

		},
		Description: {
			type: Sequelize.TEXT

		},
		KeyWord: {
			type: Sequelize.STRING

		},
		Icone: {
			type: Sequelize.STRING
		},
		Calories: {
			type: Sequelize.FLOAT

		},
		Glucides: {
			type: Sequelize.FLOAT

		},
		Lipides: {
			type: Sequelize.FLOAT

		},
		Proteines: {
			type: Sequelize.FLOAT

		},
		Prix: { // En cas de supplément
			type: Sequelize.FLOAT,
			default: 0.5
		},
		Ajoutable: { // En cas de supplément
			type: Sequelize.BOOLEAN,
			default: true
		},
		Disponible: { 
			type: Sequelize.BOOLEAN,
			default: true
		}
	
	

	},{
    timestamps: false
  });
	return ingredient;
}
