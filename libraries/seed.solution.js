const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, 'files');
const files = fs.readdirSync(dirname);

const ms1Day = 24 * 60 * 60 * 1000 // milliseconds in day

files.forEach( file => {
    const filePath = path.join(__dirname, file);

    fs.stat(filePath, (err, stats)=> {
        if(err) throw err;


        if (Date.now() - stats.mtime.getTime() > 7*ms1Day) {
            fs.unlink(filePath, (err) => {
                if(err) throw err;

                console.log(`${filePath} has been deleted`);
            })
        }
    });
});



