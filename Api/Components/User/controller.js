const uuidv4 = require('uuid');

const TABLE = 'users';

module.exports = (injectedStore) => {

    let store = injectedStore;
    if (!store) {
        store = require('../../../storeDB/dummy.js');
    }

    const list = () => {
        return store.list(TABLE);
    }
    
    const get = (id) => {
        return store.get(TABLE, parseInt(id));//parseInt(id) para que el id sea un entero
    }
    
    const upsert = (data) => {
        const user = { name: data.name};
        if (data.id) {
            user.id = parseInt(data.id);
        } else {
            user.id = uuidv4();
        }
        return store.upsert(TABLE, data);
    }
    
    const remove = (TABLE, id) => {
        return store.remove(TABLE, id);
    }
    
    return {
        list,
        get,
        upsert,
        remove
    }
}