const db = {
  users: [
    { id: '1', name: 'John Doe', email: 'johnD@gmail.com' },
  ]
}

const list = async (table) => {
  return db[table] || [];
}
const get = async (table, id) => {
  let collection = await list(table);
  return collection.filter(item => item.id === id)[0] || null;
  
}
const upsert = (table, data) => {
  if(!db[table]){
    db[table] = [];
  }
  db[table].push(data);
  console.log(db);
}

const query = async (table, consult) => {
  let collection = await list(table);
  let keys = Object.keys(consult);
  let key = keys[0];
  return collection.filter(item => item[key] === consult[key])[0] || null;
}

const remove = async (table, id) => {
  return await true;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
    query
}