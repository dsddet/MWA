const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const dbConn = require('./middleware')();
const jsonparser = express.json();
const morgan = require('morgan')("default");

const app = express();

app.use(dbConn);
app.use(jsonparser);
app.use(morgan)



app.post('/places', (req, res) => {
    res.set({ 'content-type': 'application/text' });

    //console.log(req.body);

    //req.collection.insert(req.body);

    req.collection.find({}).toArray().then(x => {
        console.log(x);
    });   

    res.end();
});


app.get("/find", (req, res) => { 
    res.end('found');
});



app.listen(2333);