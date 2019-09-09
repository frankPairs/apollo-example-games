const { GraphQLServer } = require('graphql-yoga');
const { mergeDeepWith, reduce, curry, assoc } = require('ramda');

const { userResolvers, userTypeDefs } = require('./users');
const { gameResolvers, gameTypeDefs } = require('./games');
const { matchResolvers, matchTypeDefs } = require('./matches');

const typeDefs = [userTypeDefs, gameTypeDefs, matchTypeDefs];
const resolvers = reduce(curry(mergeDeepWith)(assoc), {}, [
  userResolvers,
  gameResolvers,
  matchResolvers
]);

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(
  {
    playground: '/graphiql'
  },
  () => console.log('Server is running on localhost:4000')
);
