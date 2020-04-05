var express = require('express');
var socket = require('socket.io');


//App Setup

var app = express();
var server = app.listen(4000,function (){
    console.log('lising to request on port 4000');
});

//Static files
app.use(express.static('public'))

//Setup Scoket
var io = socket(server);

io.on('connection',function(socket) {
    console.log('Made socket connection',socket.id)

    
});

setInterval(function(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    io.emit('timedata',{
        hour: h,
        minute:m,
        sec:s

    },500);   
    
});