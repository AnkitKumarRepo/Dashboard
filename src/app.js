import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { lightTheme, darkTheme } from './theme';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import RoutesConfig from './routes';

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flex: 1 }}>
            <Navbar theme={theme} setTheme={setTheme} />
            <RoutesConfig />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
