import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Drawer,
    IconButton,
    Box, // Box component to arrange items
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../Components/Section';
import Navlinks from '../Components/Navlinks';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    const [open, setOpen] = useState(false); // Dialog visibility state
    const [passportNumber, setPassportNumber] = useState(''); // State for passport number
    const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu visibility
    const navigate = useNavigate(); // Navigate function for routing

    // Function to handle opening the dialog
    const handleClickOpen = () => {
        setOpen(true);
    };

    // Function to handle closing the dialog
    const handleClose = () => {
        setOpen(false);
    };

    // Function to handle submitting the passport number and navigating
    const handleTrackApplication = () => {
        if (passportNumber) {
            navigate(`/track-application/${passportNumber}`); // Navigate to the track application page
            handleClose(); // Close the dialog
        } else {
            alert('Please enter a valid passport number.'); // Alert if passport number is not provided
        }
    };

    // Function to toggle the mobile menu visibility
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Section className={'bg-primary-main bg-opacity-20 sticky top-0 z-50 backdrop-blur-lg'}>
            <div className="flex justify-between items-center">
                <div className="basis-1/6 flex items-center mobile-lg:basis-1/2">
                    <img className="h-16  " src="/logo.png" alt="Logo" />
                </div>

                {/* Main Menu (Navlinks) - Hidden on mobile */}
                <div className={`basis-4/6 flex justify-center items-center mobile-lg:hidden`}>
                    <Navlinks />
                </div>

                {/* Button and Menu Icon Wrapper */}
                <Box className="basis-1/6 flex justify-end items-center mobile-lg:basis-1/2">
                    {/* Track Button */}
                    <Button
                        sx={{
                            borderRadius: '1.5rem',
                            padding: '10px 2rem',
                        }}
                        variant="contained"
                        color="secondary"
                        onClick={handleClickOpen}
                    >
                        Track
                    </Button>
                    {/* Mobile Menu Button */}
                    <IconButton
                        color="inherit"
                        onClick={toggleMenu}
                        className="!bg-primary-main !mx-3 !hidden mobile-lg:!flex"
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            </div>

            {/* Mobile Menu Drawer */}
            <Drawer anchor="right" open={menuOpen} onClose={toggleMenu} sx={{ width: '100%' }}>
                <div className="p-4  pr-10">
                    <Navlinks /> {/* Mobile navigation links */}
                </div>
            </Drawer>

            {/* Dialog for Passport Number Input */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Track Application</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Passport Number"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={passportNumber}
                        onChange={e => setPassportNumber(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error">
                        Cancel
                    </Button>
                    <Button onClick={handleTrackApplication} color="primary">
                        Track Application
                    </Button>
                </DialogActions>
            </Dialog>
        </Section>
    );
}
