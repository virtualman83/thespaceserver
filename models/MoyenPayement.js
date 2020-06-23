module.exports = function (sequelize, Sequelize) {
	var moyenpayement = sequelize.define('MoyenPayement', {
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
		}

	},{
    timestamps: false
  });
	return moyenpayement;
}
