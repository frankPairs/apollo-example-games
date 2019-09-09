import { useMutation } from '@apollo/react-hooks';

import { UPDATE_GAME, CREATE_GAME, GET_GAMES, GameBasicInfo } from '../../../storeDomains';

export function useUpdateGame() {
  const [updateGameMutate] = useMutation(UPDATE_GAME);

  function updateGame(input, gameId) {
    updateGameMutate({
      variables: { input, gameId },
      optimisticResponse: {
        __typename: 'Mutation',
        updateGame: {
          __typename: 'Game',
          ...input,
          id: gameId,
        },
      },
      update: (store, { data: { updateGame: newGame } }) => {
        try {
          store.writeFragment({
            id: newGame.id,
            fragment: GameBasicInfo,
            fragmentName: 'GameBasicInfo',
            data: newGame,
          });
        } catch (err) {}
      },
    });
  }

  return [updateGame];
}

export function useCreateGame() {
  const [createGameMutate] = useMutation(CREATE_GAME);

  function createGame(input) {
    createGameMutate({
      variables: { input },
      optimisticResponse: {
        __typename: 'Mutation',
        createGame: {
          __typename: 'Game',
          ...input,
        },
      },
      update: (store, { data: { createGame: newGame } }) => {
        try {
          const response = store.readQuery({ query: GET_GAMES });

          response.games.push(newGame);

          store.writeQuery({ query: GET_GAMES, data: response });
        } catch (err) {}
      },
    });
  }

  return [createGame];
}
