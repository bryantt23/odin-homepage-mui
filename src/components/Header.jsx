import React from 'react';
import { Box, Typography, Avatar, Hidden, useMediaQuery, useTheme, } from '@mui/material';
import Headshot from '../assets/images/pexels-anna-shvets-3727474.jpg';
import Github from '../assets/images/github-mark.png';
import LinkedIn from '../assets/images/LinkedIn_icon_circle.png';
import Twitter from '../assets/images/twitter-3.svg';

function Header() {
    const theme = useTheme();
    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box sx={{
            background: `linear-gradient(165deg, #0791b2 50%, transparent 50%)`,
            display: 'flex',
            flexDirection: isSmUp ? 'row' : 'column',
            alignItems: 'center',
            padding: 3
        }}>
            <Box sx={{
                position: 'relative',
                width: isSmUp ? '50%' : '100%',
            }}>
                <Box component="img" src={Headshot} sx={{ width: "100%" }} />

                <Hidden smUp>
                    <Box sx={{
                        position: 'absolute',
                        bottom: 25,
                        left: 35,
                        color: 'white',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    }}>
                        <Typography variant="h2">Ashley Williams</Typography>
                    </Box>
                </Hidden>
            </Box>

            <Box sx={{ width: isSmUp ? '50%' : '100%', backgroundColor: 'white', padding: 2 }}>
                <Hidden smDown>
                    <Box sx={{
                        display: 'flex',
                        position: 'absolute',
                        top: 75,
                        right: 100,
                        color: 'white',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                        justifyContent: 'flex-end'
                    }}>
                        <Typography variant="h2" textAlign="right">Ashley Williams</Typography>
                    </Box>
                </Hidden>
                <Typography variant="h4" sx={{ textAlign: 'center', paddingBottom: 1 }}>About me</Typography>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>

                <Hidden only={["sm"]}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: { xs: "center", lg: 'flex-end' },
                        padding: 1,
                        gap: 2,
                        width: '100%'  // Ensure full width for centering on small screens
                    }}>
                        <Avatar src={Github} />
                        <Avatar src={LinkedIn} />
                        <Avatar src={Twitter} />
                    </Box>
                </Hidden>
            </Box>

        </Box>
    );
}

export default Header;
