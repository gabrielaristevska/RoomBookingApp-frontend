import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, CircularProgress, Paper, Typography } from '@mui/material';
import useHostsByAccommodation from "../../../../hooks/useHostsByAccommodation.js";

const AccommodationsChart = () => {
    const { data, loading, error } = useHostsByAccommodation();

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height={300}>
                <CircularProgress color="secondary" />
            </Box>
        );
    }

    if (error) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height={300}>
                <Typography color="error">Error loading data: {error.message}</Typography>
            </Box>
        );
    }

    if (data.length === 0) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height={300}>
                <Typography>No data available.</Typography>
            </Box>
        );
    }

    const hostIds = data.map((entry) => entry.hostId);
    const accommodationCounts = data.map((entry) => entry.numAccommodations);

    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
                Accommodations by Host
            </Typography>
            <BarChart
                xAxis={[{ scaleType: 'band', data: hostIds, label: 'Host ID' }]}
                series={[{ data: accommodationCounts, label: 'Number of accommodations' }]}
                width={700}
                height={400}
            />
        </Paper>
    );
};

export default AccommodationsChart;