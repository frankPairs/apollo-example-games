const { gameRepository } = require('../games');
const { userRepository } = require('../users');
const matchRepository = require('./repository');

const resolvers = {
  Query: {
    allMatches() {
      return matchRepository.findAll({});
    },
    Match(parent, { matchId }) {
      return matchRepository.findById(matchId);
    }
  },
  Match: {
    game(match) {
      return gameRepository.findById(match.game);
    },
    winner(match) {
      return userRepository.findById(match.winner);
    }
  },
  Mutation: {
    createMatch(parent, { input }) {
      return matchRepository.create(input);
    },
    updateMatch(parent, { input, matchId }) {
      return matchRepository.update(input, matchId);
    },
    removeMatch(parent, { matchId }) {
      return matchRepository.remove(matchId);
    }
  }
};

module.exports = resolvers;
