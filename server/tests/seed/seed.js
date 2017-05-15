const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');

const { Todo } = require('./../../models/todo');
const { User } = require('./../../models/users');

const userOneID = new ObjectID();
const userTwoID = new ObjectID();

const users = [{
  _id: userOneID,
  email: 'irving@barajas.com',
  password: '123abc!',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneID, access: 'auth'}, 'secretSalt').toString()
  }]
}, {
  _id: userTwoID,
  email: 'irving@barajas2.com',
  password: '123abc!2',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userTwoID, access: 'auth'}, 'secretSalt').toString()
  }]
}]

const todos = [{
  _id: new ObjectID(),
  text: 'first todo',
  _creator: userOneID
}, {
  _id: new ObjectID(),
  text: 'second todo',
  completed: true,
  completedAt: 333,
  _creator: userTwoID
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo]);
  }).then(() => done());
};

module.exports = { todos, populateTodos, users, populateUsers };
