//lets require/import the mongodb native drivers.
var mongoose = require('mongoose');

// Connection URL. This is where your mongodb server is running.
mongoose.connect('mongodb://test:test@ds063889.mongolab.com:63889/test1');

var Incident = mongoose.model('Incident', {
											place: String,
											date: String,
											typ: String,
											age: Number,
											vict: String
											});

var incd1 = new Incident({place: 'Utrecht', date:'30-04-2015', typ: 'Fire', age: '13', vict: 'Gert Zijlstra'});

console.log(incd1);

//Lets save it
incd1.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('Incident is saved successfully:', userObj);
  }
});