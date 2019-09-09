import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import MatchRowContainer from '../MatchRow/MatchRowContainer';

function MatchList({ loading, error, matches = [] }) {
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
            <TableCell> Game </TableCell>
            <TableCell> Winner </TableCell>
            <TableCell> Date </TableCell>
            <TableCell> Actions </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {matches.map(match => (
            <MatchRowContainer key={match.id} match={match} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default MatchList;
