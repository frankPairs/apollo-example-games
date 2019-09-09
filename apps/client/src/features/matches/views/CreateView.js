import React from 'react';
import Typography from '@material-ui/core/Typography';

import { MatchFormContainer } from '../components';

function CreateView() {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        {' '}
        New Match{' '}
      </Typography>

      <MatchFormContainer />
    </div>
  );
}

export default CreateView;
