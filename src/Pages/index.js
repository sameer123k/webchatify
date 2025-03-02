import React from 'react';
import Sidebar from '../Components/sidebar';
import Main from '../Components/main';
import Box from '@mui/material/Box';
import { Grid, Paper } from '@mui/material';

export default function index() {
  return (
    <Grid container spacing={2} padding={2}>
      <Grid item lg={3}>
        <Sidebar />
      </Grid>
      <Grid item lg={9}>
        <Main />
      </Grid>
    </Grid>
  );
}
