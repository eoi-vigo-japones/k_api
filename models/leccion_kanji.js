"use strict";

module.exports = function(sequelize, DataTypes){

    var LeccionKanjis = sequelize.define("leccion_kanjis",{

        leccion_id: {

            type: DataTypes.INTEGER,

            primaryKey: true,

        },
    
        kanji_id: {

            type: DataTypes.INTEGER,

        },
    
    }, 

    {

      createdAt: false,
      updatedAt: false,
      tableName: "leccion_kanjis",
      charset: "utf8",
    }

  );
        
  LeccionKanjis.associate = function(models){

       LeccionKanjis.belongsTo(models.leccion, {

           as: "leccion",

           foreignKey: "leccion_id"

       }) 
               
    };

    return LeccionKanjis;
};
