import { useState, useEffect } from 'react';
import { TextField, Button, IconButton, Box, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Use `useNavigate` instead of `useHistory`

const ProtectedRoute = ({ children }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate(); // Hook for navigation in React Router v6

    useEffect(() => {
        // Check if the user is already authenticated (by checking localStorage)
        const authStatus = localStorage.getItem('isAuthenticated');
        if (authStatus === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        if (id === 'admin' && password === 'travelKoro8898!@') {
            localStorage.setItem('isAuthenticated', 'true'); // Store authentication status in localStorage
            setIsAuthenticated(true);
            navigate('/admin'); // Navigate to the admin route using `navigate` from `useNavigate`
        } else {
            alert('Incorrect ID or password');
        }
    };

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    if (isAuthenticated) {
        return <>{children}</>;
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <Box className="bg-white p-8 rounded-md shadow-md w-80">
                <Typography variant="h6" className="mb-4 text-center">
                    Admin Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Admin ID"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <IconButton onClick={handleClickShowPassword}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            ),
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="mt-4"
                    >
                        Log In
                    </Button>
                </form>
            </Box>
        </div>
    );
};

export default ProtectedRoute;
