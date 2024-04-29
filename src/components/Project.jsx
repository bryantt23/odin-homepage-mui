import React from 'react'
import { Box, Typography, Grid, Card, Avatar } from '@mui/material'
import Github from '../assets/images/github-mark.png'
import LaunchIcon from '@mui/icons-material/Launch';

function Project({ color }) {
    return (
        <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
            <Card variant="elevation" sx={{ margin: 1 }}>
                <Box sx={{ backgroundColor: color, height: 300, alignContent: 'center', textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ color: 'white' }}>screenshot of project</Typography>
                </Box>
                <Box sx={{ height: 200, padding: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h5" sx={{ paddingLeft: 1 }}>Project name</Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Box component="img"
                                src={Github}
                                sx={{
                                    height: 30
                                }}>
                            </Box>
                            <LaunchIcon
                                sx={{
                                    fontSize: 30
                                }} />
                        </Box>
                    </Box>
                    <Typography sx={{ padding: 1 }}>
                        Short description of the project. Just a couple sentences will do.
                    </Typography>
                </Box>
            </Card>
        </Grid>
    )
}

export default Project