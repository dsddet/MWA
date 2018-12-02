const server = require('http');
const fs = require('fs');
const path = require('path');

//Method 1: First option synchronously
server.createServer((request, response) => {
    var file = fs.readFileSync(path.join(__dirname, 'words.txt'), 'utf8');

    response.end(file);

}).listen(2332);

//Method 2: Reading asynchronously using stream.
server.createServer((request, response) => {

    let contents = fs.createReadStream(path.join(__dirname, 'words.txt'), 'utf8').pipe(response);

}).listen(900);


//+++++++ Observations++++++++++
/**
 * Method 1 uses alot of computer memory while method 2 uses the same memory at every request.
 */