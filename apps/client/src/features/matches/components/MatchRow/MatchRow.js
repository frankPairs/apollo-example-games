import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { NavigationLink } from '../../../../components/Navigation';

function MatchRow({ match, onMatchRemove }) {
  return (
    <TableRow key={match.id}>
      <TableCell>{match.game.name}</TableCell>
      <TableCell>{match.winner.fullName}</TableCell>
      <TableCell>{match.dateFormatted}</TableCell>
      <TableCell>
        <NavigationLink to={`/matches/${match.id}/edit`}>
          <EditIcon color="primary" />
        </NavigationLink>
        <DeleteIcon color="secondary" onClick={onMatchRemove} />
      </TableCell>
    </TableRow>
  );
}

export default MatchRow;
