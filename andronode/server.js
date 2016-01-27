// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');


var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


//################ web services #####################

app.post('/api/location', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;

    res.send('new Post resp: ' + user_id + ' ' + token + ' ' + geo);
});




//routes will go here
app.get('/api/location', function(req, res) {
  var user_id = req.param('id');
  var token = req.param('token');
  var geo = req.param('geo');  

  res.send('new Get resp: ' + user_id + ' ' + token + ' ' + geo);
});




//###################################################




//Starting server
app.listen(port, ip_address, function(){
	  console.log("Listening on " + ip_address + ", server_port " + port)
	});
