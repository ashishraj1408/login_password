// src/components/Dashboard.jsx
import React from 'react';
import Chart from 'react-apexcharts';

function Dashboard() {
  const chartOptions = {
    chart: { id: 'basic-bar' },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] }
  };
  const chartSeries = [{ name: 'Sales', data: [30, 40, 45, 50, 49] }];

  return (
    <div>
      <h1>Dashboard</h1>
      <Chart options={chartOptions} series={chartSeries} type="bar" height={350} />
    </div>
  );
}

export default Dashboard;