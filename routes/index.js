'use strict';

var fs = require('fs'),
    path = require('path'),
    http = require('http');

var app = require('connect')();
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var serverPort = process.env.API_PORT || 8080;

// cargamos código específico de catro-eixos-swagger
const Bootstrap = require("./bootstrap.js");
const {start} = require("catro-eixos-swagger").Bootstrap;

// swaggerRouter configuration
var opciones = {
    swaggerUi: path.join(__dirname, '/swagger.json'),
    controladores: path.join(__dirname, './controllers'), //path a los controladores
    enMock: false //colocamos a true para devolver examples
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname,'api/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);


start(swaggerDoc, opciones, (catroEixosMiddleware) => {

        // Initialize the Swagger middleware
        swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

            // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
            app.use(middleware.swaggerMetadata());
            
            // Validate Swagger requests
            app.use(middleware.swaggerValidator());
            
            //middleware específico de catro-eixos-swagger
              app.use(catroEixosMiddleware.aplicar());
            
            // Serve the Swagger documents and Swagger UI
            app.use(middleware.swaggerUi());
            
            // Start the server
            http.createServer(app).listen(serverPort, function () {
              console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
              console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
            });
        
        });

})
