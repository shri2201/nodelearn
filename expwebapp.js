var express = require('express');
var path = require('path');
var app = express();
app.use('/pics', express.static ('images'));
// app.use(express.static ('html'));
var pub = __dirname;
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');
app.get('/', function(req, res){
	//res.end("hello world");
	res.render('index', {date : new Date().toDateString()})
	//res.end();
}).listen(process.argv[2]);
