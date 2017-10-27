const KApiBaseSwagger = require("../../base_swagger.js");

const config = require("config");

module.exports = class extends KApiBaseSwagger{

  DEPURAR() {return true}

  __r(){
    return [
      "__apuntarResultados"
    ]
  }

  __apuntarResultados(){

    this.asignarProducto({

      version: config.get("api.version"),

    })

  }

}
