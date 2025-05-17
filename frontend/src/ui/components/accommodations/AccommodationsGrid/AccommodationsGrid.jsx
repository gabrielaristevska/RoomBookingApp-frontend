import React, { useState } from 'react';
import { Box, Pagination } from "@mui/material";
import AccommodationCard from "../AccommodationCard/AccommodationCard.jsx";

const AccommodationsGrid = ({ accommodations, onEdit, onDelete }) => {
    const itemsPerPage = 2;
    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = accommodations.slice(startIndex, endIndex);

    const totalPages = Math.ceil(accommodations.length / itemsPerPage);

    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="60vh"
            justifyContent="space-between"
        >
            <Box flexGrow={1}>
                {currentItems.map((accommodation) => (
                    <Box
                        key={accommodation.id}
                        display="flex"
                        justifyContent="center"
                        mb={3}
                    >
                        <Box width="50%">
                            <AccommodationCard
                                accommodation={accommodation}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        </Box>
                    </Box>
                ))}
            </Box>

            <Box display="flex" justifyContent="center" mt={2} mb={3}>
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handleChange}
                />
            </Box>
        </Box>
    );
};

export default AccommodationsGrid;