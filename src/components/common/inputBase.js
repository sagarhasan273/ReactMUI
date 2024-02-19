import React from 'react';
import { InputBase } from '@mui/material';

const inputBaseStyle = {
    flex: 1,
    backgroundColor: 'inputHouse.main'
}
function inputBase({ placeholder, sx={} }) {
  return (
    <InputBase
        sx={{ ...inputBaseStyle, ...sx }}
        placeholder={placeholder}
        inputProps={{ 'aria-label': `${placeholder}` }}
      />
  )
}

export default inputBase
