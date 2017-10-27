'use strict';
module.exports = function(sequelize, DataTypes) {

  const Kanji = sequelize.define('Kanji', {

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

  return Kanji;
};
