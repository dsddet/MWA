// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [...intro] = "deusdedit";


// // var [one,,,four,...intro] = array;

// console.log(intro);
// // console.log(one);
// // console.log(four);


//const mongoClient = require('mongodb').MongoClient;

// const client = new mongoClient("mongodb://localhost:27017");

// client.connect((error) => {

//     if (error) { console.log(error) };

//     console.log(

//         client.db('Labs').collection('records').findOne());


// });

// mongoClient.connect("mongodb://localhost:27017", {useNewUrlParser:true}).then(client => {
//     client.db('Scratch').collection('Info').find({1}).toArray().then(response => console.log(response));
// }).catch(error=>console.log(error));

const mongoClient = require('mongodb').MongoClient;

module.exports = function returnConnection() {
    let client = new mongoClient("mongodb://localhost:27017", { useNewUrlParser: true })
    let db = client.connect('dbname')

    return function getConnection(req, res, next) {
        req.dbconn = db;
        next();
    }
}





