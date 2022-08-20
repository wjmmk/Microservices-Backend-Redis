const api = {
    port: process.env.PORT || 3000
}

const jwt = {
    secret: process.env.JWT_SECRET_KEY || 'notasecret!'
}

const mysql = {
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DB || 'test'
}

module.exports = { api, jwt, mysql };