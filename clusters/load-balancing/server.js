const http = require('http');
const pid = process.pid

let users;
http.createServer((req, res) => {
    for (let i = 0; i < 1e7; i++){}
   
    res.write(`process ${pid}\n`);
    res.end(`Users: ${users}`)
}).listen(4000, () => console.log(`process ${pid} has started`))


process.on('message', msg => {
    //console.log(`Message from master: ${msg}`
    users = msg.userCount
})
/**
 * ab -c200 -t10 http://localhost:4000/
 * apache bench mark tool 200 concurrent connection in 10 seconds
 * 
 */