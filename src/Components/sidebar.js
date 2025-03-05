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
          <a href="#"><MissedVideoCallIcon /></a>
          <a href="#"><AddCircleOutlineIcon /></a>
        </Box>
      </Box>
      <Box class="searchBar">
        <input type="text" placeholder='Search Here...' />
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </Box>
      <Box class="tabs-section">
       
      </Box>

    </Box>
  )
}
