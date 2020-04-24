const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2] // fake

fs.createReadStream(file)
    .pipe(zlib.createGzip())
    .on('data', console.log('.')) // progress
    .pipe(fs.createReadStream(file + '.gz'))
    .on('finish', console.log('done')) // when stream has ended

/*
 * - Create stream from a file
 * - Creates zlib object
 * - Pipe the compresed file into new location
 */