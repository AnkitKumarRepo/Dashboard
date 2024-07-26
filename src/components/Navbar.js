import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Switch, FormControlLabel } from '@mui/material';
import { lightTheme, darkTheme } from '../theme';

const Navbar = ({ theme, setTheme }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Admin Dashboard
      </Typography>
      <FormControlLabel
        control={
          <Switch
            checked={theme.palette.mode === 'dark'}
            onChange={() => setTheme(theme.palette.mode === 'light' ? darkTheme : lightTheme)}
          />
        }
        label="Dark Mode"
      />
    </Toolbar>
  </AppBar>
);

export default Navbar;
