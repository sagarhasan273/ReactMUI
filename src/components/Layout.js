import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './common/Navbar';

function Layout() {
  return (
   <Box>
    <Navbar />
    <Outlet />
   </Box>
  )
}

export default Layout
