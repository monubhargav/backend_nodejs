// Path Module 
const path = require('path');

// file separator 
console.log(path.sep);

// path of the file
const filePath = path.join('/content','subfolder','generic.txt');
console.log(filePath);

// base file
const base = path.basename(filePath);
console.log(base);

// absolute path 
const absPath = path.resolve(__dirname,'content','subfolder','generic.txt');
console.log(absPath);
