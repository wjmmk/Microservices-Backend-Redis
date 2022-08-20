//const storeDB = require('../../../storeDB/dummy');
const storeDB = require('../../../storeDB/mysql');
const userController = require('./userController');

module.exports = userController(storeDB);//Permite inyectar la DB dentro del controlador.