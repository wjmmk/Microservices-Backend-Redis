const response = require('./Response');

const errors = () => {
    console.log('[Errors]', err);

    const message = err.message || 'Internal error';
    const status = err.statusCode || 500;

    response.error(req, res, message, status);

}

module.exports = errors;