
exports.Hiragana_hiragana_get_info = {
    
    producto: "Hiragana",
    
                
                esDiferida: false,   
                    
}
exports.hiragana_get = function(h) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "historia" : "aeiou",
  "romaji" : "a",
  "literal" : "あ"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


