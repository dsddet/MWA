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


const express = require('express');
app = express()
app.listen(3333,()=>console.log("working new project"));
