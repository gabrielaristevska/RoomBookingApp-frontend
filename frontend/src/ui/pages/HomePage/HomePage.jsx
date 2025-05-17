import React from 'react';
import { Box, Container, Typography, Button, Paper } from "@mui/material";
import HotelIcon from '@mui/icons-material/Hotel';

const HomePage = () => {
    return (
        <Box
            sx={{
                minHeight: '65vh',
                backgroundColor: '#f5f5f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: 4,
            }}
        >
            <Container maxWidth="md">
                <Paper
                    elevation={4}
                    sx={{
                        p: 5,
                        borderRadius: 3,
                        textAlign: 'center',
                        background: 'white',
                    }}
                >
                    <HotelIcon sx={{ fontSize: 60, color: 'black', mb: 2 }} />
                    <Typography variant="h3" gutterBottom>
                        Welcome to Room Booking App! 👋
                    </Typography>
                    <Typography variant="h6" color="textSecondary" sx={{ mb: 4 }}>
                        Find and manage accommodations with ease. Whether you're a host or a guest,
                        everything you need is just a click away.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        href="/accommodations/by-host"
                        sx={{
                            background:'#FBDEE7',
                            color:'black'
                        }}
                    >
                        Check out the distribution of accommodations by host
                    </Button>
                </Paper>
            </Container>
        </Box>
    );
};

export default HomePage;