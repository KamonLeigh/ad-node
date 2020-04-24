/**
 * node net.js
 * tc localhost 8000
 * incoming data is incomes as a buffer 
 * socket.write which writes to the client assumes utf8
 */



process.stdout.write('\u001B[2J\u001B[0;0f');

function timeStamp() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
}

const server = require('net').createServer();
let counter = 0
let sockets = {};
server.on('connection', (socket) => {
    socket.id = counter++
   
    console.log('Client connected');
    socket.write('Please type in your name:');

    socket.on('data', data => {
        if(!sockets[socket.id]){
            socket.name = data.toString().trim();
            socket.write(`Welcome ${socket.name}`);
            sockets[socket.id] = socket;
            
            return
        }

        Object.entries(sockets).forEach(([key, cs]) => {
            if (socket.id == key) return;
            cs.write(`${socket.name}- ${timeStamp()}`);
            cs.write(data);
        })

    })

    //socket.setEncoding('utf8');

    socket.on('end', () => {
        delete sockets[socket.id];
        console.log('client has disconnected')
    })
});


server.listen(8000, () => console.log('Server bound'));
