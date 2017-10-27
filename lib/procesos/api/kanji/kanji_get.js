const BaseKanji = require("./base.js");

module.exports = class extends BaseKanji{

  __r(){

    return [

      "__getKanji",
      "__formatearKanjiDesdeId"
    ]
  }

  __getKanji(){

    return this.bd().kanji.find({

      where: {simbolo: this.arg("k")}
    
    }).then((k) => {

      if(!k) throw 'NO_ENCONTRADO'

      return k;
    })

  }

  OK__getKanji(k){

    this["k"] = k;
  }

  KO__getKanji(err){

    if(err.match(/NO_ENCONTRADO/))
      this.errorApi(404, "No encontrado")
    else
      this.error(`Error GET_KANJI ${err}`)
  }

}
