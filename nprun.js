var bunyan = require('bunyan');
var np = require('./nextPrime');
var log = bunyan.createLogger({name:'myapp'});
log.info("Calculating prime now");
console.log(np.nextPrime(2));
