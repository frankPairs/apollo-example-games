import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { NavigationLink } from '../../../../components/Navigation';

function UserRow({ user, onUserRemove }) {
  return (
    <TableRow key={user.id}>
      <TableCell>{user.fullName}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        <NavigationLink to={`/users/${user.id}/edit`}>
          <EditIcon color="primary" />
        </NavigationLink>
        <DeleteIcon color="secondary" onClick={onUserRemove} />
      </TableCell>
    </TableRow>
  );
}

export default UserRow;
