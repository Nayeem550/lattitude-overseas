import { useEffect, useState } from 'react';
import axios from 'axios';
import Page from '../Components/Page';
import ApplicationDetails from '../Components/ApplicationDetails';
import { CircularProgress, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function TrackApplicationPage() {
    const { passportNumber } = useParams();
    const [application, setApplication] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch application data by passport number
    useEffect(() => {
        const fetchApplication = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URI}api/application/${passportNumber}`
                );
                setApplication(response.data);
            } catch (err) {
                setError('Failed to load application details.');
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchApplication();
    }, [passportNumber]);

    console.log(application);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <CircularProgress />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Typography variant="h6" color="error">
                    {error}
                </Typography>
            </div>
        );
    }

    return (
        <Page>
            {/* Display application data */}
            {application && <ApplicationDetails application={application} />}
        </Page>
    );
}
