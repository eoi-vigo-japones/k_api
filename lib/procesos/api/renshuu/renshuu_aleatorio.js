const ProcesoBaseRenshuu = require("./base.js");

const Sequelize = require("sequelize");

module.exports = class extends ProcesoBaseRenshuu{

  __r(){
    return [
      "__filtrarLecciones",
      "__barajarResultados",
      "__getKanjis",
      "__formatearResultados"
    ]
  }

  __filtrarLecciones(){

    if(this.arg("lecciones") == "pro"){

      return this.bd().kanji.findAll({

        order: [

          Sequelize.fn("RANDOM")

        ]

      })

        .then((resultados) => {

          return resultados.map((k) => {

            return {

              __producto__: {

                miembros: [{id: k.simbolo}]

              }

            }
  
          })
  
        })

    }
    else{

      return Promise.all(

        this.arg("lecciones").split(/\,/).map((l) =>{

          return this.subProceso(

            "Leccion.leccion_get",

            {
              nombre: l

            }

          )

        })
      )
    }

  }

  OK__filtrarLecciones(lecciones){

    this["ll"] = lecciones.reduce((a, l) => {

       l.__producto__.miembros.forEach((m) => {

          a.push(m.id);
       })

      return a;

    }, [])

  }

  __barajarResultados(){

    this["res"] = this.barajar(this["ll"]);

    if(this.arg("n_elementos")){
      this["res"] = this["res"].splice(0, this.arg("n_elementos"))
    }

  }

  __getKanjis(){


    return Promise.all(this.res.map((k) => {

      return this.subProceso(

        "Kanji.kanji_get",

        {
          k: k
        }

      ).then((r) => {

        return r.__producto__

      })

    }))

  } 

  OK__getKanjis(res){

    this["res"] = res;
  }
 
  __formatearResultados(){

    this.res.forEach((k) => this.producto().push(k) )

  }

}
