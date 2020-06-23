module.exports = function (sequelize, Sequelize) {
	var table = sequelize.define('Table', {
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
		TableType: {
			type: Sequelize.STRING,
			default:"CONNECTE"
		}

	},{
    timestamps: false
  });
	return table;
}
