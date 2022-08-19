const db = {
  users: [
    { id: 1, name: 'John Doe', email: 'johnD@gmail.com' },
  ]
}

const list = async (table) => {
  return db[table];
}
const get = async (table, id) => {
  let collection = await list(table);
  return collection.filter(item => item.id === id)[0] || null;
  
}
const upsert = async (table, data) => {
  await db[collection].push(data);
}
const remove = async (table, id) => {
  return await true;
}

module.exports = {
    list,
    get,
    upsert,
    remove
}