const jwt = require('jsonwebtoken');

const sign = (data) => {
    return jwt.sign(data, 'secret');
}

const verify = (token, secret) => {
    return jwt.verify(token, secret);
}

module.exports = {  sign, verify };