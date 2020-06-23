module.exports = function (sequelize, Sequelize) {
	var service = sequelize.define('Service', {
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
		Par: {
			type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: '0'
		},
		Coef: {
			type: Sequelize.FLOAT,
            allowNull: false,
            defaultValue: '0'
		},
		Valeur: {
			type: Sequelize.FLOAT,
            allowNull: false,
            defaultValue: '0'
		}

	},{
    timestamps: false
  });
	return service;
}
