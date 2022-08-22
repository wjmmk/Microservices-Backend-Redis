const cacheRedis = require('redis');

const { redis } = require('../config');

const client = cacheRedis.createClient({
    legacyMode: true,
    host: redis.host,
    port: redis.port,
    password: redis.password,
    db: redis.database,
});

async function list(table) {
    return new Promise((resolve, reject) => {
        client.get(table, async (err, data) => {
            if (err) return reject(err);
            
            let res = data || null;
            if (data) {
                res = JSON.stringify(data);
            }
            resolve(res);await client.connect();
        });
    }); 
}

function get(table, id) {
    //
}

async function upsert(table, data) {
    let key = table;
    if (data && data.id) {
        key = key + '_' + data.id;
    }

    await client.setex(key, 10, JSON.stringify(data));
    return true;
}


module.exports = {
    list,
    get,
    upsert,
};