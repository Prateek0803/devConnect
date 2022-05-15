import React from 'react'
import {Typography, AppBar} from "@mui/material"
import "../styles/navbar.css"

const Navbar = () => {
  return (
        <AppBar position = "static" color = "inherit" className = "appBar">
            <Typography variant='h2'>Video Chat</Typography>
        </AppBar>
  )
}

export default Navbar