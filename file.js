//Read a file and log its contents on console
//Write a file
var fs = require('fs');
console.log("Starting to read file now");

fs.readFile ('resource.json', function(err,data) {
	if(err) throw err;
	console.log(data.toString());
	
})
fs.writeFile('message.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});
console.log("Finished readin/writing files");
