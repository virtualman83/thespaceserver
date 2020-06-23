module.exports = function (sequelize, Sequelize) {
	var prefab = sequelize.define('Prefab', {
		ID: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		Nom: {
			type: Sequelize.STRING

		}
	},{
    timestamps: false
  });
	return prefab;
}
