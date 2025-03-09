import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Main_header from '../Components/main_header';
import MicIcon from '@mui/icons-material/Mic';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

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
    <Box className="main-content">

      <Box>
        <Grid container className="Main-chatBar">
          <Grid item xs={12}>
            <Main_header />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container sx={{ display: 'flex', alignItems: 'center' }} className="main-bottom">
          <Grid item xs={1}>
            <Box>
             <a href='#'> <ControlPointIcon /></a>
            </Box>
          </Grid>
          <Grid item xs={10}>
            <Box className="main-searchBar">
              <input type="text" placeholder='Type a message' />
              <EmojiEmotionsIcon />
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box sx={{ float: 'right' }}>
              <a href='#'><MicIcon /></a>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box >
  )
}
