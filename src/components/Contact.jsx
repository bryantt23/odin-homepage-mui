import { Box, Typography } from '@mui/material';
import React from 'react';
import LinkedIn from '../assets/images/LinkedIn_icon_circle.png';
import Github from '../assets/images/github-mark.png';
import Twitter from '../assets/images/twitter-3.svg';

function Contact() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, backgroundColor: "#0791b2", padding: "20px 20px 50px 20px" }}>
            <Typography variant="h3" sx={{ paddingLeft: 1, color: 'white', textAlign: "center" }}>Contact me</Typography>
            <Typography variant="h5" sx={{ paddingLeft: 1, color: 'white' }}>
                Please get in touch if you think our work could be mutually beneficial!
            </Typography>

            <Typography sx={{ paddingLeft: 1, color: 'white' }}>
                1234 Random Road Random Town<br />
                California 12345
            </Typography>

            <Typography sx={{ paddingLeft: 1, color: 'white' }}>
                555-555-5555<br />
                ashleywilliams.is.not.real@gmail.com
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
                <Box component="img"
                    src={Github}
                    sx={{
                        height: 40
                    }}>
                </Box>
                <Box component="img"
                    src={LinkedIn}
                    sx={{
                        height: 40
                    }}>
                </Box>
                <Box component="img"
                    src={Twitter}
                    sx={{
                        height: 40
                    }}>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact