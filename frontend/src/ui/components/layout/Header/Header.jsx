import React from 'react';
import { Link } from "react-router";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import "./Header.css";

const pages = [
    { path: "/", name: "Home" },
    { path: "/accommodations", name: "Accommodations" },
    { path: "/hosts", name: "Hosts" },
    { path: "/countries", name: "Countries" }
];

const Header = () => {
    return (
        <Box>
            <AppBar
                position="static"
                elevation={2}
                sx={{
                    backgroundColor: "#FBDEE7",
                    color: "#333",
                    borderBottom: '1px solid #e0e0e0'
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <img src="https://www.pngall.com/wp-content/uploads/5/Hotel-PNG-Clipart.png" alt="RoomBookingApp Logo" style={{ height: 40 }} />
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                component={Link}
                                to={page.path}
                                sx={{
                                    color: "#333",
                                    textTransform: "capitalize",
                                    fontWeight: 700,
                                    '&:hover': {
                                        backgroundColor: "#f0f0f0"
                                    }
                                }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    <Button
                        variant="outlined"
                        color="primary"
                        sx={{
                            textTransform: 'capitalize',
                            borderColor: 'black',
                            color: 'black',
                            '&:hover': {
                                backgroundColor: '#e3f2fd',
                                borderColor: '#1565c0'
                            }
                        }}
                    >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
