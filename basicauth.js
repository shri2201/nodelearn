
var express = require('express');
var basicAuth = require('basic-auth-connect');
var app = express();
//Introduce basic authentication using browser dialog window
app.use(basicAuth('username', 'password'));
app.get('/', function(req, res){
	res.end('hello, world from Anurag.........');
}).listen(process.argv[2]);