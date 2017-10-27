"use strict";

module.exports = function(sequelize, DataTypes){

    var KanjiInfo = sequelize.define("kanji_info",{

        id: {

            type: DataTypes.INTEGER,

            primaryKey: true,

            autoIncrement: true

        },
    
        clave: {

            type: DataTypes.STRING,
            

        },

        solo_componente: {

            type: DataTypes.INTEGER

        },

        componentes: {

            type: DataTypes.TEXT

        },

        como_componente: {

            type: DataTypes.TEXT
        }

    }, {

      createdAt: false,
      updatedAt: false,
      tableName: "info_kanji",
      charset: "utf8",
    });

    KanjiInfo.associate = function(models){

      KanjiInfo.belongsTo(models.kanji, {
    
          as: "kanji",
    
          foreignKey: "kanji_id"
    
      });


    };

    return KanjiInfo;
};
