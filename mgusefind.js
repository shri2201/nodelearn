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

Incident.find({place: 'Utrecht'}, function (err, inciObj) {
  if (err) {
    console.log(err);
  } else if (inciObj) {
    console.log('Found:', inciObj[0]);
} else {
    console.log('Incident not found!');

}
});