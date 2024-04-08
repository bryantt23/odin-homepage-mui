import React from 'react'
import Headshot from '../assets/images/pexels-anna-shvets-3727474.jpg'
import { Box, Typography, CardMedia } from '@mui/material'

function Header() {
    return (
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
            <Typography
                variant="h2"
                sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: 30,
                    color: 'white',
                    outline: 'black',
                }}
            >Ashley Williams</Typography>
        </Box>
    )
}

export default Header