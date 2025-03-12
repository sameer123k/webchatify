import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Main_header from '../Components/main_header';
import $ from 'jquery';
import MainFooter from '../Components/mainfooter';
import { Grid } from '@mui/material';
import DoneAllIcon from '@mui/icons-material/DoneAll';


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
      <MainFooter />

    </Box >
  )
}
