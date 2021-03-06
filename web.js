var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/bootstrap'));

app.get('/', function(request, response) {
    var temp = fs.readFileSync('index.html');

    response.send(temp.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
