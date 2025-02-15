import { Card, Box, Typography } from '@mui/material';

const CardWithChart = ({ title, chart = '', data = {}, colors }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', boxSizing: 'border-box' }}>
    <Card
      variant='outlined'
      sx={{
        p: 2,
        width: '100%',
        borderRadius: '20px',
        background: '#F9F9F9',
        height: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant='h6' sx={{ mb: 2, textAlign: 'center' }}>
        {title}
      </Typography>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ flexGrow: 1 }}>{chart}</Box>
      </Box>
    </Card>

    {/* Legend with all colors */}
    <Box sx={{ mt: 1, display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
      {Object.entries(colors).map(([label, color]) => (
        <Box key={label} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Box
            sx={{
              width: 16,
              height: 16,
              borderRadius: '50%',
              backgroundColor: color,
              mr: 1,
            }}
          />
          <Typography variant='body2' sx={{ textTransform: 'capitalize' }}>
            {label}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

export default CardWithChart;
