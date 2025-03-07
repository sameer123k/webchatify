import React from 'react';
import Box from '@mui/material/Box';
import soonImg from '../images/soon.avif';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function main() {
  return (
    <Box class="main-content">
      <Box class="main-header">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} sx={{
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Grid item xs={6}>
              <Box class="header-Left">
                <PeopleAltIcon />
                <h6> Mahesh Kumar Singh</h6>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box class="header-Right">
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                      m: 0,
                    },
                  }}
                >
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
    </Box >
  )
}
