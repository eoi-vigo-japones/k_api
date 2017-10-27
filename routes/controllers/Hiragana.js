'use strict';

var utils = require('../utils/writer.js');
var Hiragana = require('../service/HiraganaService');

module.exports.hiragana_get = function hiragana_get (req, res, next) {
  var h = req.swagger.params['h'].value;
  Hiragana.hiragana_get(h)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
