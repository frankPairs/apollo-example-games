import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function GameSelectField({ value, onInputChange, games }) {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="game">Game</InputLabel>
      <Select
        value={value}
        onChange={onInputChange}
        inputProps={{
          name: 'game',
          id: 'game',
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        {games.map(game => (
          <MenuItem key={game.id} value={game.id}>
            {game.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default GameSelectField;
