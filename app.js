var express = require('express');
var bodyParser = require('body-parser');
var marked = require('marked');

var readmeFileName = './README.md';
var markdownString = '';

var app = express();
var port = process.env.PORT || 3000;

var fs = require('fs')
fs.readFile(readmeFileName, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  markdownString = data;
});

app.use(bodyParser.urlencoded({extended: true}));

//creating an endpoint for default get
app.get('/',
  function(req, res){
    res.status(200).send(marked(markdownString));
  }
);

var twssResp = require('./twss')
app.post('/twss', twssResp);

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, function() {
  console.log('TWSSBot listening on port '+port);
})
