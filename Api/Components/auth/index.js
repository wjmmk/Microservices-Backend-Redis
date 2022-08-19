const storeDB = require('../../../storeDB/dummy');
const userController = require('./authController');

module.exports = userController(storeDB);//Permite inyectar la DB dentro del controlador.