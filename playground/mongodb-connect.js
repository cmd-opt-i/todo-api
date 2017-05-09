const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'something to do', 
  //   completed: false,
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // insert new doc into users (name, age, location)

  // db.collection('Users').insertOne({
  //   name: 'Irving Barajas',
  //   age: 24,
  //   location: 'La Habra',
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user');
  //   }

  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  db.close();
});