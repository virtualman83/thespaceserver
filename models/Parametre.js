module.exports = function (sequelize, Sequelize) {
	var param = sequelize.define('Parametre', {
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
        Type: {//STRING, INT, FLOAT
            type: Sequelize.STRING,
            default:"STRING"

		},
        Valeur: {
			type: Sequelize.STRING

		}
	},{
    timestamps: false
  });
	return param;
}
