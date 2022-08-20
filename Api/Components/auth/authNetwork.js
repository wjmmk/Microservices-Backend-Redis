const express = require('express');
const response = require('../../../Network/response');
const Controller = require('./index');


const router = express.Router();

router.post('/login', (req, res) => {
    try {
      Controller.login(req.body.username, req.body.password)
         .then((token) => response.success(req, res, token, 200))
    } catch (error) {
        response.error(req, res, error.message, 403, 'Error al loguearse')
    }
});


module.exports = router;
