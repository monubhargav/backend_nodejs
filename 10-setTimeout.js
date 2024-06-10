// started operating system process

console.log('first task')

setTimeout(()=>{   
    console.log('second task');
},1000)

console.log('third task');
console.log('fourth task');

setTimeout(()=>{   
    console.log('second task2');
},0)

// completed and exited operating system process
