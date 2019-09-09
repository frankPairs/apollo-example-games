import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_USERS } from '../../../../storeDomains';
import UserList from './UserList';

function UserListContainer() {
  const {
    data: { users },
    ...rest
  } = useQuery(GET_USERS);

  return <UserList {...rest} users={users} />;
}

export default UserListContainer;
