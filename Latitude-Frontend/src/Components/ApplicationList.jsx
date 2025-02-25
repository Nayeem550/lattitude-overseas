import { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    IconButton,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
} from '@mui/material';
import {
    Email,
    Phone,
    Wc,
    CalendarToday,
    Person,
    Visibility,
    Edit,
    Delete,
} from '@mui/icons-material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ApplicationList = () => {
    const [applications, setApplications] = useState([]);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = () => {
        axios
            .get(`${import.meta.env.VITE_BACKEND_URI}api/applications`)
            .then(response => setApplications(response.data))
            .catch(error => console.error('Error fetching applications:', error));
    };

    const handleDeleteClick = id => {
        setDeleteId(id);
        setDeleteDialogOpen(true);
    };

    const confirmDelete = () => {
        axios
            .delete(`${import.meta.env.VITE_BACKEND_URI}api/applications/${deleteId}`)
            .then(() => {
                setApplications(prev => prev.filter(app => app._id !== deleteId));
                setDeleteDialogOpen(false);
            })
            .catch(error => {
                console.error('Error deleting application:', error);
                setDeleteDialogOpen(false);
            });
    };

    const cancelDelete = () => {
        setDeleteDialogOpen(false);
    };

    return (
        <div className="p-6 space-y-6">
            <Typography variant="h4" className="font-bold text-center text-gray-800">
                Applications List
            </Typography>
            <TableContainer component={Paper} className="shadow-lg rounded-lg">
                <Table sx={{ minWidth: 650 }} aria-label="applications table">
                    <TableHead className="bg-gray-100">
                        <TableRow>
                            <TableCell className="!font-bold text-gray-700">Full Name</TableCell>
                            <TableCell className="!font-bold text-gray-700">Passport No</TableCell>
                            <TableCell className="!font-bold text-gray-700">Sex</TableCell>
                            <TableCell className="!font-bold text-gray-700">
                                Date of Birth
                            </TableCell>
                            <TableCell className="!font-bold text-gray-700">Email</TableCell>
                            <TableCell className="!font-bold text-gray-700">Phone</TableCell>
                            <TableCell className="!font-bold text-gray-700">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {applications.map((application, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    '&:nth-of-type(odd)': {
                                        backgroundColor: '#f9fafb',
                                    },
                                    '&:hover': {
                                        backgroundColor: '#e2e8f0',
                                    },
                                }}
                            >
                                <TableCell>
                                    <Person className="mr-2 text-blue-500" />
                                    {application.fullname}
                                </TableCell>
                                <TableCell>{application.passportNumber}</TableCell>
                                <TableCell>
                                    <Wc className="mr-2 text-purple-500" />
                                    {application.sex}
                                </TableCell>
                                <TableCell>
                                    <CalendarToday className="mr-2 text-green-500" />
                                    {new Date(application.dob).toLocaleDateString()}
                                </TableCell>
                                <TableCell>
                                    <Email className="mr-2 text-red-500" />
                                    {application.email}
                                </TableCell>
                                <TableCell>
                                    <Phone className="mr-2 text-yellow-500" />
                                    {application.phone}
                                </TableCell>
                                <TableCell>
                                    <div className="flex space-x-2">
                                        <Link to={`/application/${application._id}`}>
                                            <IconButton color="primary" size="small">
                                                <Visibility />
                                            </IconButton>
                                        </Link>
                                        <Link to={`/edit-application/${application._id}`}>
                                            <IconButton color="secondary" size="small">
                                                <Edit />
                                            </IconButton>
                                        </Link>
                                        <IconButton
                                            color="error"
                                            size="small"
                                            onClick={() => handleDeleteClick(application._id)}
                                        >
                                            <Delete />
                                        </IconButton>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={deleteDialogOpen} onClose={cancelDelete}>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this application? This action cannot be
                        undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancelDelete}>Cancel</Button>
                    <Button color="error" onClick={confirmDelete}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ApplicationList;
