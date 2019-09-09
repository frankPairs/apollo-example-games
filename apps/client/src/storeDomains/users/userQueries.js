import gql from 'graphql-tag';

import { UserBasicInfo, UserName } from './userFragments';

export const GET_USERS = gql`
  query GetUsers {
    users: allUsers {
      ...UserBasicInfo
    }
  }
  ${UserBasicInfo}
`;

export const GET_USERS_NAMES = gql`
  query GetUsers {
    users: allUsers {
      ...UserName
    }
  }
  ${UserName}
`;

export const GET_USER = gql`
  query GetUser($userId: ID!) {
    user: User(userId: $userId) {
      ...UserBasicInfo
    }
  }
  ${UserBasicInfo}
`;
