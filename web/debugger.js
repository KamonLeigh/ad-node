/**
 * call file with node debug filename
 * 
 * restart 
 * sb(line in code) === equal to adding debugger in code 
 * 
 * cont === continue
 * type repl to look at variables etc...
 * 
 * sb(line) within a loop
 * use watch('foo') // watch variables 
 * cont 
 * it will display values
 */

 function negativeSum(...args) {
     return args.reduce((arg, total) => {
        return total - arg;
     }, 0)
 }

 console.log(negativeSum(1, 5, 10));

 // debug in chrome

 // node --inspect --debug-brk index.js

 // open url in chrom