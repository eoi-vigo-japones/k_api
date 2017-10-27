const BaseLeccion = require("./base.js");

module.exports = class extends BaseLeccion{

  __r(){

    return [

      "__getLecciones",
      "__formatearLecciones"
    ]
  }

  __getLecciones(){

    return this.bd().leccion.findAll({})


  }

  OK__getLecciones(ll){

    this["ll"] = ll;
  }

  KO__getLecciones(err){

    this.error(`Error GET_LECCIONES ${err}`)
  }

  __formatearLecciones(){

    this.ll.forEach((l) => {

      this.producto().push({

        nombre: l.nombre,
        orden: l.orden

      })

    })    

  }
}
