import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const defaultOptions = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      //   position: 'left',
    },
    title: {
      display: false,
      text: 'Doughnut Chart',
      font: {
        size: 16,
      },
    },
  },
};

const DoughnutChart = ({ data, options: propOptions }) => {
  const total = data.datasets[0].data.reduce((a, b) => a + b, 0);

  const options = propOptions || defaultOptions; // Use propOptions if provided, otherwise defaultOptions

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontWeight: 'bold',
          textAlign: 'center',
          width: '100%',
          display: 'flex', // Use flexbox for centering
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {total}
      </div>
    </div>
  );
};

export default DoughnutChart;
