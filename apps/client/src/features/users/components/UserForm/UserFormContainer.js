import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useLazyQuery } from '@apollo/react-hooks';
import uuidv4 from 'uuid/v4';

import { useUpdateUser, useCreateUser } from '../../hooks';
import { GET_USER } from '../../../../storeDomains';
import UserForm from '../UserForm/UserForm';

function UserUpdateFormContainer({ match, history }) {
  const userId = match.params.id;
  const [userForm, setUserForm] = useState({});
  const [getUser, responseFromGetUser] = useLazyQuery(GET_USER, {
    variables: { userId },
  });
  const [updateUser] = useUpdateUser();
  const [createUser] = useCreateUser();

  useEffect(() => {
    const { data } = responseFromGetUser;

    if (data && data.user) {
      setUserForm(data.user);
    }
  }, [responseFromGetUser]);

  useEffect(() => {
    if (userId) {
      getUser();
    }
  }, [userId, getUser]);

  function handleChange(evt) {
    const {
      target: { name, value },
    } = evt;

    setUserForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    if (userId) {
      updateUser(
        {
          firstName: userForm.firstName,
          lastName: userForm.lastName,
          email: userForm.email,
        },
        userId
      );
    } else {
      createUser({
        ...userForm,
        id: uuidv4(),
      });
    }

    history.push('/users');
    evt.preventDefault();
  }

  return (
    <UserForm
      loading={responseFromGetUser.loading}
      userForm={userForm}
      onInputChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

export default withRouter(UserUpdateFormContainer);
