import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import './UserForm.css';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 3),
  },
}));

function UserForm({ onSubmit, onInputChange, userForm, loading }) {
  const classes = useStyles();

  if (loading) {
    return <CircularProgress variant="static" />;
  }

  return (
    <Paper className={classes.root}>
      <form className="UserForm" noValidate autoComplete="off" onSubmit={onSubmit}>
        <TextField
          type="text"
          label="First name"
          name="firstName"
          value={userForm.firstName || ''}
          margin="normal"
          onChange={onInputChange}
        />
        <TextField
          type="text"
          label="Last name"
          name="lastName"
          value={userForm.lastName || ''}
          margin="normal"
          onChange={onInputChange}
        />
        <TextField
          type="email"
          label="Email"
          name="email"
          value={userForm.email || ''}
          margin="normal"
          onChange={onInputChange}
        />

        <Button type="submit" variant="contained" color="primary">
          {userForm.id ? 'Update' : 'Create'}
        </Button>
      </form>
    </Paper>
  );
}

export default UserForm;
