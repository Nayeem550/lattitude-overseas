import {
    Card,
    CardContent,
    Typography,
    Box,
    Divider,
    Grid,
    Paper,
    IconButton,
    Button,
} from '@mui/material';
import { Visibility } from '@mui/icons-material';
import Section from '../Components/Section';
import { Link } from 'react-router-dom';

// Component for rendering a detail row with enhanced styling
function DetailRow({ label, value }) {
    return (
        <div className="flex items-center gap-3 mt-3">
            <Typography variant="body1" className="!font-bold" sx={{ minWidth: '150px' }}>
                {label}:
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {value || 'Not Provided'}
            </Typography>
        </div>
    );
}

export default function ApplicationDetails({ application }) {
    if (!application) {
        return <Typography variant="h6">Application not found!</Typography>;
    }

    return (
        <Section>
            <Card className="max-w-4xl mx-auto shadow-xl border-t-4 border-blue-500">
                <CardContent>
                    <Typography
                        variant="h4"
                        align="center"
                        mb={4}
                        className="font-semibold text-primary"
                    >
                        Application Details
                    </Typography>
                    {/* Status Section */}
                    <div className="flex pb-5 tablet-lg:flex-col tablet-lg:gap-3 items-center justify-between">
                        <div className="my-6 ">
                            <div className="flex items-center gap-3">
                                <Typography variant="h6" className="font-semibold text-gray-800">
                                    Application Status:
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {application.status}
                                </Typography>
                            </div>
                        </div>
                        <div>
                            <Link to={`/payment/${application._id}`}>
                                <Button variant="contained" color="error">
                                    {application.payBtnText}
                                </Button>
                            </Link>
                        </div>
                    </div>
                    {/* Personal Details Section */}
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={4}>
                            {application.passportPhoto && (
                                <img
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                    src={application.passportPhoto}
                                    alt="Passport"
                                />
                            )}
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <div className="py-3">
                                <DetailRow label="Full Name" value={application.fullname} />
                                <DetailRow label="Father's Name" value={application.fatherName} />
                                <DetailRow label="Mother's Name" value={application.motherName} />
                                <DetailRow label="Sex" value={application.sex} />
                                <DetailRow label="Age" value={application.age} />
                                <DetailRow
                                    label="Date of Birth"
                                    value={new Date(application.dob).toLocaleDateString()}
                                />
                            </div>
                        </Grid>
                    </Grid>

                    <Divider className="my-4" />

                    {/* Additional Details */}
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <DetailRow label="Nationality" value={application.nationality} />
                            <DetailRow label="Passport Number" value={application.passportNumber} />
                            <DetailRow label="Marital Status" value={application.maritalStatus} />
                            <DetailRow
                                label="Resident Address"
                                value={application.residentAddress}
                            />
                            <DetailRow label="District" value={application.district} />
                            <DetailRow label="Email" value={application.email} />
                            <DetailRow label="Phone" value={application.phone} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DetailRow label="College/University" value={application.college} />
                            <DetailRow label="Graduation Year" value={application.graduationYear} />
                            <DetailRow label="Field of Study" value={application.fieldOfStudy} />
                            <DetailRow label="Referred By" value={application.referredBy} />
                            <DetailRow
                                label="Employment Experience"
                                value={application.employmentExperience}
                            />
                            <DetailRow label="Last Work Place" value={application.lastWorkPlace} />
                        </Grid>
                    </Grid>

                    {/* Signature Section */}
                    {application.signature && (
                        <Box className="mt-6">
                            <Typography variant="h6" className="font-medium text-gray-700">
                                Signature:
                            </Typography>
                            <img
                                src={application.signature}
                                alt="Signature"
                                className="w-64 aspect-10/4 object-cover rounded-lg shadow-md mt-3"
                            />
                        </Box>
                    )}

                    {/* Documents Section */}
                    <Box className="mt-6">
                        <Typography variant="h6" className="font-bold text-gray-800">
                            Documents:
                        </Typography>
                        <Grid container spacing={4} className="mt-4">
                            {application.nidScan && (
                                <Grid item xs={12} md={4}>
                                    <Paper elevation={3} className="p-4 text-center">
                                        <img
                                            src={application.nidScan}
                                            alt="NID Scan"
                                            className="w-full h-40 object-cover border-2 rounded-lg shadow-md"
                                        />
                                        <IconButton
                                            href={application.nidScan}
                                            target="_blank"
                                            className="mt-2 text-blue-500"
                                            aria-label="View NID Scan"
                                        >
                                            <Visibility />
                                        </IconButton>
                                    </Paper>
                                </Grid>
                            )}
                            {application.passportScan && (
                                <Grid item xs={12} md={4}>
                                    <Paper elevation={3} className="p-4 text-center">
                                        <img
                                            src={application.passportScan}
                                            alt="Passport Scan"
                                            className="w-full h-40 object-cover border-2 rounded-lg shadow-md"
                                        />
                                        <IconButton
                                            href={application.passportScan}
                                            target="_blank"
                                            className="mt-2 text-blue-500"
                                            aria-label="View Passport Scan"
                                        >
                                            <Visibility />
                                        </IconButton>
                                    </Paper>
                                </Grid>
                            )}
                        </Grid>
                    </Box>

                    <div className="w-full p-4 border rounded-xl my-5">
                        <p>{application.bodyDetails}</p>
                    </div>

                    {application.applicationFormImages?.map((url, index) => (
                        <div key={index} className="w-full flex  flex-col gap-3">
                            <img src={url} className="w-full my-5" />
                        </div>
                    ))}
                    <div className="w-full p-4 border rounded-xl my-5">
                        <p>{application.footerDetails}</p>
                    </div>
                </CardContent>
            </Card>
        </Section>
    );
}
