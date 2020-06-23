var dateFormat = require('dateformat');
const moment = require('moment');
const withDateNoTz = require('sequelize-date-no-tz-postgres');
module.exports = function(sequelize, Sequelize) {
  const DataTypes = withDateNoTz(Sequelize);
  var commande = sequelize.define('Commande', {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Nom: {
      type: Sequelize.STRING,
    },
    DateCommande: {
      type: DataTypes.DATE_NO_TZ,
      defaultValue: new Date()
    },
    HeureCommancementPreparation: {
      type: DataTypes.DATE_NO_TZ
    },
    HeureFinPreparation: {
      type: DataTypes.DATE_NO_TZ
    },
    Somme: {
      type: Sequelize.FLOAT,
    },
    Quantite: {
      type: Sequelize.INTEGER,
      defaultValue: 1
    },
    Etat: {//0 En attente ; 1 : En cours de préparation ; 2 En cours de livraison  ; 3 : Livrée ; 4 : Terminée
      type: Sequelize.INTEGER,
      default: 0
    },
    Payer: {
      type: Sequelize.BOOLEAN,
      default: false
    },
    DateSortie: {
      type: DataTypes.DATE_NO_TZ
    },
    NatureCommande: { // 0 : Sur place ; 1 : A emporter ; 2 : Livrée a domicile
      type: Sequelize.INTEGER,
      default : 0
    },
    Commentaire: {
      type: Sequelize.STRING
    }
  }, {
    timestamps: false
  });
  return commande;
}
