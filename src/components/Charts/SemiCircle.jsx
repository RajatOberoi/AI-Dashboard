// import { Doughnut } from 'react-chartjs-2';
// import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
// import { useRef, useEffect, useState } from 'react';

// Chart.register(ArcElement, Tooltip, Legend);

// const defaultOptions = {
//   maintainAspectRatio: false,
//   rotation: -90,
//   circumference: 180, // Makes it a semicircle
//   plugins: {
//     legend: {
//       display: false,
//     },
//     title: {
//       display: false,
//     },
//   },
// };

// const SemicircleDoughnut = ({ data, value }) => {
//   const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
//   const chartRef = useRef(null);
//   const [pointerStyle, setPointerStyle] = useState({});

//   //   useEffect(() => {
//   //     if (!chartRef.current) return;
//   //     const chart = chartRef.current;
//   //     const { chartArea, scales } = chart;
//   //     if (!chartArea) return;

//   //     const angle = ((value / 100) * 180 - 90) * (Math.PI / 180); // Convert to radians
//   //     const radius = (chartArea.right - chartArea.left) / 2;
//   //     const centerX = chartArea.left + radius;
//   //     const centerY = chartArea.bottom;
//   //     const pointerX = centerX + radius * Math.cos(angle);
//   //     const pointerY = centerY + radius * Math.sin(angle);

//   //     setPointerStyle({
//   //       left: `${pointerX}px`,
//   //       top: `${pointerY}px`,
//   //       transform: `translate(-50%, -50%) rotate(${value * 1.8 - 90}deg)`,
//   //     });
//   //   }, [value, data]);

//   useEffect(() => {
//     if (!chartRef.current) return;
//     const chart = chartRef.current;
//     const { chartArea } = chart;
//     if (!chartArea) return;

//     const angle = ((value / 100) * 180 - 90) * (Math.PI / 180); // Convert to radians
//     const radius = (chartArea.right - chartArea.left) / 2;
//     const centerX = chartArea.left + radius;
//     const centerY = chartArea.bottom - 10; // Adjust pointer closer to the arc
//     const pointerX = centerX + (radius + 10) * Math.cos(angle); // Extend beyond arc
//     const pointerY = centerY + (radius + 10) * Math.sin(angle);

//     setPointerStyle({
//       left: `${pointerX}px`,
//       top: `${pointerY}px`,
//       transform: `translate(-50%, -50%) rotate(${value * 1.8 - 90}deg)`,
//     });
//   }, [value, data]);

//   return (
//     <div style={{ position: 'relative', width: '100%', height: '100%' }}>
//       <Doughnut ref={chartRef} data={data} options={defaultOptions} />
//       <div
//         style={{
//           position: 'absolute',
//           top: '80%', // Adjust for semicircle
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           fontWeight: 'bold',
//           textAlign: 'center',
//         }}
//       >
//         {total}
//       </div>
//       <div
//         style={{
//           position: 'absolute',
//           width: '10px',
//           height: '10px',
//           borderLeft: '10px solid transparent',
//           borderRight: '10px solid transparent',
//           borderBottom: '20px solid red',
//           ...pointerStyle,
//         }}
//       ></div>
//     </div>
//   );
// };

// export default SemicircleDoughnut;

// import React, { useRef, useEffect } from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Chart.register(ArcElement, Tooltip, Legend);

// const SemiCircleDoughnutChart = ({ value, maxValue = 100, color = 'blue' }) => {
//   const chartRef = useRef(null);

//   const data = {
//     datasets: [
//       {
//         data: [value, maxValue - value],
//         backgroundColor: [color, 'lightgray'],
//         borderWidth: 0,
//         circumference: 180,
//         rotation: 270,
//       },
//     ],
//   };

//   const options = {
//     maintainAspectRatio: false,
//     cutout: '50%',
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         enabled: false,
//       },
//     },
//   };

//   useEffect(() => {
//     if (chartRef.current) {
//       const chart = chartRef.current.chartInstance;
//       if (chart) {
//         chart.update();
//       }
//     }
//   }, [value, maxValue, color]);

//   const calculatePointerPosition = () => {
//     const angle = (value / maxValue) * Math.PI;
//     const chartArea = chartRef.current.chartInstance.chartArea;
//     const centerX = (chartArea.left + chartArea.right) / 2;
//     const centerY = chartArea.top + chartArea.bottom;
//     const radius = chartArea.right - centerX;

//     const x = centerX + radius * Math.cos(angle - Math.PI / 2);
//     const y = centerY + radius * Math.sin(angle - Math.PI / 2);

//     return { x, y, angle };
//   };

//   const pointerPosition = chartRef.current?.chartInstance ? calculatePointerPosition() : { x: 0, y: 0, angle: 0 };

//   return (
//     <div style={{ position: 'relative', width: '100%', height: '100%' }}>
//       <Doughnut ref={chartRef} data={data} options={options} />
//       {chartRef.current?.chartInstance && (
//         <div
//           style={{
//             position: 'absolute',
//             top: `${pointerPosition.y}px`,
//             left: `${pointerPosition.x}px`,
//             transform: `translate(-50%, -50%) rotate(${pointerPosition.angle + Math.PI / 2}rad)`,
//             width: '0',
//             height: '0',
//             borderLeft: '10px solid transparent',
//             borderRight: '10px solid transparent',
//             borderBottom: '20px solid black',
//             transformOrigin: '50% 0%',
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default SemiCircleDoughnutChart;

import React, { useRef, useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const SemiCircleDoughnutChart = ({ value, maxValue = 100, color = 'blue' }) => {
  const chartRef = useRef(null);
  const [pointerAngle, setPointerAngle] = useState(null);

  const data = {
    datasets: [
      {
        data: [value, maxValue - value],
        backgroundColor: [color, 'lightgray'],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    cutout: '50%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  useEffect(() => {
    // Calculate the angle directly based on the value
    const angle = (value / maxValue) * 180; // Angle in degrees
    setPointerAngle(angle);
  }, [value, maxValue]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Doughnut ref={chartRef} data={data} options={options} />
      {pointerAngle !== null && (
        <div
          style={{
            position: 'absolute',
            top: '50%', // Centered vertically
            left: '50%', // Centered horizontally
            transform: `translate(-50%, -100%) rotate(${pointerAngle - 90}deg)`, // Adjust rotation
            width: '0',
            height: '0',
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderBottom: '20px solid black',
            transformOrigin: '50% 100%', // Rotate from bottom center
          }}
        />
      )}
    </div>
  );
};

export default SemiCircleDoughnutChart;
