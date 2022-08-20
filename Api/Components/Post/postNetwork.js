const express = require('express');
//const secure = require('./secure')
const response = require('../../../Network/response');
const Controller = require('./index');


const router = express.Router();


// Routes
router.get('/', list)


// Internal functions
function list(req, res, next) {
    Controller.list()
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(next);// Puedes gestionar los Errores en cada ruta como en este ejemplo Ó.
    
}

module.exports = router;