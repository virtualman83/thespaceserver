module.exports = function (sequelize, Sequelize) {
	var constante = sequelize.define('Constante', {
		ID: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		Nom: {
			type: Sequelize.STRING,

		},
		Description: {
			type: Sequelize.STRING,

		},
		KeyWord: {
			type: Sequelize.STRING

		},
		Icone: {
			type: Sequelize.STRING
		},
		Type: {
			type: Sequelize.INTEGER,

		},
		Valeur: {
			type: Sequelize.STRING,

		}

	},{
    timestamps: false
  });
	return constante;
}
