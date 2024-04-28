import React from 'react'
import Headshot from '../assets/images/pexels-anna-shvets-3727474.jpg'
import { Box, Typography, Grid } from '@mui/material'
import About from './About'

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
                <About />
            </Grid>
        </Grid>
    )
}

export default Header