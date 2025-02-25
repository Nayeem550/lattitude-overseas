import { useState } from 'react';
import Page from '../Components/Page';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import EditUserProvidedData from '../Components/EditUserProvidedData';
import EditApplicationStatus from '../Components/EditApplicationStatus';
import EditFormPhotos from '../Components/EditFormPhotos';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function EditApplicationPage() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Page>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="User Data" {...a11yProps(0)} />
                        <Tab label="Status" {...a11yProps(1)} />
                        <Tab label="Upload" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <EditUserProvidedData />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <EditApplicationStatus />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <EditFormPhotos />
                </CustomTabPanel>
            </Box>
        </Page>
    );
}
