import React from 'react'
import { Box, Grid } from '@mui/material'
import Headshot from '../assets/images/pexels-anna-shvets-3727464.jpg'
import Contact from './Contact'

function Footer() {
    return (
        <Grid container sx={{ backgroundColor: "#0791b2" }}>
            <Grid item md={6} xs={12}>
                <Contact />
            </Grid>
            <Grid item md={6} xs={12}>
                <Box component="img"
                    src={Headshot}
                    sx={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%"
                    }}>
                </Box></Grid>
        </Grid>
    )
}

export default Footer