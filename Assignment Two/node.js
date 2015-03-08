var http = require('http');
var express = require('express');
var app = express();

console.log('node.js application starting...');

var express = require('express');
var app = express();

app.all('/', function(req,res){
  res.send('Error URN must be specified');
});

app.all('/gets', function(req,res){
  if(req.method == 'GET'){ 
    if(Object.keys(req.query).length > 0)
		res.send('GET:' + JSON.stringify(req.query) + JSON.stringify(req.headers));
    else
        res.send('No headers or query parameters sent in');
  }
  else
    res.send('HTTP method not supported');
});

app.all('/posts', function(req,res){
  if(req.method == 'POST'){
    if(Object.keys(req.query).length  >  0)
      res.send('POST:' + JSON.stringify(req.query) + JSON.stringify(req.headers));
    else
      res.send('No headers or query parameters sent in');
  }
  else
    res.send('HTTP method not supported');
});

app.all('/puts', function(req,res){
  if(req.method == 'PUT'){
    if(Object.keys(req.query).length  >  0)
      res.send('PUT:' + JSON.stringify(req.query) + JSON.stringify(req.headers));
    else
      res.send('No headers or query parameters sent in');
  }
  else
    res.send('HTTP method not supported');
  
});

app.all('/deletes', function(req,res){
  if(req.method == 'DELETE'){
    if(Object.keys(req.query).length > 0)
      res.send('DELETE:' + JSON.stringify(req.query) + JSON.stringify(req.headers));
    else
      res.send('No headers or query parameters sent in');
  }
  else
    res.send('HTTP method not supported');
});

app.use("/", express.static(__dirname));

app.listen(3000, function(req,res) {
console.log('Server running at http://127.0.0.1:3000/');
});
