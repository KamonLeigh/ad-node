/**
 *  line to create a self certificad
 *  openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes
 */


const https = require('https');
const fs = require('fs');
const path = require('path');

const server = https.createServer({
    key: fs.readFileSync(path.join(__dirname,'./keys/key.pem')),
    cert: fs.readFileSync(path.join(__dirname,'./keys/cert.pem'))
});

server.on('request', (req, res) => {
    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    res.end('Hello World\n');
})

//server.timeout = 1000;
server.listen(443, () => console.log('server has started'))