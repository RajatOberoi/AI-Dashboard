import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';
import Icons from '../Icons/Icons';
import GoldIcon from '../../assets/GoldIcon.svg';

const SearchBar = ({ height = 'auto' }) => {
  const [query, setQuery] = useState('');

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '30px',
        backgroundColor: '#f8f8f8',
        padding: '5px',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
        width: '100%',
        height: height,
        minHeight: 50, // Ensures it is not too small
      }}
    >
      <TextField
        fullWidth
        placeholder='Ask your AI for data summary...'
        variant='standard'
        slotProps={{
          input: {
            disableUnderline: true,
            sx: { paddingLeft: '20px', borderRadius: '30px' },
          },
        }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Icons
        height={40} // Fixed button height
        width='auto'
        backgroundColor='black'
        text='Search'
        color='white'
        borderRadius='30px'
        textPosition='right'
        padding='5px 15px'
        icon={
          <Box display='flex' alignItems='center' justifyContent='center'>
            <img alt='search icon' src={GoldIcon} height='20px' width='20px' />
          </Box>
        }
      />
    </Box>
  );
};

export default SearchBar;
