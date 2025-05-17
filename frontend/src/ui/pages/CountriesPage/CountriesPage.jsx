import React, {useState} from 'react';
import {Box, Button, CircularProgress, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import useCountries from "../../../hooks/useCountries.js";
import CountriesGrid from "../../components/countries/CountriesGrid/CountriesGrid.jsx";
import AddCountryDialog from "../../components/countries/AddCountryDialog/AddCountryDialog.jsx";

const CountriesPage = () => {
    const {countries, loading, onAdd, onEdit, onDelete} = useCountries();
    const [addCountryDialogOpen, setAddCountryDialogOpen] = useState(false);
    const [selectedContinent, setSelectedContinent] = useState('');
    const continents = ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Australia'];

    return (
        <>
            <Box className="products-box">
                {loading && (
                    <Box
                        className="progress-box"
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '60vh',
                        }}
                    >
                        <CircularProgress
                            size={80}
                            sx={{ color: '#F48FB1' }}
                        />
                    </Box>
                )}
                {!loading && (
                    <>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                            <FormControl sx={{ minWidth: 200 }}>
                                <InputLabel>Continent</InputLabel>
                                <Select
                                    value={selectedContinent}
                                    onChange={(e) => setSelectedContinent(e.target.value)}
                                    label="Continent"
                                >
                                    <MenuItem value="">All</MenuItem>
                                    {continents.map((continent) => (
                                        <MenuItem key={continent} value={continent}>
                                            {continent}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <Button
                                variant="contained"
                                sx={{ background: '#FBDEE7', color: 'black' }}
                                onClick={() => setAddCountryDialogOpen(true)}
                            >
                                Add Country
                            </Button>
                        </Box>
                        <CountriesGrid countries={
                            selectedContinent
                                ? countries.filter((c) => c.continent === selectedContinent)
                                : countries
                        } onEdit={onEdit} onDelete={onDelete} />
                    </>
                )}
            </Box>
            <AddCountryDialog
                open={addCountryDialogOpen}
                onClose={() => setAddCountryDialogOpen(false)}
                onAdd={onAdd}
            />
        </>
    );
};

export default CountriesPage;

