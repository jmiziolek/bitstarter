var express = require('express');
var fs = require('fs');

var buff = fs.readFileSync("index.html");
var index = new Buffer(buff);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(index.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
