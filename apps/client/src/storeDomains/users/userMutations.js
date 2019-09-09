import gql from 'graphql-tag';

import { UserBasicInfo } from './userFragments';

export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      ...UserBasicInfo
    }
  }
  ${UserBasicInfo}
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($input: UpdateUserInput!, $userId: ID!) {
    updateUser(input: $input, userId: $userId) {
      ...UserBasicInfo
    }
  }
  ${UserBasicInfo}
`;

export const REMOVE_USER = gql`
  mutation RemoveUser($userId: ID!) {
    removeUser(userId: $userId) {
      id
    }
  }
`;
