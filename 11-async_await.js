const {readFile,writeFile} = require('fs/promises');
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                resolve(data);
//             }
//         })
//     })
// }

// above functionality code is already implemented on uti.promisify
// so we can use that one 


const start  = async()=>{
    try {  
        const first = await readFile('./content/first.txt','utf8');
        const second = await readFile('./content/second.txt','utf8');
        await writeFile('./content/result-mind-grenade.txt',
         `This is result: ${first} ${second}`,{flag:'a'});
        
        console.log(first);
        console.log(second);
    } catch (error) {  
        console.log(error);
    }
}

start();


// // same start code without using async method and
// now it becomes overhead

// const start2 = () => {
//     getText('./content/first.txt')
//         .then((first) => {
//             console.log(first);
//             return getText('./content/second.txt');
//         })
//         .then((second) => {
//             console.log(second);
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// }
// start2();
