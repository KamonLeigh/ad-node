/*
 * 
 * Launch Node
 * http.STATUS_CODES
 * terminal will produce a list of codes
 */


const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer();

const data = {
    name: 'john',
    email: 'john@example.com'
}

server.on('request', (req, res) => {

   switch (req.url) {
       case '/api':
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(data))
          break
       case '/home':
       case '/about':
           res.writeHead(200, {'Content-Type': 'text/html'});
           res.end(fs.readFileSync(path.join(__dirname,`./${req.url}.html`)))
           break;
        case '/':
            res.writeHead(301, {'Location':'/home'})
            res.end();
            break
       default:
           res.writeHead(404)
           res.end();
           break;
   }
   
})

//server.timeout = 1000;
server.listen(8000, () => console.log('The server has started'))