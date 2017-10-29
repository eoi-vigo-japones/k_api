const {expect} = require("chai");

const swagger = require("swagger-client");


describe("Test - Rest - Hiragana", function(){

  let Cliente;

  before(function(hecho){

    this.timeout(0);

    require ("../../index.js");

    setTimeout(hecho, 2000);

  })

  before(function(hecho){

    new swagger({

      url: 'http://localhost:8080/api-docs'

    }).then((cliente) => {

      Cliente = cliente;

      hecho();

    })
  })

  it("Hello", function(hecho){
    
    return hecho();
    Cliente.apis["Hello"]["hello_get"]()

      .then(({body}) => {
        hecho();
      })
      .catch((err) => {
        hecho(err);
      })

  })

  it("Kanji - por símbolo", function(hecho){
    return hecho();

    Cliente.apis["Kanji"]["kanji_get"]({

      k: "蕎"
    })

      .then(({body}) => {

        console.log(body)

        hecho();
      })
    
      .catch((err) => {
        hecho(err);
      })

  })

  it("Kanji - por clave", function(hecho){

    return hecho();
    Cliente.apis["Kanji"]["kanji_get_clave"]({

      clave: "alforfón"
    })

      .then(({body}) => {

        console.log(body)

        hecho();
      })

      .catch((err) => {
        hecho(err);
      })

  })

  it("Lección - get todas", function(hecho){

    Cliente.apis["Leccion"]["leccion_get_all"]()

      .then(({body}) => {

        console.log(body)

        hecho();

      })

      .catch((err) => {
        hecho(err);
      })

  })

  it("Lección - por nombre", function(hecho){

    Cliente.apis["Leccion"]["leccion_get"]({

      nombre: "Cuerpo Humano I"
    })

      .then(({body}) => {

        console.log(body)

        hecho();
      })

      .catch((err) => {
        hecho(err);
      })

  })

  it("Búsqueda - por historia", function(hecho){

    Cliente.apis["Busqueda"]["buscar_por_historia"]({

      termino: "perro"
    })

      .then(({body}) => {

        console.log(body)

        hecho();
      })

      .catch((err) => {
        hecho(err);
      })

  })

  it("Búsqueda - por componentes", function(hecho){

    Cliente.apis["Busqueda"]["buscar_por_componente"]({

      componente: "jauría"

    })
      .then(({body}) => {

        console.log(body)

        hecho();

      })

      .catch((err) => {

        hecho(err);

      })

  })
  

})
