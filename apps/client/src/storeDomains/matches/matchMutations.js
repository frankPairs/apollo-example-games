import gql from 'graphql-tag';

import { MatchBasicInfo } from './matchFragments';

export const CREATE_MATCH = gql`
  mutation CreateMatch($input: CreateMatchInput!) {
    createMatch(input: $input) {
      ...MatchBasicInfo
    }
  }
  ${MatchBasicInfo}
`;

export const UPDATE_MATCH = gql`
  mutation UpdateMatch($input: UpdateMatchInput!, $matchId: ID!) {
    updateMatch(input: $input, matchId: $matchId) {
      ...MatchBasicInfo
    }
  }
  ${MatchBasicInfo}
`;

export const REMOVE_MATCH = gql`
  mutation RemoveMatch($matchId: ID!) {
    removeMatch(matchId: $matchId) {
      id
    }
  }
`;
