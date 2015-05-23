var fs = require("fs");
console.log(process.argv[2]);
var txt = fs.readFileSync(process.argv[2], 'utf8')
console.log(txt);
