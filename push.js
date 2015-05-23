const zmq = require('zmq');

const socket = zmq.socket('push');
counter = 0;
socket.bind('tcp://127.0.0.1:4000', function( err ){  
    if( err ){ 
        console.log(err.message); 
        process.exit(0); 
    } 
    // send a message every 350 ms 
    setInterval(function(){ 
        socket.send(counter++ ); 
    },1); 
});

