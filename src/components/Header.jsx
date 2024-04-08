import React from 'react'
import Headshot from '../assets/images/pexels-anna-shvets-3727474.jpg'
import { Box, Typography, CardMedia } from '@mui/material'

function Header() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            padding: 2
        }}>
            <Box component="img" src={Headshot} sx={{ width: "100%" }}></Box>
            <Typography variant="h2">Ashley Williams</Typography>
        </Box>
    )
}

export default Header