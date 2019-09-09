import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_GAMES } from '../../../../storeDomains';
import GameList from './GameList';

function GameListContainer() {
  const {
    data: { games },
    ...rest
  } = useQuery(GET_GAMES);

  return <GameList {...rest} games={games} />;
}

export default GameListContainer;
