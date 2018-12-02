var express = require('express');
var path = require('path');
var logger = require('morgan');
var axios = require('axios');
var app = express();

app.set('x-powered-by', false);
app.set('trust proxy', true);
app.set('strict routing', true);
app.set('case sensitive routing', true);

// Lab5 using Async/await
app.get('/user', (req, res) => {
    res.setHeader('Content-Type', "application/json");

    async function getUsers() {
        let answer;
        try {
            answer = await axios.get('https://randomuser.me/api/?results=10');
            res.end(JSON.stringify(answer.data.results));
        }
        catch{
            console.log("errors");
        }
    };
    getUsers();
});

app.listen(3000);

