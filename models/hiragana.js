'use strict';
module.exports = function(sequelize, DataTypes) {

  const Hiragana = sequelize.define('Hiragana', {
    kana: {
      type: DataTypes.STRING,
      unique: true
    },
    clave: {
      type: DataTypes.STRING,
      unique: true
    },

    componentes: {
      type: DataTypes.STRING
    },
    historia: {
      type: DataTypes.STRING
    }
  },{
    underscored: true,
    charset: 'utf8',
  });

  return Hiragana;
};
