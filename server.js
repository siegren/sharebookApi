var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  Donor = require('./api/models/donorModel'), //created model loading here
  Book = require('./api/models/bookModel'), //created model loading here
  bodyParser = require('body-parser');

  var cors = require('cors');

app.use(cors());
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/donordb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var donor_routes = require('./api/routes/donorRoutes'); //importing route
var book_routes = require('./api/routes/bookRoutes'); //importing route

donor_routes(app); //register the route
book_routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);



