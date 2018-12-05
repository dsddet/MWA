const fs = require("fs");
const path = require("path");
const { Subject } = require("rxjs");
const http = require("http");
const { fork } = require("child_process");

const sub$ = new Subject();
sub$.subscribe((x) => {
    x.response.end(x.data);
});



const server = http.createServer((request, response) => {
    console.log(request.url)
    response.setHeader('content-type', 'text/html');

    const childprocess = fork(path.join(__dirname, 'child.js'));
    childprocess.send("read file");
    childprocess.on("message", (x) => {
        //response.pipe(x);
        sub$.next({ response: response, data: x })
    })
}).listen(4000);