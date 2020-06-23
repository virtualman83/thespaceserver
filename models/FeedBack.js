module.exports = function (sequelize, Sequelize) {
	var feedback = sequelize.define('FeedBack', {
		ID: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		NbStars: {
			type: Sequelize.INTEGER,

		},
		Comment: {
			type: Sequelize.STRING,

		},
		Date: {
			type: Sequelize.DATE,

		},
		IDSession: {
			type: Sequelize.INTEGER,
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
	return feedback;
}
