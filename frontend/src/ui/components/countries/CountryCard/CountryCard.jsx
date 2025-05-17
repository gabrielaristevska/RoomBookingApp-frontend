import React, {useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import EditCountryDialog from "../EditCountryDialog/EditCountryDialog.jsx";
import DeleteCountryDialog from "../DeleteCountryDialog/DeleteCountryDialog.jsx";

const CountryCard = ({country, onEdit, onDelete}) => {
    const [editCountryDialogOpen, setEditCountryDialogOpen] = useState(false);
    const [deleteCountryDialogOpen, setDeleteCountryDialogOpen] = useState(false);

    return (
        <>
            <Card sx={{boxShadow: 3, borderRadius: 2}}>
                <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                        <Box>
                            <Typography variant="h5"> {country.name}, {country.continent}</Typography>
                        </Box>
                        <Box display="flex" alignItems="flex-end" gap={1}>
                            <Button
                                size="small"
                                color="warning"
                                startIcon={<EditIcon/>}
                                onClick={() => setEditCountryDialogOpen(true)}
                            >
                                Edit
                            </Button>
                            <Button
                                size="small"
                                color="error"
                                startIcon={<DeleteIcon/>}
                                onClick={() => setDeleteCountryDialogOpen(true)}
                            >
                                Delete
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            <EditCountryDialog
                open={editCountryDialogOpen}
                onClose={() => setEditCountryDialogOpen(false)}
                country={country}
                onEdit={onEdit}
            />
            <DeleteCountryDialog
                open={deleteCountryDialogOpen}
                onClose={() => setEditCountryDialogOpen(false)}
                country={country}
                onDelete={onDelete}
            />
        </>
    );
};

export default CountryCard;
