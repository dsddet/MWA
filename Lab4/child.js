const fs = require("fs");
const path = require("path");

const fileData = fs.createReadStream(path.join(__dirname, "words.txt"), 'utf8');

process.on("message", (x) => {
    console.log(`Message received= ${x}`);
    fileData.on('data', (x) => {
        process.send(x);
    })
})


