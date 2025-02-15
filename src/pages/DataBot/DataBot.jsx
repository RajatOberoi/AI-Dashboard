import { Box, Divider, Paper, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid2';
import AiIcon from '../../assets/BlueIcon.svg';
import SearchBar from '../../components/SearchBar/SearchBar';
import GroupIcon from '../../assets/GroupIcon.svg';
import Icons from '../../components/Icons/Icons';
import PopOverElement from '../../components/Card/PopOverElement';

const DataBot = () => {
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
    >
      <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
        <Typography variant='h5' display={'flex'} alignItems={'center'} gap={'5%'} fontWeight={'bold'}>
          DataBot <img alt='img' src={AiIcon} />
        </Typography>
        <span>
          <PopOverElement />
        </span>
      </Box>
      <Divider sx={{ width: '100%' }} />
      <Box height={'80%'} boxSizing={'border-box'} display={'flex'} flexDirection={'column'} padding={2}>
        <Typography variant='h4' fontWeight='bold' textAlign='center' gutterBottom>
          <Box component='span' sx={{ color: '#2043DF' }}>
            AI Conversational
          </Box>{' '}
          Data Assistant
        </Typography>
        <Typography variant='body1' textAlign='center' mb={3}>
          Your personal AI data assistant. Seamlessly integrate your database for rapid, informed decision-making. Get
          instant analysis and answers, optimizing growth metrics daily. Ask anything, get analyst-grade responses.
        </Typography>
        <Grid container spacing={2} justifyContent='center'>
          {[
            'Give me the summary of the data Source.',
            'User duration engagement change vs last week?',
            "Provide an overview of this week's IAP Revenue performance.",
            'What are the factors of drop in our Sales Revenue this week?',
          ].map((question, index) => (
            <Grid size={6} key={index}>
              <Icons
                backgroundColor='white'
                color='black'
                icon={<img src={GroupIcon} alt='groupImg' height='30%' width='30%' />}
                text={<Typography variant='caption'>{question}</Typography>}
              />
            </Grid>
          ))}
        </Grid>
        <Card
          variant='outlined'
          sx={{ mt: 1, background: '#F9F9F9', borderRadius: '20px', flexGrow: 1, overflowY: 'auto' }}
        >
          <CardContent>
            <Typography variant='h6' fontWeight='bold'>
              Summary
            </Typography>

            <Box>
              <Typography variant='body2'>
                Supplier references help verify capabilities and experience during procurement.
              </Typography>

              <Typography variant='body2' fontWeight='bold' mt={1}>
                Basic Reference:
              </Typography>
              <ul>
                <li>Supplier Name: Acme Corporation</li>
                <li>Contact Name: John Smith</li>
                <li>Phone Number: (555) 555-5555</li>
              </ul>

              <Typography variant='body2' fontWeight='bold' mt={1}>
                Detailed Reference:
              </Typography>
              <ul>
                <li>Supplier Name: Global Tech Solutions</li>
                <li>Contact Name: Jane Doe</li>
                <li>Phone Number: (555) 555-1234</li>
              </ul>

              <Typography variant='body2' fontWeight='bold' mt={1}>
                Detailed Reference 2:
              </Typography>
              <ul>
                <li>Supplier Name: Global Tech Solutions</li>
                <li>Contact Name: Jane Doe</li>
                <li>Phone Number: (555) 555-1234</li>
              </ul>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <SearchBar height='5%' />
    </Box>
  );
};

export default DataBot;
