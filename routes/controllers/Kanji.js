'use strict';

var utils = require('../utils/writer.js');
var Kanji = require('../service/KanjiService');

module.exports.kanji_get = function kanji_get (req, res, next) {
  var k = req.swagger.params['k'].value;
  Kanji.kanji_get(k)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.kanji_get_clave = function kanji_get_clave (req, res, next) {
  var clave = req.swagger.params['clave'].value;
  Kanji.kanji_get_clave(clave)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
