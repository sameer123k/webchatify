import React from 'react';
import Sidebar from '../Components/sidebar';
import Main from '../Components/main';
import Box from '@mui/material/Box';
import { Grid, Paper } from '@mui/material';

export default function index() {
  return (
    <Box class="Dashboard">
      <Grid container >
        <Grid item lg={4}>
          <Sidebar />
        </Grid>
        <Grid item lg={8}>
          <Main />
        </Grid>
      </Grid>
    </Box>
  );
}
