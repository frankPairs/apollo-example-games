import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import './GameForm.css';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 3),
  },
}));

function GameForm({ onSubmit, onInputChange, gameForm, loading }) {
  const classes = useStyles();

  if (loading) {
    return <CircularProgress variant="static" />;
  }

  return (
    <Paper className={classes.root}>
      <form className="GameForm" noValidate autoComplete="off" onSubmit={onSubmit}>
        <TextField
          type="text"
          label="Name"
          name="name"
          value={gameForm.name || ''}
          margin="normal"
          onChange={onInputChange}
        />
        <TextField
          type="text"
          label="Playing Time"
          name="playingTime"
          value={gameForm.playingTime || ''}
          margin="normal"
          onChange={onInputChange}
        />
        <TextField
          type="text"
          label="Players"
          name="players"
          value={gameForm.players || ''}
          margin="normal"
          onChange={onInputChange || ''}
        />
        <TextField
          type="number"
          label="Complexity"
          name="complexity"
          value={gameForm.complexity || ''}
          margin="normal"
          onChange={onInputChange}
        />

        <Button type="submit" variant="contained" color="primary">
          {gameForm.id ? 'Update' : 'Create'}
        </Button>
      </form>
    </Paper>
  );
}

export default GameForm;
