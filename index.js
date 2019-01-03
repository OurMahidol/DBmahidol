var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://heroku_gfwhqm01:arjf5iak66nl3usm0v1vaqmh3r@ds251022.mlab.com:51022/heroku_gfwhqm01";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
}); 