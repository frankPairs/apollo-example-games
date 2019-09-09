import { useMutation } from '@apollo/react-hooks';

import {
  UPDATE_MATCH,
  CREATE_MATCH,
  GET_MATCHES,
  MatchBasicInfo,
  cache,
  GameName,
  UserName,
  matchResolvers,
} from '../../../storeDomains';

export function useUpdateMatch() {
  const [updateMatchMutate] = useMutation(UPDATE_MATCH);

  const updateMatch = (input, matchId) => {
    const winner = cache.readFragment({ id: `User:${input.winner}`, fragment: UserName });
    const game = cache.readFragment({ id: `Game:${input.game}`, fragment: GameName });

    updateMatchMutate({
      variables: { input, matchId },
      optimisticResponse: {
        __typename: 'Mutation',
        updateMatch: {
          __typename: 'Match',
          ...input,
          id: matchId,
          game,
          winner,
          date: new Date(input.date).toISOString(),
          dateFormatted: matchResolvers.Match.dateFormatted(input),
        },
      },
      update: (store, { data: { updateMatch: newMatch } }) => {
        const { id } = newMatch;

        try {
          store.writeFragment({
            id: `Match:${id}`,
            fragment: MatchBasicInfo,
            data: newMatch,
            fragmentName: 'MatchBasicInfo',
          });
        } catch (err) {
          console.log(err);
        }
      },
    });
  };

  return [updateMatch];
}

export function useCreateMatch() {
  const [createMatchMutate] = useMutation(CREATE_MATCH);

  const createMatch = input => {
    const winner = cache.readFragment({ id: `User:${input.winner}`, fragment: UserName });
    const game = cache.readFragment({ id: `Game:${input.game}`, fragment: GameName });

    createMatchMutate({
      variables: { input },
      optimisticResponse: {
        __typename: 'Mutation',
        createMatch: {
          __typename: 'Match',
          ...input,
          game,
          winner,
          date: input.date,
          dateFormatted: matchResolvers.Match.dateFormatted(input),
        },
      },
      update: (store, { data: { createMatch: newMatch } }) => {
        try {
          const response = store.readQuery({ query: GET_MATCHES });

          response.matches.push(newMatch);

          store.writeQuery({ query: GET_MATCHES, data: response });
        } catch (err) {
          console.log(err);
        }
      },
    });
  };

  return [createMatch];
}
