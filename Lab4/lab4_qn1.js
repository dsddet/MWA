const url = require('url');
const urlstring = url.parse("http://localhost:4000/?url=path/to/my/file.txt",true);


console.log(urlstring)

