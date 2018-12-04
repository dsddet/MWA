const express = require('express');
const mongoClient = require('mongodb').MongoClient;

module.exports = function returnConnection() {
    let dbPromise = mongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true }).then(conn => conn);

    return function getConnection(req, res, next) {
        req.dbconn = dbPromise;
        next();
    }
}
