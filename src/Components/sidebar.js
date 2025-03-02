import { Box } from '@mui/material'
import React from 'react';
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function sidebar() {
  return (
    <Box class="Sidebar"> 
      <Box class="sidebar-head"> 
        <h4>Chats</h4>
        <Box>
        <MissedVideoCallIcon/>
        <AddCircleOutlineIcon/>
        </Box>
      </Box>
      
    </Box>
  )
}
