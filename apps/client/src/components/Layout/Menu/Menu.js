import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { NavLink } from 'react-router-dom';

const menu = [
  {
    title: 'Users',
    path: '/users',
  },
  {
    title: 'Games',
    path: '/games',
  },
  {
    title: 'Matches',
    path: '/matches',
  },
];

function Menu() {
  return (
    <List component="nav">
      {menu.map(({ path, title, Icon }) => (
        <NavLink key={path} to={path} activeClassName="active">
          <ListItem button divider alignItems="flex-start">
            {Icon && (
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
            )}

            <ListItemText primary={title} />
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
}

export default Menu;
