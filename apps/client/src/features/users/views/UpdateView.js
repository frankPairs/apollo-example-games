import React from 'react';
import Typography from '@material-ui/core/Typography';

import { UserFormContainer } from '../components';

function UpdateView() {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Edit user
      </Typography>

      <UserFormContainer />
    </div>
  );
}

export default UpdateView;
