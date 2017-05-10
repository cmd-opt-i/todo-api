const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

// Todo.remove({}).then((doc) => {
//   console.log(doc);
// });

// Todo.findOneAndRemove({text: "something"}).then((doc) => {
//   console.log(doc);
// });

Todo.findByIdAndRemove('someID').then((todo) => {
  console.log(todo)
});