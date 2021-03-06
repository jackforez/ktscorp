'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    userName: DataTypes.STRING,
    passWord: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING(10),
    fullName: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    roleID: DataTypes.STRING,
    costid: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};