import React from 'react'
import Headshot from '../assets/images/pexels-anna-shvets-3727474.jpg'
import { Box, Typography, Grid, Avatar, Hidden } from '@mui/material'
import Github from '../assets/images/github-mark.png'
import LinkedIn from '../assets/images/LinkedIn_icon_circle.png'
import Twitter from '../assets/images/twitter-3.svg'

function Header() {
    return (
        <Grid container sx={{
            background: `linear-gradient(
                165deg, 
                #0791b2 50%, 
                transparent 50%
            )`
        }}>
            <Grid item xs={12} md={6}>
                <Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: "column",
                        alignItems: 'center',
                        padding: 3,
                        position: 'relative',
                    }}>

                        <Box component="img"
                            src={Headshot}
                            sx={{
                                width: "100%",
                            }}>
                        </Box>
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 25,
                                left: 35,
                                color: 'white',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                            }}>
                            <Typography variant="h2">
                                Ashley Williams
                            </Typography>
                        </Box>
                    </Box>
                </Box></Grid>
            <Grid item xs={12} md={6}>
                <Box sx={{ padding: 2 }}>
                    <Box sx={{ padding: 2, backgroundColor: 'white' }}>
                        <Typography variant="h4" sx={{ textAlign: 'center', paddingBottom: 1 }}>About me</Typography>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                    </Box>
                    <Hidden smUp>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: "center",
                            padding: 1,
                            gap: 2
                        }}>
                            <Avatar src={Github} />
                            <Avatar src={LinkedIn} />
                            <Avatar src={Twitter} />
                        </Box>
                    </Hidden>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Header