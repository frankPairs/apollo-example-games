import React from 'react';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

import { FloatingButton } from '../../../components/Buttons';
import { NavigationLink } from '../../../components/Navigation';
import { GameListContainer } from '../components';

function ListView() {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Games
      </Typography>

      <GameListContainer />

      <NavigationLink to="/games/new">
        <FloatingButton color="primary" aria-label="New Game">
          <AddIcon />
        </FloatingButton>
      </NavigationLink>
    </div>
  );
}

export default ListView;
