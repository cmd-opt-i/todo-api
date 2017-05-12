const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwt.sign(data, 'salt');
console.log('token: ', token);

var decoded = jwt.verify(token, 'salt');
console.log('decoded: ', decoded);
