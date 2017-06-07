// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
  return console.log('unable to connect to mongodb server')
  }
  console.log('Connected to Mongodb server');

//findOneandUpdate
// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID("5936b6f9ea07ae45313dc235")
// },{
//   $set:{
//     completed: true
//   }
// },{
//   returnOriginal: false
// }).then((result) =>{
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID("5936bad8ea07ae45313dc292")
}, {
  $set: {
     name: 'Aishwarya'
   },
$inc: {
  age: 1
}
},{
  returnOriginal: false
  }).then((result) =>{
  console.log(result);
})

  db.close();
});
