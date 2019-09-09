import React from 'react';
import { Link } from 'react-router-dom';

function NavigationLink({ children, ...props }) {
  return <Link {...props}>{children}</Link>;
}

export default NavigationLink;
