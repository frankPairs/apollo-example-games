const userRepository = require('./repository');

const resolvers = {
  Query: {
    allUsers() {
      return userRepository.findAll({});
    },
    User(parent, { userId }) {
      return userRepository.findById(userId);
    }
  },
  Mutation: {
    createUser(parent, { input }) {
      return userRepository.create(input);
    },
    updateUser(parent, { input, userId }) {
      return userRepository.update(input, userId);
    },
    removeUser(parent, { userId }) {
      return userRepository.remove(userId);
    }
  }
};

module.exports = resolvers;
