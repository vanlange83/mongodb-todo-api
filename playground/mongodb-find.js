//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todo').find({
    //     _id: new ObjectID('5c72eff445deff1428331e92')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined, 1));

    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name:"vaughn"}).toArray().then((docs) => {
        console.log(`Todos:`);
         console.log(JSON.stringify(docs,undefined, 1));
       
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //db.close();
});


//To open Mongo db database
//Program Files\MongoDB\Server\4.0\bin>mongod.exe --dbpath="c:\data\db"

//To open Mongo db database [command line option 1]:
//Program Files\MongoDB\Server\4.0\bin>mongo.exe
// [using ROBOMON GUI option 2]:
//Open robomon on taskbar