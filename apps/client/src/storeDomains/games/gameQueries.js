import gql from 'graphql-tag';

import { GameBasicInfo, GameName } from './gameFragments';

export const GET_GAMES = gql`
  query GetGames {
    games: allGames {
      ...GameBasicInfo
    }
  }
  ${GameBasicInfo}
`;

export const GET_GAMES_NAMES = gql`
  query GetGames {
    games: allGames {
      ...GameName
    }
  }
  ${GameName}
`;

export const GET_GAME = gql`
  query GetGame($gameId: ID!) {
    game: Game(gameId: $gameId) {
      ...GameBasicInfo
    }
  }
  ${GameBasicInfo}
`;
