const palette = {
    mode: 'light',
    common: {
        black: '#000', // Standard black
        white: '#fff', // Standard white
    },
    primary: {
        main: '#33b5ea', // Bright blue representing trust and vibrancy
        light: '#85d9f5', // Lighter blue for highlights
        dark: '#22799c', // Darker blue for accents
        contrastText: '#ffffff', // White text for good contrast
    },
    secondary: {
        main: '#f9982b', // Vibrant orange symbolizing energy and creativity
        light: '#fbc475', // Lighter orange for softer accents
        dark: '#b96a1e', // Darker orange for strong accents
        contrastText: '#ffffff', // White text for contrast
    },
    error: {
        main: '#ff4d4f', // Bright red for errors
        light: '#ff9999', // Soft red for warnings
        dark: '#d9363e', // Deeper red for critical errors
        contrastText: '#ffffff', // White text for readability
    },
    warning: {
        main: '#ffc107', // Bright yellow for warnings
        light: '#ffecb3', // Pale yellow for background warnings
        dark: '#ff9800', // Orange-yellow for strong warnings
        contrastText: '#000000', // Black text for better readability
    },
    info: {
        main: '#33aaff', // Sky blue for informational elements
        light: '#99d6ff', // Pale blue for subtle info
        dark: '#0077cc', // Strong blue for primary info
        contrastText: '#ffffff', // White text for contrast
    },
    success: {
        main: '#28a745', // Bright green for success
        light: '#85e89d', // Soft green for supportive success visuals
        dark: '#1c7430', // Deep green for strong success indicators
        contrastText: '#ffffff', // White text for contrast
    },
    grey: {
        50: '#f9f9f9', // Very light gray
        100: '#f2f2f2', // Soft gray
        200: '#e6e6e6', // Subtle gray
        300: '#cccccc', // Neutral gray
        400: '#b3b3b3', // Medium gray
        500: '#999999', // Standard gray
        600: '#808080', // Dark gray
        700: '#666666', // Deeper gray
        800: '#4d4d4d', // Very dark gray
        900: '#333333', // Near-black gray
        A100: '#f5f5f5', // Very light accent gray
        A200: '#eeeeee', // Light accent gray
        A400: '#bdbdbd', // Medium accent gray
        A700: '#616161', // Dark accent gray
    },
    text: {
        primary: 'rgba(0, 0, 0, 0.87)', // High emphasis text (black on white backgrounds)
        secondary: 'rgba(0, 0, 0, 0.6)', // Medium emphasis text
        disabled: 'rgba(0, 0, 0, 0.38)', // Low emphasis text
    },
    background: {
        paper: '#ffffff', // Bright white for card backgrounds
        default: '#f9f9f9', // Light gray for page backgrounds
    },
    action: {
        active: 'rgba(0, 0, 0, 0.54)', // Active icons/buttons
        hover: 'rgba(0, 0, 0, 0.08)', // Background color on hover
        hoverOpacity: 0.08,
        selected: 'rgba(0, 0, 0, 0.16)', // Background color on selection
        selectedOpacity: 0.16,
        disabled: 'rgba(0, 0, 0, 0.26)', // Disabled element text/icons
        disabledBackground: 'rgba(0, 0, 0, 0.12)', // Disabled element background
        disabledOpacity: 0.38,
        focus: 'rgba(0, 0, 0, 0.12)', // Focused element
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
    },
};

export default palette;
