const remote = require('./remoteConstructor');
const { cacheService } = require('../config');

module.exports = new remote(cacheService.host, cacheService.port);