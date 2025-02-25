import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MainRoutes from './Routes/MainRoutes.jsx';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme.js';
import { CssBaseline } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import Metadata from './Components/Metadata.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HelmetProvider>
            <Metadata />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <MainRoutes />
            </ThemeProvider>
        </HelmetProvider>
    </StrictMode>
);
