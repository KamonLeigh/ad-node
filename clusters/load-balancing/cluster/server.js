const http = require('http');
const pid = process.pid


http.createServer((req, res) => {
    for (let i = 0; i < 1e7; i++) {}

    res.end(`process ${pid}\n`);
}).listen(8080, () => console.log(`process ${pid} has started`))

// Code below represents a random crash


// setTimeout(() => {
//     process.exit(1) // death by random timeout
// }, Math.random() * 10000)