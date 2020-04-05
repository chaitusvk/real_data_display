//Make connection
var socket = io.connect('http://localhost:4000');

//Listen

// Listen for events
socket.on('timedata', function(data){
    document.getElementById('time').innerHTML = data.hour+":"+data.minute+":"+data.sec;
});