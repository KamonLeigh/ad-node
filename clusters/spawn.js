const { spawn } = require('child_process');

const find = spawn('find', ['.', '-type', 'f']); // linux commands
const wc = spawn('wc', ['-l']);

find.stdout.pipe(wc.stdin);

wc.stdout.on('data', (data) => {
    console.log(`Number of files ${data}`)
})

/**
 * command counts nuber files in directory
 * good for big data as it streams
 */

 // Shell mode 
//  const child = spawn('find . -type f', {
//       stdio: 'inherit',
//       shell: true
//  })