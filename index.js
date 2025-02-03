'use strict';

// Load .env file first, before other requires
require('dotenv').config();

var fs = require('fs'),
    path = require('path'),
    http = require('http');

var app = require('connect')();
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var apiKey = require('./middleware/apiKey');

var mongodb = require('./database/mongodb');

// Konfiguration über Umgebungsvariablen
var serverPort = process.env.PORT || 8080;
var serverHost = '0.0.0.0';  // Wichtig: Bindet an alle verfügbaren Netzwerk-Interfaces

// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname,'api/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

app.use(require('./middleware/allowcrossorigin'));

console.log("aaaaaaaaaaaaaaa");

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
  // Add API key verification before other middleware
  app.use('/v1', apiKey);

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Start the server
  http.createServer(app).listen(serverPort, serverHost, function () {
    console.log('Your server is listening on port %d (http://%s:%d)', serverPort, serverHost, serverPort);
    console.log('Swagger-ui is available on http://%s:%d/docs', serverHost, serverPort);
    mongodb.connect();
  });

});
