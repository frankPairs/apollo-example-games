import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import produce from 'immer';

import { REMOVE_MATCH, GET_MATCHES } from '../../../../storeDomains';
import MatchRow from './MatchRow';

function MatchRowContainer(props) {
  const [removeMatch] = useMutation(REMOVE_MATCH);

  function handleRemove() {
    const {
      match: { id: matchId },
    } = props;

    removeMatch({
      variables: { matchId },
      optimisticResponse: {
        __typename: 'Mutation',
        removeMatch: {
          __typename: 'Match',
          id: matchId,
        },
      },
      update: (cache, { data: { createMatch } }) => {
        const { matches } = cache.readQuery({ query: GET_MATCHES });

        cache.writeQuery({
          query: GET_MATCHES,
          data: {
            matches: produce(matches, draft => {
              const index = matches.findIndex(match => match.id === matchId);
              draft.splice(index, 1);
            }),
          },
        });
      },
    });
  }

  return <MatchRow {...props} onMatchRemove={handleRemove} />;
}

export default MatchRowContainer;
