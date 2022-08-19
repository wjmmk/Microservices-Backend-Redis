
const TABLE = 'auth';

module.exports = (injectedStore) => {

    let store = injectedStore;
    if (!store) {
        store = require('../../../storeDB/dummy.js');
    }

    const login = async (username, password) => {
        const data = await store.query(TABLE, { username, password });
        if (data.password === password) {
            return 'token';
        } else {
            throw new Error('Usuario o contraseña incorrectos');
        }
    }

    const register = async (email, password) => {
        let user = await store.get(TABLE, email);
        if (user) {
            return false;
        }
        await store.upsert(TABLE, { email, password });
        return true;
    }
    
    
    const upsert = (data) => {
        const authData = { name: data.id};

        if (data.username) {
            authData.username = data.username;
        } 

        if (data.password) {
            authData.password = data.password;
        }

        return store.upsert(TABLE, data);
    }
    
    return { upsert, login, register };
}