const uuidv4 = require('uuid/v4');

function repository(list) {
  return {
    findAll({ pagination }) {
      return Promise.resolve(list);
    },
    findById(id) {
      return Promise.resolve(list.find(item => item.id === id));
    },
    create(newItem) {
      const itemCreated = { ...newItem, id: uuidv4() };
      list.push(itemCreated);
      return Promise.resolve(itemCreated);
    },
    update(newItem, id) {
      const index = list.findIndex(item => item.id === id);
      const item = list[index];
      const itemUpdated = { ...item, ...newItem };

      list.splice(index, 1, itemUpdated);

      return Promise.resolve(itemUpdated);
    },
    remove(id) {
      const index = list.findIndex(item => item.id === id);
      const itemRemoved = list[index];

      list.splice(index, 1);

      return Promise.resolve(itemRemoved);
    }
  };
}

module.exports = repository;
