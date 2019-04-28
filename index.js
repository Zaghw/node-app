//importing node framework
var express = require('express');
 
var app = express();

//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('hello karim sir');
});

//listen to port 3000 by default
app.listen(process.env.PORT || 2500);
 
module.exports = app;
