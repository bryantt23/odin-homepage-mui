import React from 'react'
import { Box, Typography, Avatar, Hidden } from '@mui/material'
import Github from '../assets/images/github-mark.png'
import LinkedIn from '../assets/images/LinkedIn_icon_circle.png'
import Twitter from '../assets/images/twitter-3.svg'

function About() {
    return (
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
    )
}

export default About