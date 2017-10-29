const ProcesoBaseBusqueda = require("./base.js");

module.exports = class extends ProcesoBaseBusqueda{

  __r(){

    return [
      "__realizarBusqueda",
      "__formatearResultados"
    ]

  }

  __realizarBusqueda(){

    return this.bd().kanji_info.findAll({

      where: {

        componentes: {

          "$like": "%" + this.arg("componente") + "%"

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
