import React from 'react'
import {Box, Link, Typography} from '@mui/material'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <Box width={'100%'} p="1rem 6%" textAligh={'center'} sx={{boxShadow:3, mb:2, bgcolor:'purple', color:'white'}}>
      <Typography variant="h1" color={"white"} fontWeight="bold">  
        AI GPT3 Clone
      </Typography>
      <NavLink to="/register" p={1}>
        Sign up
      </NavLink>
      <NavLink to="/login" p={1}>
        Sign In
      </NavLink>
    </Box>
  )
}

export default Navbar
