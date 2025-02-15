import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const defaultOptions = {
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
      min: 0,
      max: 8,
      ticks: {
        stepSize: 1,
      },
      grid: {
        display: true,
      },
    },
    y: {
      min: 0,
      grid: {
        display: false,
      },
      ticks: {
        display: false,
        stepSize: 1,
      },
    },
  },
  plugins: {
    legend: {
      display: false, // Hide legend
    },
    tooltip: {
      enabled: false, // Hide tooltip
    },
  },
  elements: {
    point: {
      radius: 2, // Hide points on the line
    },
    line: {
      borderWidth: 8, // Thicker line to resemble progress
      tension: 0, // Keep the line straight
    },
  },
};

const LineChart = ({ data, options: propOptions }) => {
  const options = propOptions || defaultOptions;

  return <Line data={data} options={options} />;
};

export default LineChart;
