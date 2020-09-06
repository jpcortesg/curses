const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log('Free memory: ' + os.freemem());
console.log('Total memory: ' + os.totalmem());