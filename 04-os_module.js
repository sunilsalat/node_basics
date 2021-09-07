const os = require('os')

//info about current user
const User = os.userInfo()
console.log(User)

//system uptime in seconds
console.log(os.uptime())

//other methos in os module
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOS)