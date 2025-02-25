import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import ApplicationList from '../Components/ApplicationList';
import PaymentList from '../Components/PaymentList';

export default function DashboardPage() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs value={value} onChange={handleChange} aria-label="tabs">
                <Tab label="Applications" />
                <Tab label="Payments" />
            </Tabs>
            <Box sx={{ p: 3 }}>
                {value === 0 && <ApplicationList />}
                {value === 1 && <PaymentList />}
            </Box>
        </Box>
    );
}
