const api = {
    port: process.env.PORT || 3000
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
    /*port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '9783238',
    database: process.env.MYSQL_DB || 'test' */
}

module.exports = { api, jwt, mysql, mysqlService };