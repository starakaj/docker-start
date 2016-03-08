var express = require('express'),
    http = require('http');

var app = express();

app.get('/', function(req, res, next) {
  res.send("Congrats, asshole, you've loaded the page");
});

http.createServer(app).listen(process.env.PORT || 8080, function() {
  console.log('Listening on port ' + (process.env.PORT || 8080));
});
