const fs = require('fs');
const zmq = require('zmq');

publisher = zmq.socket('pub');

filename = process.argv[2];
fs.watch(filename, function(){
publisher.send(JSON.stringify({
	type: 'changed',
	file: filename,
	timestamp: Date.now()
}));
});

publisher.bind('tcp://*:5432', function(err){
	console.log('I am waiting for 0MQ subscribers at TCP:5432');
});
