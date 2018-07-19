//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // delete many
  /*db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  });*/

  /*db.collection('Users').deleteMany({name: 'Paul'}).then((result) => {
    console.log(result);
  });*/

  // delete one
  /*db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  });*/

  // find one and delete
  /*db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
    console.log(result);
  });*/

  db.collection('Users').findOneAndDelete({_id: ObjectID('5b505e4bd19a3501b054f25d')}).then((result) => {
    console.log(result);
  });

  //db.close();
});
