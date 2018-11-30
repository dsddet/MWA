const server = require("http").createServer((req, res) => {
    res.setHeader("content-type", "application/json")
    res.end(JSON.stringify({ "name": "deusdedit" }))
}).listen(2333)