import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import UserRowContainer from '../UserRow/UserRowContainer';

function UserList({ loading, error, users = [] }) {
  if (loading) {
    return <CircularProgress variant="static" />;
  }

  if (error) {
    return <p> {error.message} </p>;
  }

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell> Name </TableCell>
            <TableCell> Email </TableCell>
            <TableCell> Actions </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <UserRowContainer key={user.id} user={user} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default UserList;
