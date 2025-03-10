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
import $ from 'jquery';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import SendIcon from '@mui/icons-material/Send';

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

$(window).on('load', function () {
  $('.MessageBox-Right').addClass('checked');
})

export default function main() {
  return (
    <Box className="main-content">

      {/* header  */}
      <Box>
        <Main_header />
      </Box>

      {/* chat box  */}
      <Box>
        <Grid container className="Main-chatBar">

          <Grid item xs={12}>
            <Box className="MessageBox-Left">
              Hey, how’s your day going? 😊
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className="MessageBox-Right">
              Good! Just relaxing, how about you? 😌
              <DoneAllIcon />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className="MessageBox-Left">
              Busy, but almost done with work! 💼
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className="MessageBox-Right">
              Nice! Got any plans for tonight? 🎉
              <DoneAllIcon />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className="MessageBox-Left">
              Just chilling at home, you? 🏡
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className="MessageBox-Right">
              Same here! Let’s catch up soon. 👋
              <DoneAllIcon />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className="MessageBox-Left">
              For sure! Maybe this weekend? 📅
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className="MessageBox-Right">
              Sounds perfect! Let’s plan something fun. 🎈
              <DoneAllIcon />
            </Box>
          </Grid>

        </Grid>
      </Box>

      {/* footer */}
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
              <span className='send_icon'> <SendIcon /></span>
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
