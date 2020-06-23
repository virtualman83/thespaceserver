module.exports = function (sequelize, Sequelize) {
	var menu = sequelize.define('Menu', {
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
		Actif: {
			type: Sequelize.BOOLEAN,
			defaultValue : true
		},
		IsRoot:{
			type: Sequelize.BOOLEAN,
			defaultValue : false
		},
		Removable:{
			type: Sequelize.BOOLEAN,
			defaultValue : true
		},
		Updatable:{
			type: Sequelize.BOOLEAN,
			defaultValue : true
		}
	},{
    timestamps: false
  });
	return menu;
}
