"use strict";

module.exports = function(sequelize, DataTypes){

    var Leccion = sequelize.define("leccion",{

        id: {

            type: DataTypes.INTEGER,

            primaryKey: true,

            autoIncrement: true

        },
 

        nombre: {

            type: DataTypes.STRING(150),

        },

        alias: {

            type: DataTypes.STRING(150),

            unique: true

        },
    
        descripcion: {
    
            type: DataTypes.TEXT
        },

        orden: {

            type: DataTypes.INTEGER

        },

        tipo: {

            type: DataTypes.STRING

        }
    }, 
    {

      createdAt: false,
      updatedAt: false,
      tableName: "leccion",
      charset: "utf8",
    });

    Leccion.associate = function(models){

         Leccion.hasMany(models.leccion_kanjis, {

             as: "kanjis",

             foreignKey: "leccion_id"

         }) 
        
    };

    return Leccion;
};
