var express = require('express');
var port = 8080;
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var expressMongoDb = require('express-mongo-database');
var config = require('./config');
global.config = config();
var app = express();
app.use(expressMongoDb(global.config.MONGODB_URI, {'database': global.config.DATABASE}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// dynamically include routes (Controller)

fs.readdirSync('./app/controllers/admin').forEach(function (file) {
  if (file.substr(-3) == '.js') {
    route = require('./app/controllers/admin/' + file);
    route.controller(app);
  }
});



// start express server
var server = app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});