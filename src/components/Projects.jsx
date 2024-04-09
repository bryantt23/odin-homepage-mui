import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import Project from './Project'

function Projects() {
    const projects = [
        { id: 1, color: "#7c75ca" },
        { id: 2, color: "#d88f39" },
        { id: 3, color: "#5e8f4d" },
        { id: 4, color: "#ca7599" },
        { id: 5, color: "#4592d9" },
        { id: 6, color: "#5e8f4d " },
    ]
    return (
        <Box sx={{ padding: 2, }}>
            <Box>
                <Typography variant="h4" sx={{ textAlign: 'center', paddingBottom: 1 }}>Projects</Typography>
            </Box>
            <Grid container>
                {projects.map(project => <Project key={project.id} color={project.color} />)}
            </Grid>


        </Box>
    )
}

export default Projects