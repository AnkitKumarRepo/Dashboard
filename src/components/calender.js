import React, { useState } from 'react';
import Calendar from 'react-calendar';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div style={{ padding: 20 }}>
      <Calendar
        onChange={setDate}
        value={date}
      />
    </div>
  );
};

export default CalendarComponent;
