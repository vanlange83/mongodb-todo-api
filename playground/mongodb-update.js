//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({_id: new ObjectID('5c75aa2bf88a4f10b03e2eb2')},
        {$inc: {age: 1}}, {returnOriginal:false}).then((result) => {
            console.log(result);
        })
    //db.close();
});


//To open Mongo db database
//Program Files\MongoDB\Server\4.0\bin>mongod.exe --dbpath="c:\data\db"

//To open Mongo db database [command line option 1]:
//Program Files\MongoDB\Server\4.0\bin>mongo.exe
// [using ROBOMON GUI option 2]:
//Open robomon on taskbar