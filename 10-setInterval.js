console.log("I will run first");
setInterval(()=>{
    console.log("Hellow World");
    // it will print "Hello world" at the interval of 4 second
},4000);
console.log("I will run second");
setInterval(()=>{
    console.log("Hello Myself");
    // it will print hello myself at the interval of 2 second with in que with above setInterval function
},2000);

// Process stays alive unless 
// kill process control + c or 
// unexpected error 