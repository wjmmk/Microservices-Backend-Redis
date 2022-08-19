const express = require('express');
const response = require('../../../Network/response');
const Controller = require('./index');


const router = express.Router();


router.get('/', (req, res) => {
    try {
      Controller.list()
         .then((resultUsers) => response.success(req, res, resultUsers, 200))
    } catch (error) {
        response.error(req, res, error.message, 500, 'Error inesperado')
    }
})

router.get('/:id', (req, res) => {
   try {
      Controller.get(req.params.id)
      .then((resultUser) => response.success(req, res, resultUser, 200))
   } catch (error) {
      response.error(req, res, error.message, 500, 'Error inesperado')
   }   
})

router.post('/', (req, res) => {
    try {
         Controller.upsert(req.body)
            .then((resultUser) => response.success(req, res, resultUser, 201))
    } catch (error) {
        response.error(req, res, error.message, 500, 'Error inesperado')
    }
})

router.put('/:id', (req, res) => {
    try {
        Controller.upsert(req.body)
            .then((resultUser) => response.success(req, res, resultUser, 200))
    } catch (error) {
        response.error(req, res, error.message, 500, 'Error inesperado')
    }
})

router.delete('/:id', (req, res) => {
    try {
        Controller.remove(req.params.id)
            .then((resultUser) => response.success(req, res, resultUser, 200))
    } catch (error) {
        response.error(req, res, error.message, 500, 'Error inesperado')
    }
})

module.exports = router;