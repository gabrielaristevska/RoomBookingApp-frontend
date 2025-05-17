import React, {useState} from 'react';
import {Box, Button, CircularProgress, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import "./AccommodationsPage.css";
import useAccommodations from "../../../hooks/useAccommodations.js";
import AccommodationsGrid from "../../components/accommodations/AccommodationsGrid/AccommodationsGrid.jsx";
import AddAccommodationDialog from "../../components/accommodations/AddAccommodationDialog/AddAccommodationDialog.jsx";
import useCategories from "../../../hooks/useCategories.js";

const AccommodationsPage = () => {
    const {accommodations, loading, onAdd, onEdit, onDelete} = useAccommodations();
    const [addAccommodationDialogOpen, setAddAccommodationDialogOpen] = useState(false);
    const categories = useCategories();
    const [selectedCategory, setSelectedCategory] = useState('');

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
                {!loading &&
                    <>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                            <FormControl sx={{ minWidth: 200 }}>
                                <InputLabel>Category</InputLabel>
                                <Select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    label="Category"
                                >
                                    <MenuItem value="">All</MenuItem>
                                    {categories.map((category) => (
                                        <MenuItem key={category} value={category}>
                                            {
                                                category
                                            }
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <Button
                                variant="contained"
                                sx={{ background: '#FBDEE7', color: 'black' }}
                                onClick={() => setAddAccommodationDialogOpen(true)}
                            >
                                Add Accommodation
                            </Button>
                        </Box>
                        <AccommodationsGrid accommodations={
                            selectedCategory
                                ? accommodations.filter((c) => c.category === selectedCategory)
                                : accommodations
                        } onEdit={onEdit} onDelete={onDelete}/>
                    </>}
            </Box>
            <AddAccommodationDialog
                open={addAccommodationDialogOpen}
                onClose={() => setAddAccommodationDialogOpen(false)}
                onAdd={onAdd}
            />
        </>
    );
};

export default AccommodationsPage;

