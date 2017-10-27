"use strict";

module.exports = function(sequelize, DataTypes){

    var LecturasKanji = sequelize.define("lecturas_kanji", {

        id: {

            type: DataTypes.INTEGER,

            primaryKey: true,

            autoIncrement: true

        },

        kanji_id: {

            type: DataTypes.INTEGER,

        },

        lectura: {

            type: DataTypes.STRING

        },

        tipo: {

            type: DataTypes.STRING
        }

    }, {


        classMethods: {

            classMethods: {

                associate: function(models){

                    LecturasKanji.belongsTo(models.kanji, {

                        as: "kanji",
                        
                        foreignKey: "kanji_id"

                    })
                }

            }

        },

        createdAt: false,

        updatedAt: false,

        tableName: "lectura_kanji"

    });

    return LecturasKanji;
};
