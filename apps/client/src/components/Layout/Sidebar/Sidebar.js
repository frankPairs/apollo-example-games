// @flow
import React from 'react';
import type { Node } from 'react';
import Drawer from '@material-ui/core/Drawer';

type Props = {
  children: Node,
};

function Sidebar({ children, ...props }: Props) {
  return <Drawer {...props}>{children}</Drawer>;
}

export default Sidebar;
