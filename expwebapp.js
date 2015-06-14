var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var basicAuth = require('basic-auth-connect');

var app = express();
app.use('/pics', express.static ('images'));

//Introduce basic authentication using browser dialog window
app.use(basicAuth('username', 'password'));

// parse urlencoded request bodies into req.body
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// app.use(express.static ('html'));


var pub = __dirname;
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');

var authd = false;
var userid = 'Unknown User';



app.post('/login', function(req, res){
	console.log('Login checking!!');
	if (req.body.username == 'anurag')
	{
		authd = true;
		userid = req.body.username;
	}
	console.log('Login checked for ' + req.body.username);
	res.redirect('/');
})

app.get('/', function(req, res){
	//res.end("hello world");
	if(authd == false)
		res.render('index', {date : new Date().toDateString()})
	//res.end();
	else
		res.render('home', {user : userid});
	

}).listen(process.argv[2]);
