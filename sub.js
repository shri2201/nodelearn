const fs = require('fs');
const zmq = require('zmq');

subscriber = zmq.socket('sub');

subscriber.subscribe("");

subscriber.on("message", function(data){
	let
	message = JSON.parse(data),
	date = new Date(message.timestamp);
    console.log("Got a change at " + date);
});

subscriber.connect("tcp://localhost:5432");