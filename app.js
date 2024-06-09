// npm -- global coomand , comes with node 
// npm --version

// local dependencies - use it onoy in this particular project
// npm i <packageNae>

// global dependecies - use it any project 
// npm install -g <packageName>
// sudo npm bninstall -g<packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the roott, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everthing default)


const _ = require('lodash');
 
const items = [1,[2,[3,[4]]]];s
const newItems = _.flattenDeep(items);
console.log(newItems);

// during pushin code on github make sure
// to put node_modules folder in .gitignore file 
