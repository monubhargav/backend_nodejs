const http = require('http');

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end("Home Page");
}
else if(req.url === '/about'){
    // BLOCKING CODE !!!
    // When '/about' page will be requested by some users
    //  it will block other requests (/about, /, /about ) pages
    for(let i =0;i<1000;i++){
        for(let j = 0;j<1000;j++){
            console.log(`${i} ${j}`);
        }
    }
    res.end('About page');
}
else {
    res.end("Error page");
}



})

server.listen(5000,()=>{
    console.log("server is listening on port 5000... ");
})