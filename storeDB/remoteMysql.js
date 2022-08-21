const remote = require('./remoteConstructor');
const {mysqlService} = require('../config');

module.exports = new remote(mysqlService.host, mysqlService.port);