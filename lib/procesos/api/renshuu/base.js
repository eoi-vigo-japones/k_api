const ProcesoBase = require("../../base_swagger.js");

module.exports = class extends ProcesoBase{

  __getKanjis(listaKanjis){

    return Promise.all(listaKanjis.map((kanji) => {

      return this.subProceso(

        "Kanji.kanji_get",

        {
          "simbolo": kanji.simbolo

        }
      )

    }))

  }
}
