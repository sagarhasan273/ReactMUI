import React from 'react';
import { Typography } from '@mui/material';

function AddBillText({text, sx={}}) {
  return (
    <Typography sx={{ fontSize: '14px',...sx}} >
    {text}
  </Typography>
  )
}

export default AddBillText
