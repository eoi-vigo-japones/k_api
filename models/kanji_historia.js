"use strict";

module.exports = function(sequelize, DataTypes){

    var KanjiHistoria = sequelize.define("kanji_historia",{

        id: {

            type: DataTypes.INTEGER,

            primaryKey: true,

            autoIncrement: true

        },
    

        cuerpo: {

            type: DataTypes.TEXT,
        },
    }, 

    {
      createdAt: false,
      updatedAt: false,
      tableName: "historia",
      charset: "utf8",
    });


    KanjiHistoria.associate = function(models){

       KanjiHistoria.belongsTo(models.kanji, {

           as: "kanji",

           foreignKey: "kanji_id"

       });
                
    };

    return KanjiHistoria;
};
