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

        classMethods: {

            associate: function(models){

                KanjiHistoria.belongsTo(models.kanji, {

                    as: "kanji",

                    foreignKey: "kanji_id"

                });
                
            }

        },
    
        createdAt: false,

        updatedAt: false,

        tableName: "historia"
    });

    return KanjiHistoria;
};
