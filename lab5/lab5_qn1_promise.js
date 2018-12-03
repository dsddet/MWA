var express = require('express');
var path = require('path');
var logger = require('morgan');
var axios = require('axios');
var app = express();

app.set('x-powered-by', false);
app.set('trust proxy', true);
app.set('strict routing', true);
app.set('case sensitive routing', true);

// Lab5 using promise
app.get('/user', (req, res) => {
    res.setHeader('Content-Type', "application/json");
    axios.get('https://randomuser.me/api/?results=10').then(x => {
        let data = x.data.results;
        res.end(JSON.stringify(data));
    }).catch(x => console.log("error"))
});

app.listen(3000);

