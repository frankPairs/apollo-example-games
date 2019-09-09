import React from 'react';
import Typography from '@material-ui/core/Typography';

import { GameFormContainer } from '../components';

function UpdateView() {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Edit game
      </Typography>

      <GameFormContainer />
    </div>
  );
}

export default UpdateView;
