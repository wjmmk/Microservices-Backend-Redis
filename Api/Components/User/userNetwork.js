const express = require('express');
const secure = require('./secure')
const response = require('../../../Network/response');
const Controller = require('./index');


const router = express.Router();


// Routes
router.get('/', list)
router.get('/:id', get);
router.post('/', upsert);
router.put('/', secure('update'), upsert);

// Internal functions
function list(req, res) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        // Puedes gestionar los Errores en cada ruta como en este ejemplo Ó.
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
    
}

function get(req, res, next) {
    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        // Utilizar el método (next) que traen los Middlewares para gestionar los Errores.
        .catch(next);
    
}

function upsert(req, res, next) {
    Controller.upsert(req.body)
        .then((user) => {
            response.success(req, res, user, 201);
        })
        // Utilizar el método (next) que traen los Middlewares para gestionar los Errores.
        .catch(next);
    
}

module.exports = router;