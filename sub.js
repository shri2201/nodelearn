//Listen to tcp port for the messages 
const fs = require('fs');
const zmq = require('zmq');
subscriber = zmq.socket('sub');
subscriber.subscribe("");
subscriber.on("message", function(data){
	message = JSON.parse(data);
	date = new Date(message.timestamp);
    console.log("Got a change at: " + date + " File Name: " + message.file);
});
subscriber.connect("tcp://localhost:5432");