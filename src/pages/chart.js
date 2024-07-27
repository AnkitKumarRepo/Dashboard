import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Charts = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#1976d2',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return ${context.dataset.label}: ${context.raw};
          },
        },
      },
    },
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Sales Data</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Charts;
