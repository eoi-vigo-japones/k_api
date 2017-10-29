const {ProcesoSwagger} = require("catro-eixos-swagger");

let REF_BBDD;

class ProcesoBase extends ProcesoSwagger{

  static setBbdd(bd){

    REF_BBDD = bd;

  }

  static getBbdd(){

    return REF_BBDD;

  }

  bd(){
    return ProcesoBase.getBbdd();
  }


  barajar(lista){

    let indiceActual = lista.length;
    let valorTemporal;
    let indiceRandom;

    while(0 !== indiceActual){

      indiceRandom = Math.floor(Math.random() * indiceActual);

      indiceActual -= 1;

      valorTemporal = lista[indiceActual];

      lista[indiceActual] = lista[indiceRandom];
      lista[indiceRandom] = valorTemporal;

    }

    return lista;

  }

}

module.exports = ProcesoBase;


