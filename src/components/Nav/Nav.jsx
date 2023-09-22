import { AppBar, Avatar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import NavDrawer from "./NavDrawer"
import { useState } from "react"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Nav = () => {
    const [open, setOpen] = useState(false)
    const Space = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.6pc'
    }
    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Box
                        component='img'
                        src="https://callingfriends.com/assets/main.webp"
                        alt="Imagen del logo de la cosa esta"
                        sx={{
                            height: '70px',
                            borderRadius: 'none'
                        }}
                    />
                    <Box sx={{ ...Space, display: { xs: 'none', sm: 'flex' } }}>
                        <Button sx={Space}>
                            <MonetizationOnOutlinedIcon color='secondary' />
                            <Typography component='p' color='secondary' sx={{
                                fontWeight: 700,
                                height: '1.3pc'
                            }}>
                                APUESTA
                            </Typography>
                        </Button>
                        <Button sx={Space}>
                            <Avatar
                                src="https://lh3.googleusercontent.com/ogw/AKPQZvyvpVoQwUs5AH5ZSWoQa8T4jiJSV3McCoqFJzgk=s32-c-mo"
                                alt='Foto de Perfil'
                                sx={{
                                    width: '30px',
                                    height: '30px',
                                    border: '2px solid white'
                                }}
                            />
                            <Typography component='p' color='secondary' sx={{
                                fontWeight: 700,
                                height: '1.3pc'
                            }}>
                                PERFIL
                            </Typography>
                        </Button>
                        <Button sx={Space}>
                            <ExitToAppOutlinedIcon color='secondary' />
                            <Typography component='p' color='secondary' sx={{
                                fontWeight: 700,
                                height: '1.3pc'
                            }}>
                                SALIR
                            </Typography>
                        </Button>
                    </Box>
                    <IconButton sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <MenuOutlinedIcon color="secondary" onClick={() => setOpen(true)} />
                    </IconButton>
                </Toolbar>
            </AppBar >
            <Drawer open={open}
                anchor="left"
                onClose={() => setOpen(false)}
            >
                <NavDrawer />
            </Drawer>
        </>
    )
}

export default Nav
