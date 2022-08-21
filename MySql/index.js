require('dotenv').config()
const express = require('express');
const { mysqlService } = require('../config.js');
const router = require('./mysqlNetwork.js');

const app = express();

app.use(express.json());


//Rutas
app.use('/api', router);

app.listen(mysqlService.port, () => {
    console.log(`Server running on port ${mysqlService.port}`);
});
