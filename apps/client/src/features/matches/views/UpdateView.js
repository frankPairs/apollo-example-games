import React from 'react';
import Typography from '@material-ui/core/Typography';

import { MatchFormContainer } from '../components';

function UpdateView() {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        {' '}
        Edit match{' '}
      </Typography>

      <MatchFormContainer />
    </div>
  );
}

export default UpdateView;
