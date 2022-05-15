import React, { useContext }                      from 'react'
import {Grid,Typography,Paper}    from '@mui/material'
import {makeStyles}               from "@mui/styles"

import { SocketContext }          from '../socketContext';
import "../styles/video.css"


const VideoPlayer = () => {
 const {name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext)
  return (
      <Grid container className='gridContainer'>

        {
          stream &&(
            <Paper className='paper'>
                <Grid item xs={12} md={6}>
                  <Typography variant='h5' gutterBottom>{name || 'Name'}</Typography>
                  <video playsInline autoPlay muted ref={myVideo} className = 'video' />
                </Grid>
            </Paper>
          )
        }
        {
          callAccepted && !callEnded && (
              <Paper className='paper'>
                  <Grid item xs={12} md={6}>
                    <Typography variant='h5' gutterBottom>{call.name}</Typography>
                    <video playsInline autoPlay ref={userVideo} className = 'video' />
                  </Grid>
              </Paper>
          )
        }
      </Grid>
  )
}

export default VideoPlayer