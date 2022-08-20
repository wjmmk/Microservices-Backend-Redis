const api = {
    port: process.env.PORT || 3000
}

const jwt = {
    secret: process.env.JWT_SECRET_KEY || 'notasecret!'
}
module.exports = { api, jwt };