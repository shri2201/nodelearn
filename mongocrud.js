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
    var car1 = {brand: 'Jaguar', model:'X', year:'2001', price: 16750, owners:['John', 'David', 'Sunil']};
    var car2 = {brand: 'Tata', model:'Indigo', year:'2012', price: 4310, owner:['Satish', 'Tom', 'Harry', 'Jessica']};
    var car3 = {brand: 'VW', model:'Golf', year:'1998', price: 1400};
    var car4 = {brand: 'Renault', model:'Duster', year:'2012', price: 29000};

  // Insert some users
    collection.insert([car1, car2, car3, car4], function (err, result) 
	    {
	      if (err) {
	        console.log(err);
	      } else {
	        console.log('Inserted %d documents into the "cars" collection. The documents inserted with "_id" are:', result.length, result);
	      }
	      //Close connection
	    // do some work here with the database.
	    
	    //Close connection
	      db.close();
	   });
  }
});
 