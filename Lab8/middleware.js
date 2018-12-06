const mongoClient = require('mongodb').MongoClient;
//const express = require('express');



module.exports = function () {
    const client = new mongoClient('mongodb://localhost:27017', { useNewUrlParser: true });

    return (req, res, next) => {
        client.connect(error => {
            if (error) { console.log(error) }
    

            req.collection = client.db('lab8').collection('nearby');
            return next();
        })
    }
}