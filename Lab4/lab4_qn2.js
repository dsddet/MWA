const os = require('os');

console.log(os.cpus());
console.log(Math.round(os.totalmem() / 1024000000));