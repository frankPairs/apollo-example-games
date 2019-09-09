import gql from 'graphql-tag';

export const GameBasicInfo = gql`
  fragment GameBasicInfo on Game {
    id
    name
    playingTime
    players
    complexity
  }
`;

export const GameName = gql`
  fragment GameName on Game {
    id
    name
  }
`;
