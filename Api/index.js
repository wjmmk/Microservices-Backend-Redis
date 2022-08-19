const express =  require('express');
const config = require('../config');
const user = require('./components/user/network');

const app = express();

//Middleware
app.use(express.json());

// Rutas
app.use('/api/users', user);

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});

module.exports = app;