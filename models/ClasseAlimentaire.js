module.exports = function (sequelize, Sequelize) {
	var classe = sequelize.define('ClasseAlimentaire', {
		ID: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		Nom: {
			type: Sequelize.STRING
		},
		Description: {
			type: Sequelize.STRING
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
	return classe;
}
