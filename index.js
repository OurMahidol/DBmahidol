var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://heroku_gfwhqm01:arjf5iak66nl3usm0v1vaqmh3r@ds251022.mlab.com:51022/heroku_gfwhqm01";


var express = require("express");

var app = express();



var port = process.env.PORT || 5000;



app.get("/", (req, res) => {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("heroku_gfwhqm01");
        var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("customers").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      }); 
/*var responseObject = {

    status: true,

    data: { text: "hello" }

}

res.json(responseObject);*/


});


app.listen(port, () => {

    console.log("application is listening on:", port);
 
 });