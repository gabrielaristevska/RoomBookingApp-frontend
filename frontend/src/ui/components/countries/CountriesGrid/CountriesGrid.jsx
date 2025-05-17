import React, {useState} from 'react';
import {Box, Grid, Pagination} from "@mui/material";
import CountryCard from "../CountryCard/CountryCard.jsx";

const CountriesGrid = ({ countries, onEdit, onDelete }) => {
    const itemsPerPage = 4;
    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = countries.slice(startIndex, endIndex);

    const totalPages = Math.ceil(countries.length / itemsPerPage);

    return (
        <>
            {currentItems.map((country) => (
                <Box
                    key={country.id}
                    display="flex"
                    justifyContent="center"
                    mb={3}
                >
                    <Box width="50%">
                        <CountryCard
                            country={country}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    </Box>
                </Box>
            ))}

            {totalPages > 1 && (
                <Box display="flex" justifyContent="center" mt={4}>
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handleChange}
                    />
                </Box>
            )}
        </>
    );
};

export default CountriesGrid;

