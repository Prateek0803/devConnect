import React, { useContext, useState }                          from 'react'
import { Grid,Typography, Paper, TextField, Container, Button } from '@mui/material'
import {CopyToClipboard}                                        from "react-copy-to-clipboard"
import {Assignment, Phone, PhoneDisabled}                       from "@mui/icons-material"
import { SocketContext }                                        from '../socketContext'
import "../styles/options.css"
const Options = ({children}) => {
  const {me, callAccepted, name, setName, leaveCall, callUser, callEnded} = useContext(SocketContext)
  const [idToCall, setIdToCall]                                           = useState('')
  return (
    <Container className = "container">
      <Paper elevation={10} className = "paper">
        <form noValidate autoComplete='off' className='root'>
            <Grid container className="gridContainer">
              <Grid item xs={12} md={6} className = "padding">
                <Typography gutterBottom variant="h6">Account Info</Typography>
                <TextField label="name" value={name} onChange = {(e) => setName(e.target.value)} fullWidth />
                <CopyToClipboard text={me} className="margin" >
                    <Button fullWidth variant='contained' color='primary' startIcon={<Assignment />} className="margin">
                      Copy your ID
                    </Button>
                </CopyToClipboard>
              </Grid>
              <Grid item xs={12} md={6} className = "padding">
                <Typography gutterBottom variant="h6">Make a call</Typography>
                <TextField label="To call" value={idToCall} onChange = {(e) => setIdToCall(e.target.value)} fullWidth />
                {
                  callAccepted && !callEnded ? (
                    <Button color='secondary' variant='contained' fullWidth onClick={leaveCall} startIcon={<PhoneDisabled />} className="margin"> 
                      Hang Up
                    </Button>
                  ) : (
                    <Button color = "success" variant='contained' fullWidth onClick={() =>callUser(idToCall)} startIcon={<Phone />} className="margin">
                      Call
                    </Button>
                  )
                }
              </Grid>
            </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  )
}

export default Options