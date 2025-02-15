import React from 'react';
import { Box, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { GaugeContainer, GaugeValueArc, GaugeReferenceArc, useGaugeState, GaugeValueText } from '@mui/x-charts/Gauge';

ChartJS.register(ArcElement, Tooltip, Legend);

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle) * 1.28,
    y: cy - outerRadius * Math.cos(valueAngle) * 1.28,
  };

  // Triangle size
  const triangleSize = 30;
  const triangleAngle = valueAngle + Math.PI / 2; // Pointing outward from the line

  const triangleX1 = target.x + triangleSize * Math.cos(triangleAngle - Math.PI / 6);
  const triangleY1 = target.y + triangleSize * Math.sin(triangleAngle - Math.PI / 6);

  const triangleX2 = target.x + triangleSize * Math.cos(triangleAngle + Math.PI / 6);
  const triangleY2 = target.y + triangleSize * Math.sin(triangleAngle + Math.PI / 6);

  return (
    <g>
      <path d={`M ${cx} ${cy} L ${target.x} ${target.y}`} stroke='transparent' strokeWidth={3} />
      <polygon
        points={`${target.x},${target.y} ${triangleX1},${triangleY1} ${triangleX2},${triangleY2}`}
        fill='black'
      />
    </g>
  );
}

const GaugeChart = ({ value }) => {
  const data = {
    labels: ['Poor', 'Average', 'Good'],
    datasets: [
      {
        data: [33, 33, 34],
        backgroundColor: ['#E74C3C', '#F39C12', '#27AE60'],
        borderWidth: 0,
        cutout: '75%',
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  return (
    <div style={{ width: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
      {/* ChartJS Main Container */}
      <div style={{ width: 300, height: 300 }}>
        <Doughnut data={data} options={{ responsive: true, maintainAspectRatio: false }} />

        {/* MUI Chart Inside ChartJS Container */}
        <div style={{ position: 'absolute', top: '65%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <GaugeContainer
            width={190}
            height={190}
            startAngle={-90}
            endAngle={90}
            value={value}
            sx={{
              overflow: 'visible',
              '& svg': {
                overflow: 'visible',
              },
            }}
          >
            <GaugeReferenceArc
              d='M -85 0 A 85 85 0 1 1 85 0 L 82 0 A 82 82 0 1 0 -82 0 Z'
              style={{
                fill: '#D9D9D9',
                overflow: 'visible',
              }}
            />
            <GaugeValueText />
            <GaugePointer />
          </GaugeContainer>
        </div>
      </div>
    </div>
  );
};

export default GaugeChart;
