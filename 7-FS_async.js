const {readFile,writeFile} = require('fs');


console.log("start");

// asynchronous 
// run pupllback when functionality is complete
// and run callback 
//                              // callback argument
readFile('./content/first.txt','utf8', (err,result)=>{ 
    if(err){
        console.log("Error");
        return;
    }
    const first = result;

    readFile('./content/second.txt','utf8', (err,result)=> {
        if(err){
            console.log("Error");
            return;
        }
        const second  = result;
        writeFile('./content/result-async.txt',
            `Here is the result: ${first}.\n${second}.\n`,
            (err,result)=>{
            if(err) return  
            // console.log(result);
            console.log("done with this task");
        });
    })
})


console.log("starting a new task");


// 'start', 'done with with this task' , 'starting a new task' 
//  will not print in the given order since it is ans async


