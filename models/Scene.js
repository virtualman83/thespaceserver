module.exports = function (sequelize, Sequelize) {
	var scene = sequelize.define('Scene', {
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
		},
		ElementType: {
			type: Sequelize.STRING,
			default:"Salé"
		},
		SceneType: {
			type: Sequelize.STRING,
			default:"Decoration"
		}


},{
  timestamps: false
});
	return scene;
}
