const BaseKanji = require("./base.js");

module.exports = class extends BaseKanji{

  __r(){

    return [

      "__getKanji",
      "__formatearKanjiDesdeClave"
    ]
  }

  __getKanji(){

    return this.bd().kanji_info.find({

      where: {clave: this.arg("clave")}
    
    }).then((info) => {

      if(!info) throw 'NO_ENCONTRADO'

      return info;
    })

  }

  OK__getKanji(info){

    this["info"] = info;
  }

  KO__getKanji(err){

    if(err.match(/NO_ENCONTRADO/))
      this.errorApi(404, "No encontrado")
    else
      this.error(`Error GET_KANJI ${err}`)
  }

}
