const EventEmiiter  = require('events');

const customEmitter = new EventEmiiter();
// we have a instance of our class that is object

// on --> listen for an event 
// emit --> emit an event

// order matters:: 1. Listen an event then emit that event 

customEmitter.on('res',()=>{
    console.log('data recieved');
})


customEmitter.on('res',(name,id)=>{
    console.log(name,id);
    console.log('some other logic here');
    })
    
customEmitter.emit('res', 'john', 34);   // in emit function we can also 
// pass other arguments as well


