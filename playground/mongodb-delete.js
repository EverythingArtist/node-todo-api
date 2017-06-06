// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
  return console.log('unable to connect to mongodb server')
  }
  console.log('Connected to Mongodb server');
// delete many
// db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) =>{
//   console.log(result);
// });

//delete one
// db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) =>{
//   console.log(result);
// });
//findoneanddelete
// db.collection('Todos').findOneAndDelete( {completed: false}).then((result) =>{
//   console.log(result);
// })

// //delete many
// db.collection('Users').deleteMany({name: 'Aishwarya'}).then((result) =>{
//   console.log(result);
// });

// db.collection('Users').deleteMany({name: 'Aishwarya'}).then((result) =>{
//   console.log(result);
// });

db.collection('Users').find().toArray().then((docs) =>{
  console.log(docs);
})

db.collection('Users').findOneAndDelete({ _id: new ObjectID("5936bacaea07ae45313dc28e") }).then((result) =>{
  console.log(result);
})


  db.close();
});
