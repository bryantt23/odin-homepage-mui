import React from 'react'
import Headshot from '../assets/images/pexels-anna-shvets-3727474.jpg'
import { Box, Typography, } from '@mui/material'

function Header() {
    return (
        <Box sx={{
            background: `linear-gradient(
                165deg, 
                #0791b2 50%, 
                transparent 50%
            )`
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: "column",
                alignItems: 'center',
                padding: 2,
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
                        bottom: 20,
                        left: 30,
                        color: 'white',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    }}>
                    <Typography variant="h2">
                        Ashley Williams
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Header