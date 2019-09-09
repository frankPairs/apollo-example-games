const gql = require('graphql-tag');

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

  type Query {
    allUsers: [User]!
    User(userId: ID!): User!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(input: UpdateUserInput!, userId: ID!): User!
    removeUser(userId: ID!): User!
  }

  input CreateUserInput {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    email: String
  }
`;

module.exports = typeDefs;
