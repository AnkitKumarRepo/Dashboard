import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => (
  <div style={{ width: 250, height: '100vh', background: '#f4f4f4', padding: '20px' }}>
    <List>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/tables">
        <ListItemText primary="Tables" />
      </ListItem>
      <ListItem button component={Link} to="/charts">
        <ListItemText primary="Charts" />
      </ListItem>
    </List>
  </div>
);

export default Sidebar;
