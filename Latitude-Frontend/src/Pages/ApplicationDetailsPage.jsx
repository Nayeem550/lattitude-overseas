import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CircularProgress, Typography } from '@mui/material';

import Page from '../Components/Page';
import ApplicationDetails from '../Components/ApplicationDetails';

// Component for rendering the application details page
export default function ApplicationDetailsPage() {
    const { applicationId } = useParams();
    const [application, setApplication] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApplication = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URI}api/applications/${applicationId}`
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
    }, [applicationId]);

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
            <ApplicationDetails application={application} />
        </Page>
    );
}
