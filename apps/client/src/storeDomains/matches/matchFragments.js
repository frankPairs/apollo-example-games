import gql from 'graphql-tag';

import { GameName } from '../games';
import { UserName } from '../users';

export const MatchBasicInfo = gql`
  fragment MatchBasicInfo on Match {
    id
    game {
      ...GameName
    }
    winner {
      ...UserName
    }
    date
    dateFormatted @client
  }
  ${GameName}
  ${UserName}
`;
