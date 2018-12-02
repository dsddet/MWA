var express = require('express');
var path = require('path');
var logger = require('morgan');
var axios = require('axios');
var app = express();

app.set('x-powered-by', false);
app.set('trust proxy', true);
app.set('strict routing', true);
app.set('case sensitive routing', true);

// Lab5 using Observables
app.get('/user', (req, res) => {
    res.setHeader('Content-Type', "application/json");
    axios({ responseType: 'stream' }).get('https://randomuser.me/api/?results=5').then(function (response) {
        response.data.pipe(res);
    });

    app.listen(3000);

