import { Box, Typography, useTheme } from "@mui/material";
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

const Nav = () => {
    const theme = useTheme(); // Accede al tema

    return (
        <Box component="nav" sx={{
            background: theme.palette.background.paper,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '24px',
            height: '24px'
        }}>
            <Box component="img" src="https://callingfriends.com/assets/main.webp" sx={{
                height: '70px'
            }} />
            <Box component="div" sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1pc'
            }}>
                <Typography sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                }} > <PaidOutlinedIcon /> APUESTAS</Typography>
                <Typography >SALIR</Typography>
                <Box component="div" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1pc'
                }}>
                    <Box component="img" src="https://api-callingfriends.cmc-software.com/src/assets/images/1695345895676pf86002300.webp" sx={{
                        width: '30px',
                        borderRadius: '50%',
                        border: '2px solid white'
                    }} />
                    <Typography>MI PERFIL

                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Nav;
