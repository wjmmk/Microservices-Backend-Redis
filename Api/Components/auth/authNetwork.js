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
})

router.get('/:id', (req, res) => {
   try {
      Controller.get(req.params.id)
      .then((resultUser) => response.success(req, res, resultUser, 200))
   } catch (error) {
      response.error(req, res, error.message, 500, 'Error inesperado')
   }   
})


module.exports = router;
