const dns = require("dns");
const { promisify } = require('util');



// Part 1 using synchronous
dns.resolve4("www.mum.edu", (err, add) => { console.log(add) })


// //Part 2 using promise
const promiseDns = promisify(dns.resolve4)("www.mum.edu").then(x => console.log(x));



//Part 3 using async and await..
async function asyncDns(url) {
    const answer = await promisify(dns.resolve4)(url);
    console.log(answer);
}

asyncDns("www.mum.edu");
