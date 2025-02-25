import { Button } from '@mui/material';
import { RocketLaunch, AutoAwesome, ThumbUp } from '@mui/icons-material';
import Section from '../Components/Section';
import { Link } from 'react-router-dom';

const ApplyNow = () => {
    return (
        <Section className="relative my-10">
            <div className="container mx-auto px-6 lg:px-16 text-center py-16 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white rounded-lg shadow-lg">
                {/* Icons and Heading */}
                <div className="flex justify-center mb-6 mobile-lg:flex-col items-center">
                    <RocketLaunch sx={{ fontSize: 80, color: '#ffffff', marginRight: 2 }} />
                    <h2 className="text-4xl font-extrabold mb-4">Ready to Take the First Step?</h2>
                </div>

                {/* Subheading */}
                <p className="text-lg font-medium mb-8">
                    Join us today and start your journey with our expert visa and travel services.
                    Let us handle the complexities while you focus on your dreams.
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    <div className="flex flex-col items-center">
                        <AutoAwesome sx={{ fontSize: 50, color: '#ffdd57' }} />
                        <p className="mt-4 font-semibold">Expert Guidance</p>
                        <p className="text-sm text-center">
                            Receive top-notch advice from industry professionals.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <ThumbUp sx={{ fontSize: 50, color: '#76ff03' }} />
                        <p className="mt-4 font-semibold">Hassle-Free Process</p>
                        <p className="text-sm text-center">
                            We simplify your journey by handling all complexities.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <RocketLaunch sx={{ fontSize: 50, color: '#00e5ff' }} />
                        <p className="mt-4 font-semibold">Launch Your Dream</p>
                        <p className="text-sm text-center">
                            Take off toward your aspirations with confidence.
                        </p>
                    </div>
                </div>

                {/* Button */}
                <Link to={'apply'}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            backgroundColor: '#ffffff',
                            color: '#0078aa',
                            fontWeight: 'bold',
                            padding: '10px 30px',
                            borderRadius: '50px',
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: '#f3f4f6',
                            },
                        }}
                        className="relative inline-flex items-center justify-center z-10 animate-glow"
                    >
                        Apply Now
                    </Button>
                </Link>
            </div>

            {/* Decorative Background */}
            <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-[120px]">
                <div
                    style={{
                        clipPath: 'polygon(74% 0, 100% 36%, 68% 100%, 0 100%, 0 0)',
                    }}
                    className="w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20"
                />
            </div>
        </Section>
    );
};

export default ApplyNow;
