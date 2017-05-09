const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

var id = '59100bed077bbe021104c1c8';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }

//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }
  console.log('User by id', JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
})
