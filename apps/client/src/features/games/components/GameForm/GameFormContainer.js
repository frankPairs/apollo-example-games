import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useLazyQuery } from '@apollo/react-hooks';
import uuidv4 from 'uuid/v4';

import { useUpdateGame, useCreateGame } from '../../hooks';
import { GET_GAME } from '../../../../storeDomains';
import GameForm from '../GameForm/GameForm';

function GameUpdateFormContainer({ match, history }) {
  const gameId = match.params.id;
  const [gameForm, setGameForm] = useState({});
  const [getGame, responseFromGetGame] = useLazyQuery(GET_GAME, {
    variables: { gameId },
  });
  const [updateGame] = useUpdateGame();
  const [createGame] = useCreateGame();

  useEffect(() => {
    const { data } = responseFromGetGame;

    if (data && data.game) {
      setGameForm(data.game);
    }
  }, [responseFromGetGame]);

  useEffect(() => {
    if (gameId) {
      getGame();
    }
  }, [gameId, getGame]);

  function handleChange(evt) {
    const {
      target: { name, value },
    } = evt;

    setGameForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    if (gameId) {
      updateGame(
        {
          name: gameForm.name,
          playingTime: gameForm.playingTime,
          players: gameForm.players,
          complexity: Number(gameForm.complexity),
        },
        gameId
      );
    } else {
      createGame({
        ...gameForm,
        id: uuidv4(),
        complexity: Number(gameForm.complexity),
      });
    }

    history.push('/games');
    evt.preventDefault();
  }

  return (
    <GameForm
      loading={responseFromGetGame.loading}
      gameForm={gameForm}
      onInputChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

export default withRouter(GameUpdateFormContainer);
