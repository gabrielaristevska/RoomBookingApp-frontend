import React, {useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import EditHostDialog from "../EditHostDialog/EditHostDialog.jsx";
import DeleteHostDialog from "../DeleteHostDialog/DeleteHostDialog.jsx";

const HostCard = ({host, onEdit, onDelete}) => {
    const [editHostDialogOpen, setEditHostDialogOpen] = useState(false);
    const [deleteHostDialogOpen, setDeleteHostDialogOpen] = useState(false);

    return (
        <>
            <Card sx={{boxShadow: 3, borderRadius: 2}}>
                <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                        <Box>
                            <Typography variant="h5"> {host.name} {host.surname}</Typography>
                        </Box>
                        <Box display="flex" alignItems="flex-end" gap={1}>
                            <Button
                                size="small"
                                color="warning"
                                startIcon={<EditIcon/>}
                                onClick={() => setEditHostDialogOpen(true)}
                            >
                                Edit
                            </Button>
                            <Button
                                size="small"
                                color="error"
                                startIcon={<DeleteIcon/>}
                                onClick={() => setDeleteHostDialogOpen(true)}
                            >
                                Delete
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            <EditHostDialog
                open={editHostDialogOpen}
                onClose={() => setEditHostDialogOpen(false)}
                host={host}
                onEdit={onEdit}
            />
            <DeleteHostDialog
                open={deleteHostDialogOpen}
                onClose={() => setDeleteHostDialogOpen(false)}
                host={host}
                onDelete={onDelete}
            />
        </>
    );
};

export default HostCard;
