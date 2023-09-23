import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import { useTheme } from '@emotion/react';

const NavProfile = () => {
    const theme = useTheme(); // Accede al tema
    const Space = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.6pc'
    }
  return (
  <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    height: '400px'
  }}>
      <Box sx={{
        width: '90%',
        border: '1px solid red',
        height: '100%',
        backgroundColor: '#222'
    }}>
        <Box>
            <Box sx={{...Space}}>
                <Box sx={{...Space, flexDirection: 'column', width: '12pc'}}>
                    <Button color='primary' variant='contained' sx={{
                        borderRadius: '20px'
                    }}>
                        Actualizar Avatar
                    </Button>
                    <Avatar sx={{
                        width: '180px',
                        height: '180px',
                        border: '4px solid white'
                    }}/>
                </Box>
                <Box>
                    <Typography component='h5' sx={{
                        fontWeight: 700,
                        fontSize: '2rem'
                    }} >
                    Isabela Mercedes
                    </Typography>
                    <Typography component='h5' sx={{
                        fontWeight: 700,
                        fontSize: '1rem'
                    }}>
                    @isixmerces
                    </Typography>
                    <Box sx={{...Space, background: 'linear-gradient(90deg,#fff 51%,rgba(69,9,121,0))',
                    paddingX: '5pc',
                    display: 'flex',
                    alignItems: 'center',
                    height:'45px'
                }}>
                        <Typography variant="h5" color="initial" sx={{
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        color: theme.palette.primary
                    }}>
                        callingfriends.com/isixmerces
                        </Typography>
                        <Button variant="contained" color='btn' startIcon={<LaunchIcon color='secondary'/>} sx={{
                        borderRadius: '20px',
                        color: '#fff'
                    }}>
                            Compartir
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Box></Box>
    </Box>
  </Box>
  )
}

export default NavProfile