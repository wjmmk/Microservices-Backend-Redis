//const storeDB = require('../../../storeDB/dummy');
//const storeDB = require('../../../storeDB/mysql');
const storeDB = require('../../../storeDB/remoteMysql');
const userController = require('./userController');

module.exports =  userController(storeDB);//Permite inyectar la DB dentro del controlador.