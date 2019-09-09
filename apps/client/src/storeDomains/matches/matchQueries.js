import gql from 'graphql-tag';

import { MatchBasicInfo } from './matchFragments';

export const GET_MATCHES = gql`
  query GetMatches {
    matches: allMatches {
      ...MatchBasicInfo
    }
  }
  ${MatchBasicInfo}
`;

export const GET_MATCH = gql`
  query GetMatch($matchId: ID!) {
    match: Match(matchId: $matchId) {
      ...MatchBasicInfo
    }
  }
  ${MatchBasicInfo}
`;
