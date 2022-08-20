const jwt = require('jsonwebtoken');
const config = require('../config');
const error = require('../Utils/errorUtil');

//const secret = process.env.SECRET_KEY || 'secret';
const secret = config.jwt.secret;

const sign = (data) => {
    return jwt.sign(data, secret);
}

const verify = (token) => {
    return jwt.verify(token, secret);
}

const check = {
    own: (req, owner) => {
       const decoded = decodeHeader(req);
       console.log(decoded);
       if (decoded.id !== owner) {
        throw error('You do not have permission to do this', 403);
       }
    }
}

function getToken(auth) {
    if(!auth) {
        throw error('No token provided', 401);
    }

    if(auth.indexOf('Bearer ') === -1) {
        throw error('Invalid token', 401); 
    }

    let token = auth.replace('Bearer ', '');
    return token;
}

const decodeHeader = (req) => {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;
    return decoded;
}
module.exports = {  sign, check };