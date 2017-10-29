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

    let salida = this.ll.map((l) => {
        return {
          nombre: l.nombre,
          orden: l.orden
        }
    })


    if(this.sys("__subproceso__")){
  
      this.resultado("lecciones", salida);

    }
    else{

      this.asignarProducto(salida);
    }

  }

}
