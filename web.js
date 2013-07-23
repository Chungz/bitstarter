var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.use('/public', express.static(__dirname + "/public"));

app.get('/', function(request, response) {
    var index = fs.readFileSync('index.html').toString();
    response.send(index);
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
