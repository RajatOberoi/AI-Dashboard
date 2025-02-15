import React from 'react';
import { Box, Divider, Paper } from '@mui/material';
import Icons from '../Icons/Icons';
import HeroIcon from '../../assets/Frame.svg';
import Chart from '../../assets/chart.svg';
import AiIcon from '../../assets/AiIcon.svg';
import AddIcon from '@mui/icons-material/Add';

const SidebarItems = () => {
  const menuItems = [
    { src: Chart, alt: 'Analytics' },
    { src: AiIcon, alt: 'AI Tools' },
  ];

  return (
    <Box display='flex' flexDirection='column' alignItems='center' gap={2} height='90%' width='100%'>
      <Icons
        height='10%'
        backgroundColor='white'
        border='none'
        icon={<img alt='Hero' src={HeroIcon} width='100%' />}
        width='120%'
      />
      <Divider sx={{ width: '100%' }} />
      {menuItems.map((item, index) => (
        <Icons key={index} height='8%' width='50%' icon={<img alt={item.alt} src={item.src} width='100%' />} />
      ))}
      <Icons height='8%' width='50%' icon={<AddIcon sx={{ color: 'black', fontSize: 'large' }} />} />
    </Box>
  );
};

const UserSection = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      height='10%'
      width='100%'
      justifyContent='space-evenly'
      alignItems='center'
    >
      <Divider sx={{ width: '100%' }} />
      <Icons
        height='80%'
        width='90%'
        borderRadius={2}
        text='S'
        color='black'
        fontSize='xx-large'
        backgroundColor='#2E4FE157'
      />
    </Box>
  );
};

const Sidebar = () => {
  return (
    <Paper
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
        boxSizing: 'border-box',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '10px',
      }}
    >
      <SidebarItems />
      <UserSection />
    </Paper>
  );
};

export default Sidebar;
