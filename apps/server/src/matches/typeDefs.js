const gql = require('graphql-tag');

const typeDefs = gql`
  type Match {
    id: ID!
    game: Game!
    date: String!
    winner: User!
  }

  extend type Query {
    allMatches: [Match]!
    Match(matchId: ID!): Match!
  }

  extend type Mutation {
    createMatch(input: CreateMatchInput!): Match!
    updateMatch(input: UpdateMatchInput!, matchId: ID!): Match!
    removeMatch(matchId: ID!): Match!
  }

  input CreateMatchInput {
    id: ID!
    game: ID!
    winner: ID!
    date: String!
  }

  input UpdateMatchInput {
    game: ID
    winner: ID
    date: String
  }
`;

module.exports = typeDefs;
