const api = {
    port: process.env.PORT || 3000
}

const post = {
    port: process.env.POST_PORT || 3002,
}

const jwt = {
    secret: process.env.JWT_SECRET_KEY || 'notasecret!'
}

const mysql = {
    host: process.env.MYSQL_HOST || 'remotemysql.com',
    user: process.env.MYSQL_USER || 'qzx5fj28RV',
    password: process.env.MYSQL_PASSWORD || 'Euim3r4lKk',
    database: process.env.MYSQL_DB || 'qzx5fj28RV'
}

const mysqlService = {
    port: process.env.MYSQL_SRV_PORT || 3001,
    host: process.env.MYSQL_SRV_HOST || 'localhost',
}

const cacheService = {
    port: process.env.CACHE_SRV_PORT || 3003,
    host: process.env.CACHE_SRV_HOST || 'localhost',

}

const redis = {
    host: process.env.REDIS_HOST || 'xxxxxxxxxxxxxxxxxxxxxxxx',
    port: process.env.REDIS_PORT || 'xxxx',
    password: process.env.REDIS_PASS || 'xxxxxxx',
    database: process.env.REDIS_DB || 'xxxxx'
}

const remoteDB = process.env.REMOTE_DB || false;

module.exports = { api, jwt, mysql, post, redis, mysqlService, cacheService, remoteDB };