import { useState } from 'react';
import {
    Button,
    TextField,
    Typography,
    Paper,
    Box,
    Tab,
    Tabs,
    AppBar,
    InputAdornment,
    LinearProgress,
    Snackbar,
    Alert,
} from '@mui/material';
import { Phone, Payment, CheckCircle, Lock } from '@mui/icons-material';
import { blue, green, red } from '@mui/material/colors';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import bKashImage from '../assets/bkash-logo.png';

const PaymentPage = () => {
    const { applicationID } = useParams();
    const [paymentOption, setPaymentOption] = useState('bKash');
    const [number, setNumber] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [amount, setAmount] = useState('');
    const [pin, setPin] = useState('');
    const [tabValue, setTabValue] = useState(0);
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' });

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
        setPaymentOption(['bKash', 'Nagad', 'Rocket'][newValue]);
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ open: false, message: '', severity: '' });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        try {
            console.log({
                paymentOption,
                number,
                transactionId,
                amount,
                pin,
                applicationId: applicationID,
            });
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URI}api/payments`, {
                paymentOption,
                number,
                transactionId,
                amount,
                pin,
                applicationId: applicationID,
            });

            setSnackbar({ open: true, message: response.data.message, severity: 'success' });

            // Reset form fields
            setPaymentOption('bKash');
            setNumber('');
            setTransactionId('');
            setAmount('');
            setPin('');
        } catch (error) {
            console.error('Error submitting payment:', error);
            const errorMessage = error.response
                ? error.response.data.error
                : 'An error occurred. Please try again later.';
            setSnackbar({ open: true, message: errorMessage, severity: 'error' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-6">
            <Paper className="p-8 rounded-lg shadow-lg max-w-md w-full bg-white">
                <Typography variant="h5" className="text-center mb-6 font-semibold text-gray-700">
                    Complete Payment Information
                </Typography>

                <AppBar position="static" color="transparent" sx={{ boxShadow: 0 }}>
                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        centered
                        indicatorColor="primary"
                        textColor="primary"
                        sx={{
                            '& .MuiTab-root': {
                                margin: '0 12px',
                                padding: 0,
                            },
                            '& .MuiTab-root.Mui-selected': {
                                border: `2px solid ${blue[500]}`,
                                borderRadius: '4px',
                                padding: '8px',
                            },
                        }}
                    >
                        <Tab
                            label={
                                <img
                                    src={bKashImage}
                                    alt="bKash"
                                    style={{ width: 50, height: 50 }}
                                />
                            }
                        />
                    </Tabs>
                </AppBar>

                <form onSubmit={handleSubmit}>
                    {loading && <LinearProgress className="mt-4" />}

                    <p className="mt-4 ">
                        Complete your payment in these number:
                        <ul className="list-disc text-left pl-4">
                            <li>01893353905</li>
                            <li>01324367168</li>
                        </ul>
                    </p>

                    <Box className="mt-4 flex flex-col gap-5">
                        <TextField
                            label="Exhange Number"
                            variant="outlined"
                            fullWidth
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Phone sx={{ color: green[500] }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <span>Or</span>
                        <TextField
                            label="Transaction ID"
                            variant="outlined"
                            fullWidth
                            value={transactionId}
                            onChange={e => setTransactionId(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CheckCircle sx={{ color: blue[500] }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <span>Or</span>
                        <TextField
                            label="PIN"
                            variant="outlined"
                            fullWidth
                            value={pin}
                            onChange={e => setPin(e.target.value)}
                            type="password"
                            inputProps={{ maxLength: 6 }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock sx={{ color: green[500] }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            label="Amount"
                            variant="outlined"
                            fullWidth
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                            type="number"
                            inputProps={{ min: 0 }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Payment sx={{ color: red[600] }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                            backgroundColor: green[600],
                            '&:hover': {
                                backgroundColor: green[700],
                            },
                            mt: 3,
                        }}
                        disabled={!paymentOption || !number || !amount || (!pin && !transactionId)}
                    >
                        Submit Payment
                    </Button>
                </form>
            </Paper>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default PaymentPage;
