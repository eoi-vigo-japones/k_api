const ProcesoBaseBusqueda = require("./base.js");

module.exports = class extends ProcesoBaseBusqueda{

  __r(){

    return [
      "__realizarBusqueda",
      "__formatearResultados"
    ]

  }

  __realizarBusqueda(){

    return this.bd().kanji_historia.findAll({

      where: {

        cuerpo: {

          "$like": "%" + this.arg("termino") + "%"

        }

      }

    }).then((kk) => {

      return Promise.all(kk.map((k) => {

        return k.getKanji()

          .then((kanji) => { return kanji.simbolo } )

      }))

    })

  }

  OK__realizarBusqueda(kanjis){
    this["kanjis"] = kanjis;
  }

  __formatearResultados(){

    this.producto().encontrados = this.kanjis.length;
    this.producto().compuestos = this.kanjis;

  }

}
