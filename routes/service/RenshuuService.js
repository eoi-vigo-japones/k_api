
exports.Renshuu_renshuu_aleatorio_info = {
    
    producto: "Renshuu",
    
                
                esDiferida: false,   
                    
}
exports.renshuu_aleatorio = function(lecciones) {
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


