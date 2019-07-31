var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var configDB = require('./config/database.js');
mongoose.connect(configDB.url, { useMongoClient: true }, function(err, database){
    if(err){
        console.log('Error: '+err);
    }else{
    	console.log('OK');
    }
}); 
mongoose.connection.on('error', function(err) {
  console.log('ERROR: '+ err);
}); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('../public'));

app.get('/', function (req, res) {
	console.log('Main');
  res.send('Server is running');
});

require('./app/routes')(app);

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});



