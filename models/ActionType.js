module.exports = function (sequelize, Sequelize) {
	var actions = sequelize.define('ActionType', {
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

		}
	},{
    timestamps: false
  });
	return actions;
}
