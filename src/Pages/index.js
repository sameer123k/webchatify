import React from 'react';
import Sidebar from '../Components/sidebar';
import Main from '../Components/main';
import Box from '@mui/material/Box';
import { Button, Grid, Paper } from '@mui/material';
import { Hidden } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';


export default function index() {
  return (
    <><Box className="Dashboard" >
      {/* mobile view hidden  */}
      <Hidden smDown>
        <Grid container>
          <Grid item lg={4} sm={12}>
            <Sidebar />
          </Grid>
          <Grid item lg={8} sm={12}>
            <Main />
          </Grid>
        </Grid>
      </Hidden>
    </Box>
      {/* hidden desktop view  */}
      <Box className="mobile-View">
        <Hidden mdUp>
          <Button startIcon={<WarningIcon />} variant={'contained'} color={'secondary'} size={'large'} >Only Support Desktop View</Button>
        </Hidden>
      </Box></>
  );
}
