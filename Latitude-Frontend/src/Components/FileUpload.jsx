import { useState } from 'react';
import axios from 'axios';
import { Button, CircularProgress, Typography, Box, TextField } from '@mui/material';

const SimpleFileUpload = ({ applicationId }) => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleFileChange = event => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
            const maxSizeInBytes = 5 * 1024 * 1024; // 5MB

            if (!allowedTypes.includes(selectedFile.type)) {
                setError('Invalid file type. Only JPG, PNG, and PDF files are allowed.');
                setFile(null);
                return;
            }

            if (selectedFile.size > maxSizeInBytes) {
                setError('File size exceeds the 5MB limit.');
                setFile(null);
                return;
            }

            setFile(selectedFile);
            setError('');
            setSuccess('');
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setError('Please select a file first.');
            return;
        }

        if (!applicationId) {
            setError('Application ID is missing.');
            return;
        }

        setLoading(true);
        setError('');
        setSuccess('');

        const formData = new FormData();
        formData.append('applicationFormImage', file);

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URI}api/upload-form-file/${applicationId}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            setSuccess(response.data.message || 'File uploaded successfully!');
            setFile(null); // Clear file input on success
        } catch (err) {
            console.error('Error uploading file:', err);

            if (err.response?.data?.error) {
                setError(err.response.data.error);
            } else {
                setError('An unexpected error occurred while uploading the file.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <TextField
                type="file"
                onChange={handleFileChange}
                inputProps={{ accept: '.jpg,.jpeg,.png,.pdf' }}
            />

            {file && (
                <Typography variant="body2" color="textPrimary">
                    Selected file: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </Typography>
            )}

            {error && (
                <Typography variant="body2" color="error" sx={{ textAlign: 'center' }}>
                    {error}
                </Typography>
            )}

            {success && (
                <Typography variant="body2" color="success.main" sx={{ textAlign: 'center' }}>
                    {success}
                </Typography>
            )}

            <Button
                variant="contained"
                color="primary"
                onClick={handleUpload}
                disabled={loading || !file}
                startIcon={loading && <CircularProgress size={20} color="inherit" />}
            >
                {loading ? 'Uploading...' : 'Upload File'}
            </Button>

            <div>
                
            </div>
        </Box>
    );
};

export default SimpleFileUpload;
