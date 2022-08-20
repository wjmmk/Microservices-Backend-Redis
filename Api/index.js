require('dotenv').config()
const express =  require('express');
const { api } = require('../config.js');
const user = require('./Components/User/userNetwork');
const auth = require('./Components/auth/authNetwork');
const errors = require('../Network/Errors');

const app = express();

//Middleware
app.use(express.json());

// Rutas
app.use('/api/users', user);
app.use('/api/auth', auth);


// Error Handler
app.use(errors);
app.listen(api.port, () => {
    console.log(`Server running on port ${api.port}`);
});

module.exports = app;