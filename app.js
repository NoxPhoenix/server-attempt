var http = require('http')
var unirest = require('unirest')
var fs = require('fs')
var express = require('express')
var bodyParser = require('body-parser')

var app = express();
var call;

// We have no fucking idea what this code does.....
app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(__dirname + '/public'));


app.listen(3000);

app.post('/search', function (req, res) {
  var searchTxt = req.body.key;
  // fs.writeFileSync('test.txt', req.body);
  console.log(searchTxt);
  unirest.post('http://www.omdbapi.com/?')
  .header({'Accept': 'application/json', 'Content-Type': 'application/json'})
  .query({ "s": searchTxt, "type": "movie", "r": "json" })
  .end(function (response) {
    call = JSON.stringify(response.body);
  });
  res.send(call)
  });



//
//
// http.createServer(function(req, res) {
//   res.writeHead(200);
//   res.end(call);
// }) .listen(8080);
