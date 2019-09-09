import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import produce from 'immer';

import { REMOVE_GAME, GET_GAMES } from '../../../../storeDomains';
import GameRow from './GameRow';

function GameRowContainer(props) {
  const [removeGame] = useMutation(REMOVE_GAME);

  function handleRemove() {
    const {
      game: { id: gameId },
    } = props;

    removeGame({
      variables: { gameId },
      optimisticResponse: {
        __typename: 'Mutation',
        removeGame: {
          __typename: 'Game',
          id: gameId,
        },
      },
      update: (cache, { data: { createGame } }) => {
        const { games } = cache.readQuery({ query: GET_GAMES });

        cache.writeQuery({
          query: GET_GAMES,
          data: {
            games: produce(games, draft => {
              const index = games.findIndex(game => game.id === gameId);
              draft.splice(index, 1);
            }),
          },
        });
      },
    });
  }

  return <GameRow {...props} onGameRemove={handleRemove} />;
}

export default GameRowContainer;
