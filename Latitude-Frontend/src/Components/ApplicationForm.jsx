import { useState } from 'react';
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
import Section from './Section';
import axios from 'axios';

function ApplicationForm() {
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
        passportPhoto: null,
        nidScan: null,
        passportScan: null,
        signature: null,
    };

    const [formData, setFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = e => {
        const { name, files } = e.target;
        const file = files[0]; // Handle only the first file

        if (file) {
            // Check if file size exceeds 1 MB (1 MB = 1,048,576 bytes)
            if (file.size > 524288) {
                alert('File size must be less than 500kb.');
                return;
            }

            // Update the state with the file
            setFormData(prevData => ({
                ...prevData,
                [name]: file,
            }));
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();

        // Show loading spinner
        setLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        // Create FormData object for submission
        const form = new FormData();
        Object.keys(formData).forEach(key => {
            const value = formData[key];
            if (value) {
                form.append(key, value); // Skip appending null or undefined values
            }
        });

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URI}api/submit-form`,
                form,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            console.log(response.data.message);
            setLoading(false);
            setSuccessMessage('Form submitted successfully!');

            // Clear the form after success
            setFormData(initialFormData);
        } catch (error) {
            setLoading(false);
            if (error.response) {
                // Server responded with a status other than 2xx
                console.error('Error response:', error.response.data);
                setErrorMessage(`Error: ${error.response.data.error}`);
            } else if (error.request) {
                // Request was made but no response received
                console.error('Error request:', error.request);
                setErrorMessage('Error: No response from server.');
            } else {
                // Something else happened
                console.error('Error message:', error.message);
                setErrorMessage(`Error: ${error.message}`);
            }
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

                        {/* File Uploads */}
                        <Typography variant="h6" gutterBottom>
                            Uploads
                        </Typography>
                        <span className="block mb-2 text-gray-500 text-sm">
                            Files must be less than 500 kb
                        </span>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Button variant="outlined" component="label" fullWidth>
                                    Upload Passport Size Photo
                                    <input
                                        type="file"
                                        name="passportPhoto"
                                        onChange={handleFileChange}
                                        hidden
                                    />
                                </Button>
                                {formData.passportPhoto && (
                                    <Typography variant="body2" color="textSecondary">
                                        {formData.passportPhoto.name}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button variant="outlined" component="label" fullWidth>
                                    Upload NID Scan
                                    <input
                                        type="file"
                                        name="nidScan"
                                        onChange={handleFileChange}
                                        hidden
                                    />
                                </Button>
                                {formData.nidScan && (
                                    <Typography variant="body2" color="textSecondary">
                                        {formData.nidScan.name}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button variant="outlined" component="label" fullWidth>
                                    Upload Passport Scan
                                    <input
                                        type="file"
                                        name="passportScan"
                                        onChange={handleFileChange}
                                        hidden
                                    />
                                </Button>
                                {formData.passportScan && (
                                    <Typography variant="body2" color="textSecondary">
                                        {formData.passportScan.name}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button variant="outlined" component="label" fullWidth>
                                    Upload Signature
                                    <input
                                        type="file"
                                        name="signature"
                                        onChange={handleFileChange}
                                        hidden
                                    />
                                </Button>
                                {formData.signature && (
                                    <Typography variant="body2" color="textSecondary">
                                        {formData.signature.name}
                                    </Typography>
                                )}
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

export default ApplicationForm;
