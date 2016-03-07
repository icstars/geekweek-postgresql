var express = require('express');
var app = express();
var database = require('./database.js');

var port = process.env.PORT || 1337;
//Set up to render the html correctly from the html folder
app.engine('html', require('ejs').renderFile);

app.get('/getJson', function(req,res){
  console.log('app / requested');
  database.executeQuery("SELECT * FROM TTX_Empl_Trng_Reqst where Cntct_Email_Immed_Supv_Addr = 'SCOTT.WISSEL@TTX.COM'", function(results) {
  res.send(results);
    });
});

app.listen(port, function(){
  console.log("Application is running:")
  console.log("Listening on " + port);
});
