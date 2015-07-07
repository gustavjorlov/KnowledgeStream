var express = require('express');

var app = express();

var users = [];

app.use(express.static(__dirname));

app.get("/", function(req, res){
	res.json({"hello": "world"});
});

app.get("/users", function(req, res){
	res.json(users);
});

app.post("/user/:name", function(req, res){
	console.log(res.params);
	res.json({"o": "k"});
});

app.listen(1337);