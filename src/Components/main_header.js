import React from 'react';
import { Box } from '@mui/system';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function main_header() {
  return (
    <Box className="main-header">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Grid item xs={6}>
            <Box className="header-Left">
              <PeopleAltIcon />
              <Box>
                <h6> Mahesh Kumar Singh</h6>
                <span>Online</span>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className="header-Right">
              <Box>
                <ButtonGroup variant="text" aria-label="Basic button group">
                  <Button>  <MissedVideoCallIcon /></Button>
                  <Button>    <SearchIcon /></Button>
                  <Button>  <MoreVertIcon /></Button>
                </ButtonGroup>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
