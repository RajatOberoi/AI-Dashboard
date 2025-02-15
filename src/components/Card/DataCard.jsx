import { Box, Card, Typography } from '@mui/material';

const DataCard = ({ title, value, icon, backgroundColor }) => (
  <Card
    variant='outlined'
    sx={{
      p: 2,
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      // minWidth: 200,
      background: backgroundColor,
      borderRadius: '20px',
    }}
  >
    {icon}
    <Box>
      <Typography variant='body2' color='text.secondary'>
        {title}
      </Typography>
      <Typography variant='h6' fontWeight='bold'>
        {value}
      </Typography>
    </Box>
  </Card>
);

export default DataCard;
