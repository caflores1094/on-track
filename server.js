var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname));// + 'public'));
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json


app.listen(3000);
console.log('listening on 3000');

app.get('/', function(req, res) {
  res.sendFile('./index.html');
});