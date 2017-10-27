
exports.Busqueda_buscar_por_componente_info = {
    
    producto: "ResultadoBusqueda",
    
                
                esDiferida: false,   
                    
}
exports.buscar_por_componente = function(componente) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "encontrados" : 1,
  "compuestos" : [ "二" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}



exports.Busqueda_buscar_por_historia_info = {
    
    producto: "ResultadoBusqueda",
    
                
                esDiferida: false,   
                    
}
exports.buscar_por_historia = function(termino) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "encontrados" : 1,
  "compuestos" : [ "二" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


