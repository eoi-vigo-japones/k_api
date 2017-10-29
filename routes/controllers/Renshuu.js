'use strict';

var utils = require('../utils/writer.js');
var Renshuu = require('../service/RenshuuService');

module.exports.renshuu_aleatorio = function renshuu_aleatorio (req, res, next) {
  var lecciones = req.swagger.params['lecciones'].value;
  Renshuu.renshuu_aleatorio(lecciones)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
