import React from 'react';
import Fab from '@material-ui/core/Fab';

import './FloatingButton.css';

function FloatingButton({ children, color, ariaLabel }) {
  return (
    <Fab className="FloatingButton" color={color} aria-label={ariaLabel}>
      {children}
    </Fab>
  );
}

export default FloatingButton;
