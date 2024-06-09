const http = require('http');
 
// information of all stuff about the rquest of webserver by clien 
// is stored in req(first argument) and it result will be stored in res(second argument)
// res--> information that we are sending back
const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.end("Welcome to the home page");
  }
  else if(req.url === '/about'){
    res.end("Here is the contact information")
  }
  else {
res.end(`<h1>OOPs</h1>
   <p> We can't seem to find the page you are looking for </p>
   <a href = "/">back home</a>`)
}
//   console.log(req);

})

server.listen(5000);      // arbitary number 
