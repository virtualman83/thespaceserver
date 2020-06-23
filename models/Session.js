
const withDateNoTz = require('sequelize-date-no-tz-postgres');
module.exports = function (sequelize, Sequelize) {
	 const DataTypes = withDateNoTz(Sequelize);
	var session = sequelize.define('Session', {
		ID: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		StartDate: {
		 	type:DataTypes.DATE_NO_TZ,
			defaultValue: new Date()
		},
		EndDate: {
			 type:DataTypes.DATE_NO_TZ,
			defaultValue: new Date()
		},
		Open: {
			type: Sequelize.BOOLEAN
		},
		IDTable: {
			type: Sequelize.INTEGER
		}

	},{
    timestamps: false
  });
	return session;
}
