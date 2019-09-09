import React from 'react';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

import { FloatingButton } from '../../../components/Buttons';
import { NavigationLink } from '../../../components/Navigation';
import { MatchListContainer } from '../components';

function ListView() {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        {' '}
        Matches{' '}
      </Typography>

      <MatchListContainer />

      <NavigationLink to="/matches/new">
        <FloatingButton color="primary" aria-label="New Match">
          <AddIcon />
        </FloatingButton>
      </NavigationLink>
    </div>
  );
}

export default ListView;
