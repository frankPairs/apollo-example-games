import { useMutation } from '@apollo/react-hooks';

import { UPDATE_USER, CREATE_USER, GET_USERS, UserBasicInfo, userResolvers } from '../../../storeDomains';

export function useUpdateUser() {
  const [updateUserMutate] = useMutation(UPDATE_USER);

  function updateUser(input, userId) {
    updateUserMutate({
      variables: { input, userId },
      optimisticResponse: {
        __typename: 'Mutation',
        updateUser: {
          __typename: 'User',
          ...input,
          id: userId,
          fullName: userResolvers.User.fullName(input),
        },
      },
      update: (store, { data: { updateUser: newUser } }) => {
        try {
          store.writeFragment({
            id: newUser.id,
            fragment: UserBasicInfo,
            fragmentName: 'UserBasicInfo',
            data: newUser,
          });
        } catch (err) {}
      },
    });
  }

  return [updateUser];
}

export function useCreateUser() {
  const [createUserMutate] = useMutation(CREATE_USER);

  function createUser(input) {
    createUserMutate({
      variables: { input },
      optimisticResponse: {
        __typename: 'Mutation',
        createUser: {
          __typename: 'User',
          ...input,
          fullName: userResolvers.User.fullName(input),
        },
      },
      update: (store, { data: { createUser: newUser } }) => {
        try {
          const data = store.readQuery({ query: GET_USERS });

          data.users.push(newUser);

          store.writeQuery({ query: GET_USERS, data });
        } catch (err) {
          console.log(err);
        }
      },
    });
  }

  return [createUser];
}
