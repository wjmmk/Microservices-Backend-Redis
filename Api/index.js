const express =  require('express');
const config = require('../config');
const auth = require('./Components/auth/authNetwork');
const user = require('./components/user/userNetwork');

const app = express();

//Middleware
app.use(express.json());

// Rutas
app.use('/api/users', user);
app.use('/api/auth', auth);

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});

module.exports = app;