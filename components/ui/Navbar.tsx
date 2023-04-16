import { MenuBookOutlined } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import NextLink from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <AppBar position='sticky' elevation={ 0 }>
        <Toolbar>
            <IconButton 
                size='large'
                edge='start'
            >
                <MenuBookOutlined/>
            </IconButton>

            <NextLink href='/' passHref>
                <Typography variant='h6' color='white'>CookieMaster</Typography>
            </NextLink>

            <div style={{ flex: 1 }}/>

            <NextLink href='/theme-changer' passHref>
                <Typography variant='h6' color='white'>Cambiar Tema</Typography>
            </NextLink>

        </Toolbar>
    </AppBar>
  )
}
