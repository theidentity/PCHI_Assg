//Setting up connection0
var io = require('socket.io')(8000);
io.on('connection', function(socket) {
    socket.on('line', function(line) {
		//Prints each line
        console.log(line)
    })
});
