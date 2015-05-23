var http = require('http');
var util = require('util');
http.createServer(function(req, res){
	ip = req.connection.remoteAddress
	console.log("Serving a request... IP:" + ip );
	console.log(util.inspect(req));
	res.end("Hello, World!!\nYour IP is: " + ip + "\nPath is: " + req.url);
}).listen(3000);
console.log("Server started at port 3000");