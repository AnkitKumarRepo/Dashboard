import React from 'react';
import { FormControlLabel, Switch } from '@mui/material';

const ThemeSwitcher = ({ theme, setTheme }) => {
  const handleChange = () => {
    setTheme(theme.palette.mode === 'light' ? darkTheme : lightTheme);
  };

  return (
    <FormControlLabel
      control={<Switch checked={theme.palette.mode === 'dark'} onChange={handleChange} />}
      label="Dark Mode"
    />
  );
};

export default ThemeSwitcher;
