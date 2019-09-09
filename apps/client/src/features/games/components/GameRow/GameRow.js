import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { NavigationLink } from '../../../../components/Navigation';

function GameRow({ game, onGameRemove }) {
  return (
    <TableRow key={game.id}>
      <TableCell>{game.name}</TableCell>
      <TableCell align="center">{game.playingTime}</TableCell>
      <TableCell align="center">{game.players}</TableCell>
      <TableCell align="right">{game.complexity}</TableCell>
      <TableCell>
        <NavigationLink to={`/games/${game.id}/edit`}>
          <EditIcon color="primary" />
        </NavigationLink>
        <DeleteIcon color="secondary" onClick={onGameRemove} />
      </TableCell>
    </TableRow>
  );
}

export default GameRow;
