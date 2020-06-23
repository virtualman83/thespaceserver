module.exports = function(sequelize, Sequelize) {
  var element = sequelize.define('Element', {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Nom: {
      type: Sequelize.STRING

    },
    Description: {
      type: Sequelize.TEXT

    },
		KeyWord: {
			type: Sequelize.STRING

		},
    Icone: {
      type: Sequelize.STRING
    },
    Url_Blur0: {
      type: Sequelize.STRING
    },
    Url_Blur1: {
      type: Sequelize.STRING
    },
    Url_Blur2: {
      type: Sequelize.STRING
    },
    
		ElementType: {
			type: Sequelize.STRING
    }

  },{
    timestamps: false
  });
  return element;
}
