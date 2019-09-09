import gql from 'graphql-tag';

export const UserBasicInfo = gql`
  fragment UserBasicInfo on User {
    id
    firstName
    lastName
    fullName @client
    email
  }
`;

export const UserName = gql`
  fragment UserName on User {
    id
    firstName
    lastName
    fullName @client
  }
`;
