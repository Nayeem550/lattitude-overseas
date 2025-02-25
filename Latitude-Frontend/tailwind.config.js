import palette from './src/theme/palatte';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                'desktop-xl': { max: '1535px' },
                'laptop-xl': { max: '1279px' },
                'tablet-lg': { max: '1023px' },
                'mobile-lg': { max: '767px' },
                'mobile-sm': { max: '639px' },
            },
            aspectRatio: {
                '4/3': '4 / 3',
                '3/4': '3/4',
                '10/4': '10/4',

                '4.5/5.5': '4.5/5.5',
            },
            colors: {
                ...palette,
            },
            animation: {
                'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite', // Adjust the timing and behavior of the ping animation
                glow: 'glow 1.5s infinite ease-in-out',
            },
            keyframes: {
                ping: {
                    '0%': {
                        transform: 'scale(1)',
                        opacity: '1',
                    },
                    '75%': {
                        transform: 'scale(2)',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'scale(1)',
                        opacity: '0',
                    },
                },
                glow: {
                    '0%': {
                        boxShadow:
                            '0 0 5px rgba(255, 255, 255, 0.5), 0 0 15px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.7)',
                    },
                    '50%': {
                        boxShadow:
                            '0 0 10px rgba(0, 255, 255, 0.7), 0 0 25px rgba(0, 255, 255, 0.8), 0 0 50px rgba(0, 255, 255, 1)',
                    },
                    '100%': {
                        boxShadow:
                            '0 0 5px rgba(0, 255, 255, 0.5), 0 0 15px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.7)',
                    },
                },
            },
        },
    },
    plugins: [],
};
