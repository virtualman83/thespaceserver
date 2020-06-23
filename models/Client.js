module.exports = function (sequelize, Sequelize) {
	var client = sequelize.define('Client', {
		ID: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		UUID: {
			type: Sequelize.STRING,
		},
		Nom: {
			type: Sequelize.STRING,
		},
		Prenom: {
			type: Sequelize.STRING,
		},
		UserName: {
			type: Sequelize.STRING,
		},
		Password: {
			type: Sequelize.STRING,
		},
		Numero: {
			type: Sequelize.INTEGER,
		},
		CP: {
			type: Sequelize.STRING,
		},
		Ville: {
			type: Sequelize.STRING,
		},
		Mail: {
			type: Sequelize.STRING,
		},
		Facebook: {
			type: Sequelize.STRING,
		},
		Twitter: {
			type: Sequelize.STRING,
		},
		ImageProfil: {
			type: Sequelize.STRING,
		}

	},{
    timestamps: false
  });
	return client;
}
