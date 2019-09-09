import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { mergeDeepWith, reduce, curry, assoc } from 'ramda';
import { HttpLink } from 'apollo-link-http';

import { matchResolvers } from './matches';
import { userResolvers } from './users';

const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      User: (parent, { userId }, { getCacheKey }) => getCacheKey({ __typename: 'User', id: userId }),
      Game: (parent, { gameId }, { getCacheKey }) => getCacheKey({ __typename: 'Game', id: gameId }),
      Match: (parent, { matchId }, { getCacheKey }) => getCacheKey({ __typename: 'Match', id: matchId }),
    },
  },
});
const resolvers = [matchResolvers, userResolvers];
const link = new HttpLink({
  uri: 'http://localhost:4000/',
});
const apolloClient = new ApolloClient({
  cache,
  resolvers: reduce(curry(mergeDeepWith)(assoc), {}, resolvers),
  link,
});

export { apolloClient, cache };
