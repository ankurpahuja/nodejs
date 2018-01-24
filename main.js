var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var util = require('util')

app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();

});
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res) {
   res.send('Hello World - get');
})

app.post('/csv', function (req, res) {
    console.log("got request - post");
    //console.log(util.inspect(req.body, {showHidden: false, depth: null}))
    var csvarray = JSON.parse(req.body.datatojson);
    //console.log(csvarray);
    res.send(csvarray);
});

var server = app.listen(9090, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('seems like a very basic API')
});