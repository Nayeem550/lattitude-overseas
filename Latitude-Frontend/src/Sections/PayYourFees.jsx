import { Payment, AttachMoney, CreditCard } from '@mui/icons-material';
import { Button } from '@mui/material';
import Section from '../Components/Section';

export default function PayYourFees() {
    return (
        <Section className="!py-16">
            <div className="container mx-auto p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl shadow-xl">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                    {/* Title and Icon */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Payment className="text-white !text-5xl animate__animated animate__fadeIn" />
                        <h2 className="text-4xl font-bold text-white">Pay Your Fees</h2>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-white mb-6 font-medium opacity-80 animate__animated animate__fadeIn animate__delay-1s">
                        Enjoy a smooth and secure payment experience with a variety of payment
                        methods available.
                    </p>

                    {/* Icon Section */}
                    <div className="flex items-center justify-center gap-6 mb-6">
                        <div className="flex items-center gap-3">
                            <AttachMoney className="text-white text-3xl animate__animated animate__fadeIn animate__delay-2s" />
                            <p className="text-lg text-white font-medium">Safe & Secure</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <CreditCard className="text-white text-3xl animate__animated animate__fadeIn animate__delay-3s" />
                            <p className="text-lg text-white font-medium">
                                Multiple Payment Options
                            </p>
                        </div>
                    </div>

                    {/* Call to Action Button */}
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white py-3 px-8 rounded-full transform transition-all duration-300 ease-in-out scale-105 hover:scale-110 animate__animated animate__bounceIn animate__delay-4s"
                        href="/payment"
                    >
                        Pay Now
                    </Button>
                </div>
            </div>
        </Section>
    );
}
