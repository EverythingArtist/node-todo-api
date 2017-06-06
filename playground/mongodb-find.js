// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
  return console.log('unable to connect to mongodb server')
  }
  console.log('Connected to Mongodb server');

// db.collection('Todos').find({
//   _id: new ObjectID("5935f2a6baaa00e25022b6a3") }).toArray().then((docs)=>{
//   console.log('todos');
//   console.log(JSON.stringify(docs,undefined,2));
// }, (err) =>{
//   console.log('enable to fetch todos');
// });
//
// db.collection('Todos').find().count().then((count)=>{
//   console.log(`todos count: ${count}`);
// }, (err) =>{
//   console.log('enable to fetch todos');
// });

db.collection('Users').find().toArray().then((docs)=>{
  console.log('todos');
  console.log(JSON.stringify(docs,undefined,2));
}, (err) =>{
  console.log('enable to fetch todos');
});

  db.close();
});
