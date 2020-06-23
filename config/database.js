const Sequelize = require('sequelize');
/*const timezone = 'Europe/Vilnius'
require('moment').tz.setDefault(timezone)*/

module.exports = new Sequelize('thespacedb', 'postgres', '*hanen16', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,

  define: {
  //     underscored: true,
      freezeTableName: true, //use singular table name
       timestamps: false,  // I do not want timestamp fields by default
     },

     dialectOptions: {
         useUTC: true, //for reading from database
         dateStrings: true
     },
  timezone: '+04:00'

    ,

  pool: {
    max: 15,
    min: 0,
    idle: 10000,
    acquire: 10000
  }
},
);
