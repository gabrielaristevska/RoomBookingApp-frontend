import React, {useState} from 'react';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {useNavigate} from "react-router";
import EditAccommodationDialog from "../EditAccommodationDialog/EditAccommodationDialog.jsx";
import DeleteAccommodationDialog from "../DeleteAccommodationDialog/DeleteAccommodationDialog.jsx";

const AccommodationCard = ({accommodation, onEdit, onDelete}) => {
    const navigate = useNavigate();
    const [editAccommodationDialogOpen, setEditAccommodationDialogOpen] = useState(false);
    const [deleteAccommodationDialogOpen, setDeleteAccommodationDialogOpen] = useState(false);

    return (
        <>
            <Card sx={{ boxShadow: 3, borderRadius: 2, p: 2 }}>
                <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                        <Box>
                            <Typography variant="h4"> {accommodation.name}</Typography>
                            <Typography variant="body2">
                                {accommodation.numRooms} room(s) available
                            </Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="flex-end" gap={1}>
                            <Button
                                size="small"
                                color="info"
                                startIcon={<InfoIcon />}
                                onClick={() => navigate(`/accommodations/${accommodation.id}`)}
                            >
                                Details
                            </Button>
                            <Button
                                size="small"
                                color="warning"
                                startIcon={<EditIcon />}
                                onClick={() => setEditAccommodationDialogOpen(true)}
                            >
                                Edit
                            </Button>
                            <Button
                                size="small"
                                color="error"
                                startIcon={<DeleteIcon />}
                                onClick={() => setDeleteAccommodationDialogOpen(true)}
                            >
                                Delete
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            <EditAccommodationDialog
                open={editAccommodationDialogOpen}
                onClose={() => setEditAccommodationDialogOpen(false)}
                accommodation={accommodation}
                onEdit={onEdit}
            />
            <DeleteAccommodationDialog
                open={deleteAccommodationDialogOpen}
                onClose={() => setDeleteAccommodationDialogOpen(false)}
                accommodation={accommodation}
                onDelete={onDelete}
            />
        </>
    );
};

export default AccommodationCard;
