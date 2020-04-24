const dns = require('dns'); // name --- address 


// uses libuv file threads
// dns.lookup('pluralsight.com', (err, address) => {
//     console.log(address);
// })

// dns.resolve4('pluralsight.com', (err, address) => {
//     console.log(address);
// })

// dns.resolve('pluralsight.com','MX' ,(err, address) => {
//     console.log(address);
// })

dns.reverse('54.149.188.120', (err, hostname) => {
    console.log(hostname);
})