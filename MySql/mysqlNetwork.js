const express = require('express');
//const secure = require('./secure')
const response = require('../Network/response');
const storeDB = require('../storeDB/mysql');


const router = express.Router();


// Routes
router.get('/:table', list)
router.get('/:table/:id', get)
router.post('/:table', insert)
router.put('/:table', upsert)


// Internal functions
async function list(req, res) {
    const datos = await storeDB.list(req.params.table);
    response.success(req, res, datos, 200);
}

async function get(req, res, next) {
    const datos = await storeDB.get(req.params.table, req.params.id);
    response.success(req, res, datos, 200);
}

async function insert(req, res, next) {
    const datos = await storeDB.insert(req.params.table, req.body);
    response.success(req, res, datos, 200);
}

async function upsert(req, res, next) {
    const datos = await storeDB.upsert(req.params.table, req.body);
    response.success(req, res, datos, 200);
}


module.exports = router;