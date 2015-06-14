var restify = require('restify');
var mongoose = require('mongoose');

function processRequest(req, res, next) {
  console.log("Received request : " + req);	
  res.send('hello');
  next();
}

var ip_addr = '127.0.0.1';
var port = 8080;
var server = restify.createServer({
	name : "myapp"
});

server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());
var PATH = '/jobs';
server.get({path : PATH , version : '0.0.1'} , processRequest);
server.get({path : PATH +'/:jobId' , version : '0.0.1'} , processRequest);
server.post({path : PATH , version: '0.0.1'} ,processRequest);
server.del({path : PATH +'/:jobId' , version: '0.0.1'} ,processRequest);

server.listen(8080, ip_addr, function() {
  console.log('%s listening at %s', server.name, server.url);
});