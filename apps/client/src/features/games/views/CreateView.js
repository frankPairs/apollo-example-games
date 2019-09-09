import React from 'react';
import Typography from '@material-ui/core/Typography';

import { GameFormContainer } from '../components';

function CreateView() {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        New Game
      </Typography>

      <GameFormContainer />
    </div>
  );
}

export default CreateView;
