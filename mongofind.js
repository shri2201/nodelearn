//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://test2:tester@ds045007.mongolab.com:45007/test2';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
    } 
  else 
    {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);
    // Get the documents collection
    var collection = db.collection('cars');
 
    // Find some users
    collection.find({brand: 'BMW'}).toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
        console.log('Found Car(s):', result);
      } else {
        console.log('No Cars(s) found with defined "find" criteria!');
      }
   
	      db.close();
	   });
  }
});
 