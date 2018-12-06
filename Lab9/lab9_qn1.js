// const mongoClient = require('mongodb').MongoClient;

// const client = new mongoClient("mongodb://localhost:27017", { useNewUrlParser: true });

// client.connect(error => {
//     if (error) { console.log(error); }
    
//     //const dataPromise = client.db('lab8').collection('restuarants').aggregate([{$group:{_id:"$district"}}]).toArray();
//     const dataPromise = client.db('lab8').collection('restuarants').aggregate([{ $group: { _id: "$district" } }]).limit(1).toArray();

//     dataPromise.then(data => {
//         console.log(data);
//      });

// })
 

// const mongoClient = require('mongodb').MongoClient;


// mongoClient.connect("mongodb://localhost:27017", (error, conn) => {
//     if (error) {
//         console.log(error);
//     } 

    
    
//     conn.db('lab8').collection('restuarants').find({ "grades.score": 5 },{projection:{_id:0,name:1,"grades.score":1}}).limit(2).toArray().then(data => {
//         console.log(data); 
//     });

// });
