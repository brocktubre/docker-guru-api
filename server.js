var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Guru = require('./api/models/gurus-model'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo:27017/gurudb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/gurus-routes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Guru list RESTful API server started on: ' + port);