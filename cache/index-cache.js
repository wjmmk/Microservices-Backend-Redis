require('dotenv').config()
const express = require('express');
const { cacheService } = require('../config.js');
const router = require('./cacheNetwork.js');

const app = express();

app.use(express.json());


//Rutas
app.use('/api', router);

app.listen(cacheService.port, () => {
    console.log(`Server DBMySql: running on port ${cacheService.port}`);
});
