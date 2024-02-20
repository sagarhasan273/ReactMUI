import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '../common/inputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'inputHouse.main' }}
      variant='none'
    >
      <IconButton sx={{ p: '6px' }} type="button" aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ }}
        placeholder="Search here"
      />
    </Paper>
  );
}