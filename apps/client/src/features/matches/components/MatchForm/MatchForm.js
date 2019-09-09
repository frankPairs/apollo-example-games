import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import GameSelectFieldContainer from '../GameSelectField/GameSelectFieldContainer';
import WinnerSelectFieldContainer from '../WinnerSelectField/WinnerSelectFieldContainer';
import './MatchForm.css';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function MatchForm({ onSubmit, onInputChange, onDateChange, matchForm, loading, games = [], users = [] }) {
  const classes = useStyles();

  if (loading) {
    return <CircularProgress variant="static" />;
  }

  return (
    <Paper className={classes.root}>
      <form className="MatchForm" noValidate autoComplete="off" onSubmit={onSubmit}>
        <GameSelectFieldContainer value={matchForm.game || ''} onInputChange={onInputChange} />

        <WinnerSelectFieldContainer value={matchForm.winner || ''} onInputChange={onInputChange} />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date"
            label="Date"
            onChange={onDateChange}
            value={matchForm.date || null}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>

        <Button type="submit" variant="contained" color="primary">
          {matchForm.id ? 'Update' : 'Create'}
        </Button>
      </form>
    </Paper>
  );
}

export default MatchForm;
