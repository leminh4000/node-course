// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const id= new ObjectID();
console.log(id);
console.log(id.getTimestamp());

const connectionURL = 'mongodb://192.168.1.126:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    console.log('Connected correctly')
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Minh',
    //     age: 1,
    // }, (error, result)=>{
    //     if (error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops);
    // })
    // db.collection('users').insertMany([{
    //     name: 'Minh',
    //     age: 1,
    // }, {
    //     name: 'Pitt',
    //     age: 10,
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops);
    // })

    db.collection('users').findOne({_id: new ObjectID("637c6ab5df50668a2dec8061")}, (error, user) => {
        if (error){
            return console.log('Unable to find user')
        }
        console.log(user);
    })
    // db.collection('users').find({age: 1}).toArray((error, users) => {
        
    //     console.log(users);
    // })
    // db.collection('users').find({age: 1}).count((error, count) => {
        
    //     console.log(count);
    // })

    // db.collection('users').deleteOne({_id: new ObjectID("637c6ab5df50668a2dec8061")}).then((result) => {
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })
    
    // db.collection('users').updateMany({age: 1}, {
    //     $set:{
    //         age:100,
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })

})