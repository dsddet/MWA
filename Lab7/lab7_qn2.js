const dbConnection = require('./lab7_qn2_Middleware')();
const crypto = require('crypto');
const decipher = crypto.createDecipher('aes256', 'asaadsaad');
const express = require('express');
const mongoClient = require('mongodb').MongoClient;

let app = express();
app.listen(4000, () => console.log("Server running on 4000"));

app.use(dbConnection);

app.get('/secret', (req, res) => {
    res.set({ 'Content-Type': 'text/html' });

    answer = req.dbconn.
        then(x => x.db('Labs')
            .collection('lab7')
            .findOne({},
                (err, doc) => {
                    let cipher = doc.message;
                    let decrypted = decipher.update(cipher, 'hex', 'utf8');
                    decrypted += decipher.final('utf8');
                    res.end(decrypted);

                }));
});