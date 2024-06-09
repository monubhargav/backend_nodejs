// Operating system module  

const os = require('os');
// console.log(os);

// infor about current users 
const user = os.userInfo();
console.log(user);
// method to return the system uptime in seconds
console.log('The Sytem uptime is ',os.uptime(), ' seconds')


const currentOS = {
    name: os.type(),
    realease: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);

