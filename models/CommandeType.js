module.exports = function (sequelize, Sequelize) {
	var commandetype = sequelize.define('CommandeType', {
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
		Icone: {
			type: Sequelize.STRING
		}

	},{
    timestamps: false
  });
	return commandetype;
}
