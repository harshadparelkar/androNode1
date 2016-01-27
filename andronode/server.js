// call the packages we need
//var express    = require('express');        // call express
//var app        = express();                 // define our app using express
//var bodyParser = require('body-parser');
//var mysql = require('mysql');
//
//
//var mysqlHost = process.env.OPENSHIFT_MYSQL_DB_HOST || '127.0.0.1';
//var mysqlPort = process.env.OPENSHIFT_MYSQL_DB_PORT || '3306';
//var mysqluser = process.env.OPENSHIFT_MYSQL_DB_USERNAME || 'system';
//var mysqlpwd  = process.env.OPENSHIFT_MYSQL_DB_PASSWORD || '';
//
//
//var connection = mysql.createConnection({
// host     : mysqlHost,
// port     : mysqlPort,
// user     : mysqluser,
// password : mysqlpwd,
// database : 'developercorey'
//});
//
//
//var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
//var ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
//app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//
//
////################ web services #####################
//
//app.post('/api/location', function(req, res) {
//    var user_id = req.body.id;
//    var token = req.body.token;
//    var geo = req.body.geo;
//
//    res.send('new Post resp: ' + user_id + ' ' + token + ' ' + geo);
//});
//
//
//
//
////routes will go here
//app.get('/api/location', function(req, res) {
//  var user_id = req.param('id');
//  var token = req.param('token');
//  var geo = req.param('geo');  
//
//  res.send('new Get resp: ' + user_id + ' ' + token + ' ' + geo);
//});
//
//
//
//
////###################################################
//
//
//
//
////Starting server
//app.listen(port, ip_address, function(){
//	  console.log("Listening on " + ip_address + ", server_port " + port)
//	});

var http = require('http');
var express = require('express');
var app = express();

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

http.createServer(app).listen(app.get('port'), app.get('ip'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});