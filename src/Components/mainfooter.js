import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SendIcon from '@mui/icons-material/Send';


export default function mainfooter() {
    return (
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
    );
}
