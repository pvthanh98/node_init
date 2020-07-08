var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var express = require('express');
var cookieParser = require("cookie-parser");
var session = require('express-session');
var bodyParser = require('body-parser');


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: Date.now() + 3600 }}));
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/',function(req, res){
    res.sendStatus(200)
})

var server = http.createServer(app).listen(8080,()=>console.log("server running"));