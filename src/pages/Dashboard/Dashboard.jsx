import React from 'react';
import { Box } from '@mui/material';
import Sidebar from '../../components/Sidebar/Sidebar';
import DataBot from '../DataBot/DataBot';
import DataVisual from '../DataVisual/DataVisual';

export default function Dashboard() {
  return (
    <Box display='flex' height='100vh' width='100%' padding={2} boxSizing='border-box' gap={2}>
      <Box sx={{ width: { xs: '10%', md: '5%' }, minWidth: '100px' }}>
        <Sidebar />
      </Box>

      <Box display='flex' flexGrow={1} gap={2}>
        <Box sx={{ flex: 1 }}>
          <DataBot />
        </Box>
        <Box sx={{ flex: 1 }}>
          <DataVisual />
        </Box>
      </Box>
    </Box>
  );
}
