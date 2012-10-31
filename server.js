var express = require('express'),
	fs = require('fs');

var app = express();
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));


app.get('/trunk/:resource', function(request, response) {
	
  	response.writeHead(200, {'Content-Type': 'application/json'});
    console.log(request.params);
		response.end("returned file");

});

app.patch('/trunk/:resource', function(request, response) {
  
    response.writeHead(200, {'Content-Type': 'application/json'});
    console.log(request.params);
    response.end("update file");

});

app.post('/trunk/:resource', function(request, response) {
  
    response.writeHead(200, {'Content-Type': 'application/json'});
    console.log(request.params);
    response.end("move the file");

});

app.put('/trunk/:resource', function(request, response) {
  
    response.writeHead(200, {'Content-Type': 'application/json'});
    console.log(request.params);
    response.end("create file");

});

app.remove('/trunk/:resource', function(request, response) {
  
    response.writeHead(200, {'Content-Type': 'application/json'});
    console.log(request.params);
    response.end("delete file");

});

app.get('/history/:resource', function(request, response) {
  
    response.writeHead(200, {'Content-Type': 'application/json'});
    console.log(request.params);
    response.end("returned history of file");

});

app.listen(8885);