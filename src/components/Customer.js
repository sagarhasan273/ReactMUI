import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Customer() {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={5}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={5} md={3}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={5} md={3}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={2} md={1}>
        <Button
              size="small"
              sx={{
                height: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
              variant="contained"
              color="primary"
              
              fullWidth
            >
              <AddIcon /><Typography sx={{ fontSize: "14px" }}>ADD</Typography></Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Customer;
