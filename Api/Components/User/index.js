const storeDB = require('../../../storeDB/dummy');
const Controller = require('./controller');

module.exports = Controller(storeDB);//Permite inyectar la DB dentro del controlador.