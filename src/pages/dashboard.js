import React from 'react';
import KanbanBoard from '../components/KanbanBoard';
import CalendarComponent from '../components/Calendar';

const Dashboard = () => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <div style={{ flex: 1 }}>
      <KanbanBoard />
    </div>
    <div style={{ flex: 1 }}>
      <CalendarComponent />
    </div>
  </div>
);

export default Dashboard;
