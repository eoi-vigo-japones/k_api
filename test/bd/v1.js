const {expect} = require("chai");

describe("Bbdd", function(){

  let BD;

  before(function(hecho){

    BD = require("../../models/index.js");

    setTimeout(hecho, 1000)

  })

  it("Permite consulta de kanji por simbolo", function(hecho){

    BD.kanji.findOne({where: {simbolo: "一"}})

      .then((k) => {

        expect(k.simbolo).to.equal("一");

        hecho();

      })
  })


})
