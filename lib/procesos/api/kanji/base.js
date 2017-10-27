const ProcesoBase = require("../../base_swagger.js");

module.exports = class extends ProcesoBase{

  __formatearKanjiDesdeClave(){

    return this.info.getKanji()

      .then((k) => {

        this.k = k;

        return this.__formatearKanjiDesdeId()

      })

  }

  __formatearKanjiDesdeId(){

    this.producto().id = this.k.simbolo; 

    return this.k.getInfo()

      .then((info) => {
      
        this.producto().clave = info.clave;
        this.producto().solo_componente = info.solo_componente == 1;  
        this.producto().como_componente = info.como_componente.split(/\|/);
        this.producto().componentes = info.componentes.split(/\,/);

        return this.k.getHistoria()
      })

      .then((historia) => {

        this.producto().historia = historia.cuerpo;

      })

  }

}
