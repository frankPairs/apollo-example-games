import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { REMOVE_USER, GET_USERS } from '../../../../storeDomains';
import UserRow from './UserRow';

function UserRowContainer(props) {
  const [removeUser] = useMutation(REMOVE_USER);

  function handleRemove() {
    const {
      user: { id: userId },
    } = props;

    removeUser({
      variables: { userId },
      optimisticResponse: {
        __typename: 'Mutation',
        removeUser: {
          __typename: 'User',
          id: userId,
        },
      },
      update: (store, { data: { createUser } }) => {
        try {
          const data = store.readQuery({ query: GET_USERS });
          const index = data.users.findIndex(user => user.id === userId);

          data.users.splice(index, 1);

          store.writeQuery({ query: GET_USERS, data });
        } catch (err) {}
      },
    });
  }

  return <UserRow {...props} onUserRemove={handleRemove} />;
}

export default UserRowContainer;
