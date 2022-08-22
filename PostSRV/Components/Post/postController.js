const TABLE = 'posts';

module.exports = (injectedStore) => {

    let store = injectedStore;
    if (!store) {
        store = require('../../../storeDB/dummy.js');
    }

    const list = () => {
        return store.list(TABLE);
    }

    return {
        list,
    }
}  

