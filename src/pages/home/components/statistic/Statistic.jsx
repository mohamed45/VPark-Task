
import React from 'react';
import { Pie } from 'react-chartjs-2';
import './Statistic.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Active Vehicles', 'In-Active Vehicles'],
  datasets: [
    {
      data: [60, 40],
      backgroundColor: ['#CAE4FA', '#1070C5'],
      hoverBackgroundColor: ['#CAE4FA', '#1070C5'],
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const Statistic = () => (
  <div className="statistic">
    <h2 className="chart-title">Active Vehicles<br /> Vs. In-Active<br/> Vehicles</h2>
    <div className="chart-container">
    <Pie data={data} options={options} />
      <div className="labels">
      <div className="label inactive-label">
          <span>40%<br/>In-Active Vehicles</span>
          <div className="line1"></div>
        </div>
        <div className="label active-label">
          <span>60%<br/>Active Vehicles</span>
          <div className="line2"></div>
        </div>
        
      </div>
    </div>
  </div>
);

export default Statistic;

