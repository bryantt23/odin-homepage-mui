import React from 'react'
import { Box, Typography, Avatar } from '@mui/material'
import Github from '../assets/images/github-mark.png'
import LinkedIn from '../assets/images/LinkedIn_icon_circle.png'
import Twitter from '../assets/images/twitter-3.svg'

function About() {
    return (
        <Box sx={{ padding: 2, }}>
            <Box>
                <Typography variant="h4" sx={{ textAlign: 'center', paddingBottom: 1 }}>About me</Typography>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: "center",
                padding: 1
            }}>
                <Avatar src={Github} />
                <Avatar src={LinkedIn} sx={{ margin: "0 15px 0 15px" }} />
                <Avatar src={Twitter} />
            </Box>
        </Box>
    )
}

export default About