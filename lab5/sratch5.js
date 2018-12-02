// const express = require("express");
// var app = express()
// const port = 2343;


// app.get('*', (request, response) => {
//     response.status(200);
//     response.set("content-type", 'text/html');
//     response.send('hi');
//     response.end();
// });

// app.listen(port, () => console.log(`Server running on port ${port}`));


/**
 * dependencies
 * init
 * setup
 * middleware
 * routes
 * errorhandling
 * bootup
 * 
 * 
 * app.set('env','development')
 * app.set('trust proxy',true) or app.enable('trust proxy')
 * app.enable('case senstive routing')
 * app.enable("strict routing")
 * app.set("x powered by","false")
 * app.set("query parser",'simple' or 'false')
 * 
 * 
 */

// function Make(name) {
//     this.name = name;
// }

// var made = new Make("deus");

// // console.log(__dirname)

// const obj = { one: 1, two: 2, three: 3 };

// (Object.keys(obj).includes("four")) ? console.log("Available") : obj.four = 4;


// console.log(obj);

// function myemit() {
//     this.events = {};

//     myemit.prototype.on = (event, handler) => {
//         this.events[event] = this.events[event]||[]
//         this.events[event].push(handler);
//     }

//     myemit.prototype.emit = (event) => {
//         console.log(this.events)

//         Object.keys(this.events).includes(event) ? this.events[event].forEach(x => { x(); }) : console.log("no event");
//     }
// }

// var emitter = new myemit();

// emitter.on("call", (x) => console.log("called"));
// emitter.on("call", (x) => console.log("called"));
// emitter.on("call", (x) => console.log("called"));
// emitter.on("call", (x) => console.log("called"));
// emitter.on("call", (x) => console.log("called"));
// emitter.on("call", (x) => console.log("called"));

// emitter.emit("call")

// const eventEmitter = require("events");

// class Student extends eventEmitter {
//     constructor() {
//         super();
//         this.message = "You are to be visited"
//     }

//     requestVisitation() {
//         this.emit("ask", this.message)
//     }
// }

// let comproStudent = new Student();

// comproStudent.on("ask", (x) => { console.log(x) });

// comproStudent.requestVisitation();


// const fs = require('fs');
// const path = require('path');

// function createfile(word, number) {
//     for (let i = 0; i < number; i++) {
//         fs.writeFile(word + '.txt', word, (x) => { if (x) throw x; console.log("done"); })
//     }
// }

// createfile("jesus", 5);


// var fs = require('fs');
// var path = require('path');

// fs.readFile(path.join(__dirname, 'words.txt'), 'utf8', (err, data) => {
//     setTimeout(() => console.log("Settimeout"), 0);
//     setImmediate(() => console.log("set immediate"));
//     process.nextTick(() => console.log("next tick"));
// });

// setImmediate(() => {
//     setTimeout(() => console.log("Settimeout"), 0);
//     setImmediate(() => console.log("set immediate"));
//     process.nextTick(() => console.log("next tick"));
// })

// const fs = require('fs');
// const path = require('path');
// const zip = require('zlib').createGzip();

// const read = fs.createReadStream(path.join(__dirname, 'stars.txt'), 'utf8');
// const dest = fs.createWriteStream(path.join(__dirname, 'stars.txt.gz'));

// read.pipe(zip).pipe(dest);


// require('http').createServer((request, response) => {
//     response.setHeader('content-type', 'application/json');
//     response.end(JSON.stringify({ name: 'deusdedit', age: 30 }))
// }).listen(4550, () => { console.log("Server started on port 4550") });

// const { Observable } = require("rxjs");

// const obs$ = Observable.create((observer) => {
//     observer.next("Starting");


// });

// obs$.subscribe((x) => console.log(x));

// const { from,Subject,BehaviorSubject } = require('rxjs');
// const { map, filter } = require('rxjs/operators');

// const banned2 = ["house", "nice"]


// const filter2 = function (ban, word) {

//     filt = function (arr, word) {

//         var answer = "";

//         word.split(" ").map(x => {

//             arr.map(y => {
//                 if (y == x) {
//                     x = "***";
//                 }

//             })
//             answer = answer + " " + x;
//         })

//         //console.log(answer);
//         return answer;

//         //setTimeout(()=>{return answer},5000)

//     }
//     return new Promise(function (resolve, reject) {
//         if (word) {
//             resolve(filt(ban, word));

//         }
//         else {
//             reject("Not working");
//         }
//     })
// };


// from(filter2(banned2, "This house is a good and nice")).subscribe(x => console.log(x));
// console.log("Working");

// var mysubject$ = new Subject();

// mysubject$.subscribe(x => console.log(x));

// mysubject$.next("Working");
// mysubject$.next("Working");
// mysubject$.next("Working");


// const { BehaviorSubject } = require('rxjs');

// const bsubject$ = new BehaviorSubject("Starting");

// bsubject$.subscribe(x => console.log(x));

// bsubject$.next("Next statement");


// const { Subject } = require('rxjs');


// const sub$ = new Subject();

// sub$.subscribe(x => x.res.end("Hello there"));

// require('http').createServer((req, res) => {
//     sub$.next({ req: req, res: res });
// }).listen(2332);

const server = require('http').createServer();

function longOperation() {
    let sum = 0;
    for (let i = 0; i < 1e10; i++) {
        sum += i;
    }

    return sum;
};

server.on('request', (req, res) => {
    // res.setHeader("content-type", "application/text");
    const answer = `The sum is ${longOperation()}`;
    res.end(answer);

});

server.listen(9909);

console.log("system ended");