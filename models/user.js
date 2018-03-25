
'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  
  return User;
};