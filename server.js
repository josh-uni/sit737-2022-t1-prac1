var express = require('express');
var app = express();

//Logging Function
var log=function(msg){
    var date = new Date();
    console.log(date.toLocaleTimeString() + " [Server Activity] : ", msg)
}

//Simple GET Function
app.get('/', function (req, res) {
    log("Page has been requested");
    res.send("Hello World");
})

app.listen(3000);
//Logs after the server has been started
log("Web server started");