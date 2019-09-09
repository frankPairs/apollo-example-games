import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import GameRowContainer from '../GameRow/GameRowContainer';

function GameList({ loading, error, games }) {
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
            <TableCell align="center"> Playing Time </TableCell>
            <TableCell align="center"> Players </TableCell>
            <TableCell align="right"> Complexity </TableCell>
            <TableCell> Actions </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {games.map(game => (
            <GameRowContainer key={game.id} game={game} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default GameList;
