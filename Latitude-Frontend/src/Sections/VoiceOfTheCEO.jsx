import { FormatQuote } from '@mui/icons-material';
import Section from '../Components/Section';
import BlurGrad1 from '../Components/gradiant/BlurGrad1';
import BlurGrad2 from '../Components/gradiant/BlurGrad2';

export default function VoiceOfTheCEO() {
    return (
        <Section className="py-16 relative">
            <div className="container mx-auto px-6">
                <div className="flex tablet-lg:flex-col">
                    {/* Voice of the CEO */}
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold mb-8">Voice of the CEO</h2>

                        {/* CEO Image and Icon */}
                        <div className="relative w-40 h-40 mb-8 rounded-full shadow-2xl overflow-hidden">
                            <img
                                src="/ceo.png" // Replace with CEO's image
                                alt="CEO"
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                            />
                        </div>

                        {/* CEO Quote */}
                        <p className="text-xl mb-6 font-serif italic max-w-2xl mx-auto">
                            &quot;At Latitude Overseas Limited , we are dedicated to making travel
                            dreams come true. Our mission is to offer seamless travel solutions,
                            personalized guidance, and the expertise you need for unforgettable
                            experiences abroad. Every client is our priority.&quot;
                        </p>

                        {/* Quote Icon and CEO Name */}
                        <div className="flex justify-center items-center gap-2 mb-2">
                            <FormatQuote className="text-4xl" />
                            <span className="text-xl font-semibold">Abir Islam</span>
                        </div>
                        <span>Admission Officer Of Foodland Company, Canada</span>

                        {/* CEO Title */}
                        <p className="text-lg font-medium">CEO, Latitude Overseas Limited </p>
                        <p>Whatsapp: +1 (778) 765-3682</p>
                    </div>

                    {/* Voice of the COO */}
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl font-extrabold mb-8">Voice of the COO</h2>

                        {/* COO Image and Icon */}
                        <div className="relative w-40 h-40 mb-8 rounded-full shadow-2xl overflow-hidden">
                            <img
                                src="/coo.png" // Replace with COO's image
                                alt="COO"
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                            />
                        </div>

                        {/* COO Quote */}
                        <p className="text-xl mb-6 font-serif italic max-w-2xl mx-auto">
                            &quot;Collaboration and innovation are at the heart of our operations.
                            At Latitude Overseas Limited , we strive to ensure every journey is as
                            smooth as it is memorable. Together, we build bridges across
                            borders.&quot;
                        </p>

                        {/* Quote Icon and COO Name */}
                        <div className="flex justify-center items-center gap-2 mb-2">
                            <FormatQuote className="text-4xl" />
                            <span className="text-xl font-semibold">Rafi Ahmed</span>
                        </div>

                        {/* COO Title */}
                        <p className="text-lg font-medium">COO, Latitude Overseas Limited </p>
                        <p>Whatsapp: +1 (636) 406-1299</p>
                    </div>
                </div>

                {/* Partner Companies Section */}
                <div className="mt-16 text-center">
                    <h2 className="text-4xl font-extrabold mb-8">Our Partners</h2>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {/* PCL Company Canada */}
                        <div className="flex flex-col items-center">
                            <img
                                src="/pcl-logo.png" // Replace with PCL Company logo
                                alt="PCL Company Canada"
                                className="w-32 h-32 object-contain mb-4"
                            />
                            <p className="text-xl font-medium">PCL Company Canada</p>
                        </div>

                        {/* Foodland Company Canada */}
                        <div className="flex flex-col items-center">
                            <img
                                src="/foodland-logo.png" // Replace with Foodland Company logo
                                alt="Foodland Company Canada"
                                className="w-32 h-32 object-contain mb-4"
                            />
                            <p className="text-xl font-medium">Foodland Company Canada</p>
                        </div>
                    </div>
                </div>
            </div>
            <BlurGrad1 />
            <BlurGrad2 />
        </Section>
    );
}
