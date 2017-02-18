//-------Server Setup-------//
var http = require('http');
var request = require('request');
var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//-----Request to web page------//
app.get("/", function(req,res){
	console.log("Test Run");
	res.sendFile(path.join(__dirname + '/WebGazer-master/demo.html')); //path.join(__dirname + '/Test.html')
});

//-------- To Host Locally -------------------//
http.createServer(app).listen(8080, function () {
  console.log("Express server listening on port 8080");
});
