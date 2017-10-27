'use strict';

var utils = require('../utils/writer.js');
var Leccion = require('../service/LeccionService');

module.exports.leccion_get = function leccion_get (req, res, next) {
  var nombre = req.swagger.params['nombre'].value;
  Leccion.leccion_get(nombre)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.leccion_get_all = function leccion_get_all (req, res, next) {
  Leccion.leccion_get_all()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
