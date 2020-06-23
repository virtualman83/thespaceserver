module.exports = function (sequelize, Sequelize) {
	var composition = sequelize.define('Composition', {
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
		Icone: {
			type: Sequelize.STRING
		},
		KeyWord: {
			type: Sequelize.STRING

		},
		Type: {//Chaud ou Froid
			type: Sequelize.STRING,
			defaultValue : "Chaud"
		},
		Disponible: {
			type: Sequelize.BOOLEAN,
		defaultValue : true
		},
		Prix : {
			type: Sequelize.FLOAT,
				defaultValue : 10
		}
		,
		SceneBlurLevel : {
			type: Sequelize.INTEGER,
				defaultValue : 0
		}

	},{
    timestamps: false
  });
	return composition;
}
