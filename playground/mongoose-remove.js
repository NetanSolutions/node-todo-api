const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*Todo.remove({}).then((result) => {
  console.log(result);
});*/

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5b57635bdc330056085c856d'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5b576346dc330056085c856c').then((todo) => {
  console.log(todo);
});
