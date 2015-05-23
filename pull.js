zmq = require('zmq');

puller = zmq.socket('pull');

puller.connect("tcp://127.0.0.1:4000");
console.log("Connected to Pusher");

puller.on('message', function(data){
		console.log("Fetching a Job ");
		console.log(data.toString('utf8'));
		
});


