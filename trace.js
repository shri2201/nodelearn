//Measure execution time in JS code 
console.time('myapp');
var d = new Date();
var today = d.getDate();
console.trace();
console.log(today);
console.log(d.getMonth());
console.log(d.getFullYear());
console.timeEnd('myapp');