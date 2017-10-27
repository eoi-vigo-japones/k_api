const {boot} = require("catro-eixos-swagger").Bootstrap;

const config = require("config");

const init = require("./lib/init.js");

boot("Cargado procesador", function(){

    return new Promise((cumplida, falla) =>{

        init({})

            .then(({refProcesador, configuracion}) => {

                console.log(`Seteando ${refProcesador}`);
                console.log(refProcesador);

                this.setProcesador(refProcesador);

                cumplida();
            })
            
            .catch((err) => {

                falla(`[BOOT] ${err}`);
            })
    })
})
