import React from 'react'
import { Box } from '@mui/material'
import Headshot from '../assets/images/pexels-anna-shvets-3727464.jpg'


function Footer() {
    return (
        <Box component="img"
            src={Headshot}
            sx={{
                width: "100%",
                height: "auto"
            }}>
        </Box>
    )
}

export default Footer