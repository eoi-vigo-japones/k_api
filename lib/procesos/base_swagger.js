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

}

module.exports = ProcesoBase;


