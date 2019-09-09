const gameRepository = require('./repository');

const resolvers = {
  Query: {
    allGames() {
      return gameRepository.findAll({});
    },
    Game(parent, { gameId }) {
      return gameRepository.findById(gameId);
    }
  },
  Mutation: {
    createGame(parent, { input }) {
      return gameRepository.create(input);
    },
    updateGame(parent, { input, gameId }) {
      return gameRepository.update(input, gameId);
    },
    removeGame(parent, { gameId }) {
      return gameRepository.remove(gameId);
    }
  }
};

module.exports = resolvers;
