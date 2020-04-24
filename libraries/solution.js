/*
 * content in filees have been duplicated 
 * 
 */


const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, 'files');

const files = fs.readdirSync(dirname); // returns an array of file names

files.forEach(file => {
    const filePath = path.join(__dirname, file);

    fs.stat(filePath, (err, stat) => {
        if(err) throw err;

        fs.truncate(filePath, stats.size/2, (err) => {
            if (err) throw err;
        });
    })
});