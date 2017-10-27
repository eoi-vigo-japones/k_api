const {repl} = require("catro-eixos-js");

const init = require("./lib/init.js");

const path = require("path");

const {CatroEixosSwaggerMiddlewareSinConexion} = require("catro-eixos-swagger");

const config = require("config");

repl(

  () => {
    return init()

      .then(({refProcesador}) => {

          return CatroEixosSwaggerMiddlewareSinConexion(refProcesador, {

            swaggerApi: path.join(__dirname, "./api/swagger.yaml"),

            controladores: path.join(__dirname, './routes/service'),

            jobs: {tipo: config.get("jobs.tipo"), conexion: config.get("jobs.conexion")}

          })

      })

      .then(({refProcesador}) => refProcesador)
      
  }

)

