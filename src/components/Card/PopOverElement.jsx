import React, { useState } from 'react';
import { Box, Typography, Popover, MenuItem, MenuList, TextField, ClickAwayListener, Paper } from '@mui/material';

const PopOverElement = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState('Clothing Sales');

  const dataOptions = ['SUPPLIER_references', 'NATION_references_REGION', 'ORDERS_references_CUSTOMER', 'data_lake'];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (value) => {
    setSelected(value);
    handleClose();
  };

  const filteredOptions = dataOptions.filter((item) => item.toLowerCase().includes(search.toLowerCase()));

  return (
    <Box>
      <Typography
        variant='subtitle1'
        sx={{ cursor: 'pointer', color: '#2043DF', display: 'inline' }}
        onClick={handleClick}
      >
        Connected Data: <strong>{selected}</strong> ▼
      </Typography>

      {/* Popover */}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        // component={Paper}
        sx={{
          p: 1,
          minWidth: 200,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Box>
            <TextField
              variant='standard'
              placeholder='Search Data'
              fullWidth
              sx={{ px: 1, pb: 1 }}
              InputProps={{
                disableUnderline: true,
                sx: { fontSize: '14px', p: 1, borderBottom: '1px solid #ddd' },
              }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <MenuList>
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <MenuItem
                    key={index}
                    selected={option === selected}
                    onClick={() => handleSelect(option)}
                    sx={{
                      fontSize: '14px',
                      whiteSpace: 'nowrap',
                      '&.Mui-selected': { backgroundColor: '#f0f0f0', fontWeight: 'bold' },
                    }}
                  >
                    {option}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>No results found</MenuItem>
              )}
            </MenuList>
          </Box>
        </ClickAwayListener>
      </Popover>
    </Box>
  );
};

export default PopOverElement;
