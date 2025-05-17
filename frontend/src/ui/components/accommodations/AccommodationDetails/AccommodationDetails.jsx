import React from 'react';
import {useNavigate, useParams} from "react-router";
import {
    Box,
    Button,
    CircularProgress,
    Grid,
    Typography,
    Paper,
    Breadcrumbs,
    Link
} from "@mui/material";
import {
    ArrowBack,
} from "@mui/icons-material";
import useAccommodationDetails from "../../../../hooks/useAccommodationDetails.js";

const AccommodationDetails = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const {accommodation, host} = useAccommodationDetails(id);

    if (!accommodation || !host) {
        return (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh'}}>
                <CircularProgress/>
            </Box>
        );
    }

    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumb" sx={{mb: 3}}>
                <Link
                    underline="hover"
                    color="inherit"
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/accommodations");
                    }}
                >
                    Accommodations
                </Link>
                <Typography color="text.primary">{accommodation.name}</Typography>
            </Breadcrumbs>

            <Paper elevation={2} sx={{p: 4, borderRadius: 4}}>
                <Grid container spacing={4}>
                    <Grid size={{xs: 12, md: 12}}>
                        <Box sx={{mb: 3}} textAlign={"center"}>
                            <Typography variant="h3" gutterBottom sx={{fontWeight: 600}}>
                                Name: {accommodation.name}
                            </Typography>

                            <Typography variant="h5" sx={{mb: 3, color:'#F9CBDA', fontWeight:600}}>
                                Category: {accommodation.category}
                            </Typography>

                            <Typography variant="h5" sx={{mb: 3}}>
                                Host: {host.name} {host.surname}
                            </Typography>

                            <Typography variant="subtitle1" sx={{mb: 3}}>
                                {accommodation.numRooms} room(s) available
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={12} display="flex" justifyContent="space-between">
                        <Button
                            variant="outlined"
                            color={"inherit"}
                            startIcon={<ArrowBack/>}
                            onClick={() => navigate("/accommodations")}
                        >
                            Back to Accommodations
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default AccommodationDetails;
