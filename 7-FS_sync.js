const {readFileSync,writeFileSync} = require('fs');
console.log('start');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');



// every time modify the content    // flag =''
// writeFileSync('./content/result-sync.txt',`Here is the result: ${first}.\n${second}.\n`);

// append content in the file       // falg = 'a'
writeFileSync('./content/result-sync.txt',`Here is the result: ${first}.\n${second}.\n`,{flag:'a'});

console.log("done With  the task");

console.log('starting the next one');

