import { useParams } from 'react-router-dom';
import FileUpload from './FileUpload';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    IconButton,
    Snackbar,
    Alert,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function EditFormPhotos() {
    const { applicationID } = useParams();
    const [applicationData, setApplicationData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const [openDialog, setOpenDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        const fetchApplication = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URI}api/applications/${applicationID}`
                );
                setApplicationData(response.data);
            } catch (err) {
                setErrorMessage('Failed to load application details.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchApplication();
    }, [applicationID]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (errorMessage) {
        return <div>{errorMessage}</div>;
    }

    const handleDeleteClick = imageUrl => {
        setSelectedImage(imageUrl); // Set the selected image to be deleted
        setOpenDialog(true); // Open the confirmation dialog
    };

    const handleDeleteConfirm = async () => {
        try {
            const response = await axios.delete(
                `${
                    import.meta.env.VITE_BACKEND_URI
                }api/upload-form-file/${applicationID}/delete-file/${encodeURIComponent(
                    selectedImage
                )}`
            );

            if (response.status === 200) {
                // Remove the deleted image from the UI
                setApplicationData(prevData => ({
                    ...prevData,
                    applicationFormImages: prevData.applicationFormImages.filter(
                        url => url !== selectedImage
                    ),
                }));
                setSuccessMessage('Image deleted successfully!');
                setSnackbarSeverity('success');
            }
        } catch (err) {
            console.error('Error deleting image:', err);
            setErrorMessage('Failed to delete the image.');
            setSnackbarSeverity('error');
        } finally {
            setSnackbarOpen(true);
            setOpenDialog(false); // Close the dialog after deletion
        }
    };

    const handleDeleteCancel = () => {
        setOpenDialog(false); // Close the dialog without deleting
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    return (
        <div className="space-y-4">
            <FileUpload applicationId={applicationID} />
            {applicationData &&
            applicationData.applicationFormImages &&
            applicationData.applicationFormImages.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {applicationData.applicationFormImages.map((url, index) => (
                        <div key={index} className="relative">
                            <img
                                src={url}
                                alt={`Application Image ${index}`}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                            <IconButton
                                onClick={() => handleDeleteClick(url)}
                                className="absolute top-2 right-2"
                                color="error"
                            >
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    ))}
                </div>
            ) : (
                <div>No images available.</div>
            )}

            {/* Snackbar for success or error messages */}
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbarSeverity}
                    sx={{ width: '100%' }}
                >
                    {successMessage || errorMessage}
                </Alert>
            </Snackbar>

            {/* Confirmation Dialog */}
            <Dialog open={openDialog} onClose={handleDeleteCancel}>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                    <p>Are you sure you want to delete this image?</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteCancel} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDeleteConfirm} color="error">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
