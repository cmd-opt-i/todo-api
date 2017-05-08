const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({ /* quering our db */
  //   _id: new ObjectID('590fda3aa0d18907232856cb') /* when trying to get an objectId from Mongo */
  // }).toArray().then((docs) => { /* returns a promise */
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => { /* returns the number of items in the db */
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find().count().then((count) => { /* returns the number of items in the db */
    console.log(`Users count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch Users', err);
  });

  db.collection('Users').find({
    name: 'luis'
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    return console.log('unable to find user', err);
  });

  // db.close();
});
