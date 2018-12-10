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
    res.set({ 'content-type': 'application/json' });

    //console.log(req.body);

    req.collection.insert(req.body);
    res.status(201).json({ "successfully saved": req.body });

    // req.collection.find({}).toArray().then(x => {
    //     console.log(x);
   
});


app.get("/find", (req, res) => { 
    if (req.body) {
        var cursor = db.collection.find({ location: { $near: [req.body.currentLong, req.body.currentLat] } },
            { _id: 0 })
            .limit(3);
        cursor.toArray((err, docs) => res.json(docs));
    } else {
        res.end('Invalid data');
    }
});



app.listen(2333);