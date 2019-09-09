import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_USERS_NAMES } from '../../../../storeDomains';

import WinnerSelectField from './WinnerSelectField';

function WinnerSelectFieldContainer(props) {
  const {
    data: { users = [] },
  } = useQuery(GET_USERS_NAMES);

  return <WinnerSelectField users={users} {...props} />;
}

export default WinnerSelectFieldContainer;
