const { Readable } = require('stream');

// const inStream = new Readable();

// inStream.push('ABCDEFGH');
// inStream.push(null);

// inStream.pipe(process.stdout);

const inStream = new Readable({
    read(size) {

        setTimeout(() => {
            if (this.currentCharCode > 90) {
                this.push(null);
                return
            }
            this.push(String.fromCharCode(this.currentCharCode++))
        }, 100)
    }
});

inStream.currentCharCode = 65;

inStream.pipe(process.stdout);

process.on('exit', () => {
    console.error(
        `\n\currentCharcode is ${inStream.currentCharCode}`
    )
});
process.stdout.on('error', process.exit);

// node streams/readable.js | head -c3

// command to run 