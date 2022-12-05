'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transaction.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    }, 
    HotelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    }, 
    paidStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    }, 
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};