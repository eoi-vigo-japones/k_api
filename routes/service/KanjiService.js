
exports.Kanji_kanji_get_info = {
    
    producto: "Kanji",
    
                
                esDiferida: false,   
                    
}
exports.kanji_get = function(k) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "componentes" : [ "\"blanco\"" ],
  "historia" : "Año blanco ",
  "clave" : "cien",
  "solo_componente" : false,
  "id" : "百",
  "como_componente" : [ "\"\"" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}



exports.Kanji_kanji_get_clave_info = {
    
    producto: "Kanji",
    
                
                esDiferida: false,   
                    
}
exports.kanji_get_clave = function(clave) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "componentes" : [ "\"blanco\"" ],
  "historia" : "Año blanco ",
  "clave" : "cien",
  "solo_componente" : false,
  "id" : "百",
  "como_componente" : [ "\"\"" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


