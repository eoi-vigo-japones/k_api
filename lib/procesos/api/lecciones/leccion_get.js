const BaseLeccion = require("./base.js");

module.exports = class extends BaseLeccion{

  __r(){

    return [

      "__getLeccion",
      "__getKanjisLeccion",
      "__formatearLeccion"
    ]
  }

  __getLeccion(){

    return this.bd().leccion.find({

      where: {nombre: this.arg("nombre")}
    
    }).then((l) => {

      if(!l) throw 'NO_ENCONTRADO'

      return l;
    })

  }

  OK__getLeccion(l){

    this["l"] = l;
  }

  KO__getLeccion(err){

    if(err.match(/NO_ENCONTRADO/))
      this.errorApi(404, "No encontrado")
    else
      this.error(`Error GET_KANJI ${err}`)
  }

  __getKanjisLeccion(){

      return this.l.getKanjis()

      .then((kanjis) => {

        return Promise.all(kanjis.map((k) => {

          let Kanji;

          return this.bd().kanji.find({

            where: {id: k.kanji_id}

          }).then((kanji) => {

            Kanji = kanji;

            return kanji.getInfo()
          })

          .then((info) => {

            return {

              simbolo: Kanji.simbolo,
              solo_componente: info.solo_componente
  
            }
          })

        }))
  
      })

  }

  OK__getKanjisLeccion(kanjis){

    this["kanjis"] = kanjis;
  }

  __formatearLeccion(){

    this.producto().alias = this.l.alias;
    this.producto().nombre = this.l.nombre;
    this.producto().descripcion = this.l.descripcion;
 
    this.producto().miembros = this["kanjis"].map((k) => {

      return {

        id: k.simbolo,
        solo_componente: k.solo_componente == 1

      }
    })
       
  }
}
