const { v4: uuidv4 } = require('uuid');
const auth = require('../auth');

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
    
    const upsert = async (data) => {
        const user = { 
            username: data.username,
            password: data.password,
        }

        if (parseInt(data.id)) {
            user.id = parseInt(data.id);
        } else {
            user.id = parseInt(uuidv4());
        }

        if (data.password || data.username) {
            await auth.upsert({
                id: parseInt(user.id),
                username: user.username,
                password: user.password
            })
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