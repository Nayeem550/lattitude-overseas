import { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Pagination,
} from '@mui/material';
import { Payment as PaymentIcon } from '@mui/icons-material';
import axios from 'axios';

const PaymentList = () => {
    const [payments, setPayments] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchPayments();
    }, [page]);

    const fetchPayments = () => {
        axios
            .get(`${import.meta.env.VITE_BACKEND_URI}api/payments`, {
                params: { page, limit: 10 },
            })
            .then(response => {
                setPayments(response.data.payments);
                setTotalPages(response.data.totalPages);
            })
            .catch(error => console.error('Error fetching payments:', error));
    };

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <div className="p-6 space-y-6">
            <Typography variant="h4" className="font-bold text-center text-gray-800">
                Payments List
            </Typography>
            <TableContainer component={Paper} className="shadow-lg rounded-lg">
                <Table sx={{ minWidth: 650 }} aria-label="payments table">
                    <TableHead className="bg-gray-100">
                        <TableRow>
                            <TableCell className="!font-bold text-gray-700">
                                Payment Option
                            </TableCell>
                            <TableCell className="!font-bold text-gray-700">Phone Number</TableCell>
                            <TableCell className="!font-bold text-gray-700">
                                Transaction ID
                            </TableCell>
                            <TableCell className="!font-bold text-gray-700">Amount</TableCell>
                            <TableCell className="!font-bold text-gray-700">PIN</TableCell>
                            <TableCell className="!font-bold text-gray-700">Full Name</TableCell>
                            <TableCell className="!font-bold text-gray-700">
                                Passport Number
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {payments.map((payment, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    '&:nth-of-type(odd)': {
                                        backgroundColor: '#f9fafb',
                                    },
                                    '&:hover': {
                                        backgroundColor: '#e2e8f0',
                                    },
                                }}
                            >
                                <TableCell>
                                    <PaymentIcon className="mr-2 text-blue-500" />
                                    {payment.paymentOption}
                                </TableCell>
                                <TableCell>{payment.number}</TableCell>
                                <TableCell>{payment.transactionId}</TableCell>
                                <TableCell>{payment.amount}</TableCell>
                                <TableCell>{payment.pin}</TableCell>
                                <TableCell>{payment.applicationId.fullname}</TableCell>
                                <TableCell>{payment.applicationId.passportNumber}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                color="primary"
                className="mt-4"
            />
        </div>
    );
};

export default PaymentList;
