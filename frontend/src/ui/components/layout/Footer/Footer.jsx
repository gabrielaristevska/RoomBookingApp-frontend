import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#FBDEE7',
                py: 2,
                textAlign: 'center',
                mt: 'auto'
            }}
        >
            <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} RoomBookingApp. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;