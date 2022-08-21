const bcrypt = require('bcrypt');
const auth = require('../../../authToken');

const TABLE = 'auths';

module.exports = (injectedStore) => {

    let store = injectedStore;
    if (!store) {
        store = require('../../../storeDB/mysql.js');
    }

    const login = async (username, password) => {
        const data = await store.query(TABLE, { username});

        return bcrypt.compare(password, data.password)
            .then(iqualKey => {
                if (iqualKey === true) {
                    return auth.sign({...data});// Se crea el token
                } else {
                    throw new Error('Usuario o contraseña incorrectos');
                }
            })

    }

    const register = async (email, password) => {
        let user = await store.get(TABLE, email);
        if (user) {
            return false;
        }
        await store.upsert(TABLE, { email, password });
        return true;
    }
    
    
    const upsert = async (data) => {
        const authData = { id: data.id};

        if (data.username) {
            authData.username = data.username;
        } 

        if (data.password) {
            authData.password = await bcrypt.hashSync(data.password, 10);
        }

        return store.upsert(TABLE, authData);
    }
    
    return { upsert, login, register };
}