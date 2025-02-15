import { Box, Paper, Card, CardContent, Chip, Typography, LinearProgress, Divider } from '@mui/material';
import Grid from '@mui/material/Grid2';
import GaugeChart from '../../components/Charts/GaugeChart';
import LineChart from '../../components/Charts/LineChart';
import DataCard from '../../components/Card/DataCard';
import ColumnSvg from '../../assets/Column.svg';
import RowSvg from '../../assets/Row.svg';
import DoughnutChart from '../../components/Charts/Doughnut';
import CardWithChart from '../../components/Card/CardWithChart';

const DataVisual = () => {
  const chartData = [
    {
      title: 'Table Health',
      data: {
        labels: ['Success', 'Failed', 'Skipped', 'Broken'],
        datasets: [
          {
            data: [40, 20, 15, 13],
            backgroundColor: {
              Success: '#4CAF50',
              Failed: '#E53935',
              Skipped: '#1E88E5',
              Broken: '#FBC02D',
            },
          },
        ],
      },
    },
    {
      title: 'Test Results',
      data: {
        labels: ['Success', 'Failed', 'Aborted', 'Unknown'],
        datasets: [
          {
            data: [35, 25, 18, 10],
            backgroundColor: {
              Success: '#4CAF50',
              Failed: '#E53935',
              Aborted: '#1E88E5',
              Unknown: '#B0BEC5',
            },
          },
        ],
      },
    },
    {
      title: 'Monitored Data',
      data: {
        labels: ['Monitored', 'Unmonitored'],
        datasets: [
          {
            data: [50, 38],
            backgroundColor: {
              Monitored: '#4CAF50',
              Unmonitored: '#424242',
            },
          },
        ],
      },
    },
  ];

  const LineData = {
    title: 'Rules Against Target',
    value: 6, // Current validity score
    maxValue: 8, // Maximum possible value
    colors: {
      good: '#4CAF50', // Green
      acceptable: '#FFC107', // Yellow
      'Not Acceptable': '#F44336', // Red
    },
    data: {
      labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8'], // X-axis labels
      datasets: [
        {
          label: 'Validity Trend',
          data: [
            { x: 0, y: 0 }, // Keep y constant
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 3, y: 0 },
            { x: 4, y: 0 },
            { x: 5, y: 0 },
            { x: 6, y: 0 }, // Stops at 6
          ],
          borderColor: '#4CAF50', // Green (since value = 6)
          backgroundColor: '#4CAF50',
          fill: false,
        },
      ],
    },
  };

  const mockData = {
    labels: ['Red', 'Blue', 'Green'],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#4BC0C0'],
      },
    ],
  };
  return (
    <Box
      component={Paper}
      padding={2}
      display={'flex'}
      flexDirection={'column'}
      boxSizing={'border-box'}
      alignItems={'center'}
      justifyContent={'space-between'}
      borderRadius={'10px'}
      height={'100%'}
      width={'100%'}
      overflow={'auto'}
    >
      <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} width={'100%'} mb={2}>
        <Typography variant='h5' display={'flex'} alignItems={'center'} gap={'5%'} fontWeight={'bold'}>
          Data Visual
        </Typography>
      </Box>
      <Divider sx={{ width: '100%', marginBottom: 2 }} />

      <Typography variant='h6' fontWeight='bold' mb={2} alignSelf={'flex-start'}>
        Data Overview
      </Typography>

      <Grid container spacing={2} alignItems='stretch'>
        <Grid size={4} container direction='column' spacing={2} justifyContent='space-between'>
          <Grid size={12}>
            <DataCard title='Total Number of rows' value='34.1M' icon={<img src={RowSvg} alt='row' />} />
          </Grid>
          <Grid size={12}>
            <DataCard title='Total No of Columns' value='2' icon={<img src={ColumnSvg} alt='column' />} />
          </Grid>
        </Grid>

        <Grid size={8} container spacing={2} alignItems='stretch'>
          <Grid size={6} sx={{ display: 'flex' }}>
            <Card variant='outlined' sx={{ p: 2, borderRadius: '20px', background: '#F9F9F9', flexGrow: 1 }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Typography variant='subtitle1' fontWeight='bold'>
                  Metadata
                </Typography>
                <Typography variant='body2'>Name: Samples</Typography>
                <Typography variant='body2'>Created at: 20 Jul 2022</Typography>
                <Typography variant='body2'>Relates to: dim_books</Typography>
                <Typography variant='body2'>Connection: Postgresql</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={6} sx={{ display: 'flex' }}>
            <Card variant='outlined' sx={{ p: 2, borderRadius: '20px', background: '#F9F9F9', flexGrow: 1 }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Typography variant='subtitle1' fontWeight='bold'>
                  SLA
                </Typography>
                <LinearProgress
                  variant='determinate'
                  value={100}
                  color='success'
                  sx={{ height: 10, my: 1, borderRadius: 5 }}
                />
                <Typography variant='subtitle1' fontWeight='bold'>
                  Test report
                </Typography>
                <Typography color='primary' component='a' href='#'>
                  See all
                </Typography>
                <Typography>100% Score - 5 Test</Typography>
                <LinearProgress
                  variant='determinate'
                  value={100}
                  color='success'
                  sx={{ height: 10, my: 1, borderRadius: 5 }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} width={'100%'} mt={1}>
        <Grid size={6}>
          <GaugeChart value={65} />
        </Grid>
        <Grid size={6}>
          <CardWithChart
            title={LineData.title}
            chart={<LineChart data={LineData.data} />}
            data={LineData.data}
            colors={LineData.colors}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} width={'100%'} height={'60%'}>
        {chartData.map(({ title, data }) => (
          <Grid size={4} height={'100%'} key={title}>
            <CardWithChart
              title={title}
              chart={
                <DoughnutChart
                  data={{
                    labels: data.labels,
                    datasets: [
                      {
                        data: Object.values(data.datasets[0].data),
                        backgroundColor: Object.values(data.datasets[0].backgroundColor),
                      },
                    ],
                  }}
                />
              }
              data={data}
              colors={data.datasets[0].backgroundColor}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DataVisual;
