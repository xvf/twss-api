var express = require('express');
var bodyParser = require('body-parser');
var twss = require('twss');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/',
  function(req, res){
    res.status(200).sendFile(__dirname + '/README.md');
  }
);

var twssResp = require('./twss')
app.post('/twss', twssResp);

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, function() {
  console.log('TWSSbot listening on port '+port);
})
