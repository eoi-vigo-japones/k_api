"use strict";

module.exports = function(sequelize, DataTypes){

    var Kanji = sequelize.define("kanji",{

        id: {

            type: DataTypes.INTEGER,

            primaryKey: true,

            autoIncrement: true

        },
    

        simbolo: {

            type: DataTypes.STRING(2),

            unique: true,

        },
    }, {

      createdAt: false,
      updatedAt: false,
      tableName: "kanji",
      charset: "utf8",
    });

    Kanji.associate = function(models){

         Kanji.hasOne(models.kanji_info, {

             as: "info",

             foreignKey: "kanji_id"

         });

         Kanji.hasOne(models.kanji_historia, {

             as: "historia",

             foreignKey: "kanji_id"

         });

         Kanji.hasMany(models.lecturas_kanji, {

             as: "lecturas",

             foreignKey: "kanji_id"

         })
               
    };


    return Kanji;
};
