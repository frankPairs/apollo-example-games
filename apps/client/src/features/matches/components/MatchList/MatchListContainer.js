import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_MATCHES } from '../../../../storeDomains';
import MatchList from './MatchList';

function MatchListContainer() {
  const {
    data: { matches },
    ...rest
  } = useQuery(GET_MATCHES);

  return <MatchList {...rest} matches={matches} />;
}

export default MatchListContainer;
