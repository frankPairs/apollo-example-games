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

function WinnerSelectField({ value, onInputChange, users }) {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="winner">Winner</InputLabel>
      <Select
        value={value}
        onChange={onInputChange}
        inputProps={{
          name: 'winner',
          id: 'winner',
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        {users.map(user => (
          <MenuItem key={user.id} value={user.id}>
            {user.fullName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default WinnerSelectField;
