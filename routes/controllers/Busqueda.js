'use strict';

var utils = require('../utils/writer.js');
var Busqueda = require('../service/BusquedaService');

module.exports.buscar_por_componente = function buscar_por_componente (req, res, next) {
  var componente = req.swagger.params['componente'].value;
  Busqueda.buscar_por_componente(componente)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.buscar_por_historia = function buscar_por_historia (req, res, next) {
  var termino = req.swagger.params['termino'].value;
  Busqueda.buscar_por_historia(termino)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
