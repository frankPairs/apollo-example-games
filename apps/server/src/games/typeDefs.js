const gql = require('graphql-tag');

const typeDefs = gql`
  type Game {
    id: ID!
    name: String!
    playingTime: String!
    players: String!
    complexity: Float!
  }

  extend type Query {
    allGames: [Game]!
    Game(gameId: ID!): Game!
  }

  extend type Mutation {
    createGame(input: CreateGameInput!): Game!
    updateGame(input: UpdateGameInput!, gameId: ID!): Game!
    removeGame(gameId: ID!): Game!
  }

  input CreateGameInput {
    id: ID!
    name: String!
    playingTime: String!
    players: String!
    complexity: Float!
  }

  input UpdateGameInput {
    name: String
    playingTime: String
    players: String
    complexity: Float
  }
`;

module.exports = typeDefs;
