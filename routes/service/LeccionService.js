
exports.Leccion_leccion_get_info = {
    
    producto: "Leccion",
    
                
                esDiferida: false,   
                    
}
exports.leccion_get = function(nombre) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "descripcion" : "Lección dedicada a los números del 1 al 10",
  "alias" : "numeros_1",
  "nombre" : "Números I",
  "miembros" : [ {
    "solo_componente" : false,
    "id" : "一"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}



exports.Leccion_leccion_get_all_info = {
    
    producto: "Lecciones",
    
                
                esDiferida: false,   
                    
}
exports.leccion_get_all = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


