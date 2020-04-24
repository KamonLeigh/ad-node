const http = require('http');
const { fork } = require('child_process')

const server = http.createServer();

server.on('request', (req, res) => {

    if(req.url == '/compute') {
        const compute = fork('compute.js'); // may of use path to get file
        compute.on('message', (sum) => {
            res.end(`The sum is ${sum}`)
        })

    } else {
        res.end('Ok')
    }

});

/**
 *  Once forked the server is no longer blocked
 * 
 */

server.listen('8000', () => console.log('server has started'))