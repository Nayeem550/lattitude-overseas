import { useEffect, useState } from 'react';
import {
    TextField,
    Button,
    Grid,
    Typography,
    Box,
    CircularProgress,
    Snackbar,
    Alert,
} from '@mui/material';
import Section from '../Components/Section';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditApplicationStatus() {
    const { applicationID } = useParams();
    const initialFormData = {
        status: '',
        bodyDetails: '',
        footerDetails: '',
        payBtnText: '', // New field added
    };

    const [formData, setFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchApplication = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URI}api/applications/${applicationID}`
                );
                const applicationData = response.data;

                // Format the date fields if necessary
                if (applicationData.dob) {
                    applicationData.dob = new Date(applicationData.dob).toISOString().split('T')[0];
                }

                setFormData(applicationData);
            } catch (err) {
                setErrorMessage('Failed to load application details.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchApplication();
    }, [applicationID]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        try {
            const response = await axios.put(
                `${import.meta.env.VITE_BACKEND_URI}api/applications/${applicationID}`,
                formData
            );
            console.log(response.data.message);
            setSuccessMessage('Application updated successfully!');
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
                setErrorMessage(`Error: ${error.response.data.error}`);
            } else if (error.request) {
                console.error('Error request:', error.request);
                setErrorMessage('Error: No response from server.');
            } else {
                console.error('Error message:', error.message);
                setErrorMessage(`Error: ${error.message}`);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Section>
            <div className="flex justify-center py-10">
                <Box
                    sx={{
                        backgroundColor: 'white',
                        padding: 4,
                        borderRadius: 2,
                        boxShadow: 3,
                        width: '100%',
                        maxWidth: 800,
                    }}
                >
                    <Typography variant="h4" gutterBottom align="center">
                        Application Form
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {/* Status */}
                            <Grid item xs={12}>
                                <TextField
                                    label="Status"
                                    variant="outlined"
                                    fullWidth
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                />
                            </Grid>

                            {/* Body Details */}
                            <Grid item xs={12}>
                                <TextField
                                    label="Body Details"
                                    variant="outlined"
                                    fullWidth
                                    name="bodyDetails"
                                    value={formData.bodyDetails}
                                    onChange={handleChange}
                                    multiline
                                    rows={4}
                                />
                            </Grid>

                            {/* Footer Details */}
                            <Grid item xs={12}>
                                <TextField
                                    label="Footer Details"
                                    variant="outlined"
                                    fullWidth
                                    name="footerDetails"
                                    value={formData.footerDetails}
                                    onChange={handleChange}
                                    multiline
                                    rows={4}
                                />
                            </Grid>

                            {/* Pay Button Text */}
                            <Grid item xs={12}>
                                <TextField
                                    label="Pay Button Text"
                                    variant="outlined"
                                    fullWidth
                                    name="payBtnText"
                                    value={formData.payBtnText}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>

                        <div className="flex justify-center my-4">
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={loading}
                                fullWidth
                            >
                                {loading ? (
                                    <CircularProgress size={24} color="inherit" />
                                ) : (
                                    'Submit'
                                )}
                            </Button>
                        </div>
                    </form>
                </Box>
            </div>

            {/* Success & Error Snackbar */}
            <Snackbar
                open={successMessage !== ''}
                autoHideDuration={3000}
                onClose={() => setSuccessMessage('')}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    {successMessage}
                </Alert>
            </Snackbar>

            <Snackbar
                open={errorMessage !== ''}
                autoHideDuration={3000}
                onClose={() => setErrorMessage('')}
            >
                <Alert severity="error" sx={{ width: '100%' }}>
                    {errorMessage}
                </Alert>
            </Snackbar>
        </Section>
    );
}

export default EditApplicationStatus;
