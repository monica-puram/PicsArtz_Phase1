var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var fs = require('fs');
app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3001);

//ContactUs
app.post('/contactInfo',function(req,response) {
  var dateTime = new Date();
  var fileName = "contactInfo_"+dateTime.getDate()+"-"+dateTime.getMonth()+1+"-"+dateTime.getFullYear()+".txt";
  fs.appendFile(fileName, JSON.stringify(req.body)+"\n", function (err) {
    if (err) {
      return response.end("Error while submitting your information : "+err);
    }
    else {
      return response.status("200").send("Successfully submitted your information. \n We will reach out to you soon!");
    }
  });
})

