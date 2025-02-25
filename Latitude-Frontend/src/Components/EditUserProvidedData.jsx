import { useEffect, useState } from 'react';
import {
    TextField,
    Button,
    Grid,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Typography,
    Box,
    CircularProgress,
    Snackbar,
    Alert,
} from '@mui/material';
import Section from '../Components/Section';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditUserProvidedData() {
    const { applicationID } = useParams();
    const initialFormData = {
        fullname: '',
        fatherName: '',
        motherName: '',
        sex: '',
        age: '',
        dob: '',
        nationality: '',
        passportNumber: '',
        maritalStatus: '',
        residentAddress: '',
        district: '',
        email: '',
        phone: '',
        college: '',
        graduationYear: '',
        fieldOfStudy: '',
        referredBy: '',
        employmentExperience: '',
        lastWorkPlace: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchApplication = async () => {
            setLoading(true); // Set loading state
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URI}api/applications/${applicationID}`
                );
                const applicationData = response.data;

                // Format the date fields
                if (applicationData.dob) {
                    applicationData.dob = new Date(applicationData.dob).toISOString().split('T')[0];
                }

                setFormData(applicationData); // Populate form data
            } catch (err) {
                setErrorMessage('Failed to load application details.');
                console.error(err);
            } finally {
                setLoading(false); // Stop loading spinner
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
                        {/* Personal Information */}
                        <Typography variant="h6" gutterBottom>
                            Personal Information
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Full Name"
                                    variant="outlined"
                                    fullWidth
                                    name="fullname"
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Father's Name"
                                    variant="outlined"
                                    fullWidth
                                    name="fatherName"
                                    value={formData.fatherName}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Mother's Name"
                                    variant="outlined"
                                    fullWidth
                                    name="motherName"
                                    value={formData.motherName}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Sex</InputLabel>
                                    <Select
                                        label="Sex"
                                        name="sex"
                                        value={formData.sex}
                                        onChange={handleChange}
                                        required
                                    >
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Age"
                                    variant="outlined"
                                    fullWidth
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Date of Birth"
                                    variant="outlined"
                                    fullWidth
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    InputLabelProps={{ shrink: true }}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Nationality"
                                    variant="outlined"
                                    fullWidth
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Passport Number"
                                    variant="outlined"
                                    fullWidth
                                    name="passportNumber"
                                    value={formData.passportNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Marital Status</InputLabel>
                                    <Select
                                        label="Marital Status"
                                        name="maritalStatus"
                                        value={formData.maritalStatus}
                                        onChange={handleChange}
                                        required
                                    >
                                        <MenuItem value="Single">Single</MenuItem>
                                        <MenuItem value="Married">Married</MenuItem>
                                        <MenuItem value="Divorced">Divorced</MenuItem>
                                        <MenuItem value="Widowed">Widowed</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        {/* Contact Details */}
                        <Typography variant="h6" gutterBottom>
                            Contact Details
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Resident Address"
                                    variant="outlined"
                                    fullWidth
                                    name="residentAddress"
                                    value={formData.residentAddress}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="District"
                                    variant="outlined"
                                    fullWidth
                                    name="district"
                                    value={formData.district}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Email Address"
                                    variant="outlined"
                                    fullWidth
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Phone Number"
                                    variant="outlined"
                                    fullWidth
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                        </Grid>

                        {/* Education (Optional) */}
                        <Typography variant="h6" gutterBottom>
                            Education
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="College/University"
                                    variant="outlined"
                                    fullWidth
                                    name="college"
                                    value={formData.college}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Year of Graduation"
                                    variant="outlined"
                                    fullWidth
                                    name="graduationYear"
                                    value={formData.graduationYear}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Field of Study"
                                    variant="outlined"
                                    fullWidth
                                    name="fieldOfStudy"
                                    value={formData.fieldOfStudy}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>

                        {/* Employment Experience */}
                        <Typography variant="h6" gutterBottom>
                            Employment Experience
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Employment Experience (in years)"
                                    variant="outlined"
                                    fullWidth
                                    type="number"
                                    name="employmentExperience"
                                    value={formData.employmentExperience}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Last Place of Work"
                                    variant="outlined"
                                    fullWidth
                                    name="lastWorkPlace"
                                    value={formData.lastWorkPlace}
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

export default EditUserProvidedData;
