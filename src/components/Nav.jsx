import { Box, Button, Typography } from "@mui/material"

const Nav = () => {
    return (
        <Box component='nav'>
            <Box component='img' src='https://callingfriends.com/assets/main.webp' />
            <Box component='div'>
                <Typography>SALIR
                </Typography>
                <Typography>APUESTAS</Typography>
                <Box component='div'>
                    <Box component='img' src='https://api-callingfriends.cmc-software.com/src/assets/images/1695345895676pf86002300.webp'></Box>
                    <Typography>MI PERFIL</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Nav
