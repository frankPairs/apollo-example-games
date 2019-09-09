import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_GAMES_NAMES } from '../../../../storeDomains';

import GameSelectField from './GameSelectField';

function GameSelectFieldContainer(props) {
  const {
    data: { games = [] },
  } = useQuery(GET_GAMES_NAMES);

  return <GameSelectField games={games} {...props} />;
}

export default GameSelectFieldContainer;
