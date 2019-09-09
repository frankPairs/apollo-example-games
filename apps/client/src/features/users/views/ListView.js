import React from 'react';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

import { FloatingButton } from '../../../components/Buttons';
import { NavigationLink } from '../../../components/Navigation';
import { UserListContainer } from '../components';

function ListView() {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Users
      </Typography>

      <UserListContainer />

      <NavigationLink to="/users/new">
        <FloatingButton color="primary" aria-label="New User">
          <AddIcon />
        </FloatingButton>
      </NavigationLink>
    </div>
  );
}

export default ListView;
