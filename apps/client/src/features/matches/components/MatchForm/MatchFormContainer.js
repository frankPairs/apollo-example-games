import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useLazyQuery } from '@apollo/react-hooks';
import uuidv4 from 'uuid/v4';

import { useUpdateMatch, useCreateMatch } from '../../hooks';
import { GET_MATCH } from '../../../../storeDomains';
import MatchForm from '../MatchForm/MatchForm';

function MatchUpdateFormContainer({ match, history }) {
  const matchId = match.params.id;
  const [matchForm, setMatchForm] = useState({});
  const [getMatch, responseFromGetMatch] = useLazyQuery(GET_MATCH, {
    variables: { matchId },
  });
  const [updateMatch] = useUpdateMatch();
  const [createMatch] = useCreateMatch();

  useEffect(() => {
    const { data } = responseFromGetMatch;

    if (data && data.match) {
      setMatchForm({
        ...data.match,
        game: data.match.game.id,
        winner: data.match.winner.id,
      });
    }
  }, [responseFromGetMatch]);

  useEffect(() => {
    if (matchId) {
      getMatch();
    }
  }, [matchId, getMatch]);

  function handleChange(evt) {
    const {
      target: { name, value },
    } = evt;

    setMatchForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleDateChange(date) {
    setMatchForm(prevState => ({
      ...prevState,
      date,
    }));
  }

  async function handleSubmit(evt) {
    if (matchId) {
      updateMatch(
        {
          date: matchForm.date,
          game: matchForm.game,
          winner: matchForm.winner,
        },
        matchId
      );
    } else {
      createMatch({
        ...matchForm,
        id: uuidv4(),
      });
    }

    history.push('/matches');
    evt.preventDefault();
  }

  return (
    <MatchForm
      loading={responseFromGetMatch.loading}
      matchForm={matchForm}
      onInputChange={handleChange}
      onDateChange={handleDateChange}
      onSubmit={handleSubmit}
    />
  );
}

export default withRouter(MatchUpdateFormContainer);
