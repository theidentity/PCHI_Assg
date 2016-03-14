//Setting up connection
var io = require('socket.io-client');
var socket = io.connect('http://localhost:8000', { reconnect: true });
const readline = require('readline');
//Input into rl
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Emits to adress specified by socket
rl.on('line', function(line) {
    socket.emit('line', line)
})
