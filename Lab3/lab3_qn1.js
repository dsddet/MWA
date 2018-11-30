const dns = require("dns");
const { promisify } = require('util');



// Part 1 using synchronous
const callback = (err, add) => {
    return add;
};
dns.resolve4("www.mum.edu", (err, add) => { console.log(add) })


//Part 2 using promise
dns.resolve4("www.mum.edu", (error, address) => {
    return new Promise((resolve, reject) => { resolve(callback(error, address)) })
        .then(x => console.log(x));
})


//Part 3 using async and await..

async function asyncResolve() {
    try {
        var addr = await promisify(dns.resolve4)('www.mum.edu');


        console.log(addr);

    } catch  {
        console.log("error");
    }
}
asyncResolve();