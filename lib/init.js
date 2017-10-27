const {init} = require("catro-eixos-js");

const BD = require("../models/index.js");

const ProcesoBase = require("./procesos/base_swagger.js")
module.exports = function(){

  return init({

    "Hello": __dirname + "/procesos/api/hello",
    "Kanji": __dirname + "/procesos/api/kanji",
    "Leccion": __dirname + "/procesos/api/lecciones",
    "Busqueda": __dirname + "/procesos/api/busqueda",

  }).then((refProcesador) => {

    ProcesoBase.setBbdd(BD);

    return refProcesador;
  })

  .then((refProcesador) => {

    return {refProcesador}

  })

}
