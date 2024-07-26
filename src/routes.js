import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Charts from './pages/Charts';

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/tables" element={<Tables />} />
    <Route path="/charts" element={<Charts />} />
  </Routes>
);

export default RoutesConfig;
