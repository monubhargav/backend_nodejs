// STREAMS
// Writeable --> writting sequentially
// Readable  --> Reading sequentially
// Duplex   -->  Both reading and writting sequentially
// Tansform -->  Modify the data 

// read file using stream option

const http = require('http')
var fs = require('fs');


// const {createReadStream} = require('fs');
// const stream = createReadStream('./content/big_file.txt',
//     {highWaterMark: 90000, encoding:'utf8'}
    
// )

// // now reading data in chunks  with size of the buffer 64 kB
// // instead of just storing whole file data in single variable
// stream.on('data', (result)=>{
//     console.log(result);
// })

// stream.on('error',(err)=>{
//     console.log(result);
// })


http.createServer(function (req, res){
    // 1. Whole file will be send as reponse at once 
    // const text = fs.readFileSync('./content/big_file.txt','utf8')
    // res.end(text);

    // 2. File data will be transfered into chunks
    const fileStream = fs.createReadStream('./content/big_file.txt','utf8');
    fileStream.on('open',()=>{
        fileStream.pipe(res );
    })
    fileStream.on('error',(err)=>{
        res.end(err);
    })
}).listen(5000)
