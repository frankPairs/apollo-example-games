import gql from 'graphql-tag';

import { GameBasicInfo } from './gameFragments';

export const CREATE_GAME = gql`
  mutation CreateGame($input: CreateGameInput!) {
    createGame(input: $input) {
      ...GameBasicInfo
    }
  }
  ${GameBasicInfo}
`;

export const UPDATE_GAME = gql`
  mutation UpdateGame($input: UpdateGameInput!, $gameId: ID!) {
    updateGame(input: $input, gameId: $gameId) {
      ...GameBasicInfo
    }
  }
  ${GameBasicInfo}
`;

export const REMOVE_GAME = gql`
  mutation RemoveGame($gameId: ID!) {
    removeGame(gameId: $gameId) {
      id
    }
  }
`;
