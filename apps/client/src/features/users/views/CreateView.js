import React from 'react';
import Typography from '@material-ui/core/Typography';

import { UserFormContainer } from '../components';

function CreateView() {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        New User
      </Typography>

      <UserFormContainer />
    </div>
  );
}

export default CreateView;
