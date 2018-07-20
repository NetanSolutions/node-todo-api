const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '5b5200d47e67152604464e70';
var id = '5b5207a2dc330034b4945e64';

/*if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo by Id', todo);
}).catch((e) => console.log(e));*/

User.findById(id).then((user) => {
  if (!user) {
    return console.log ('User not found');
  }
  console.log('User by Id', user);
}).catch((e) => console.log(e));
