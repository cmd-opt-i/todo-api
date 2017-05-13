const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'abc123!';

// var data = {
//   id: 10
// };

// var token = jwt.sign(data, 'salt');
// console.log('token: ', token);

// var decoded = jwt.verify(token, 'salt');
// console.log('decoded: ', decoded);

