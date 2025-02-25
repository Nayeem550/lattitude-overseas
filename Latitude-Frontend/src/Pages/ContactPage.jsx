import { Phone, Email, LocationOn, Public, SupportAgent } from '@mui/icons-material';
import Section from '../Components/Section';
import Page from '../Components/Page';
import BlurGrad1 from '../Components/gradiant/BlurGrad1';
import BlurGrad2 from '../Components/gradiant/BlurGrad2';

export default function ContactPage() {
    return (
        <Page>
            <Section className="!py-16 relative">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-gray-800">
                            Connect with Latitude Overseas Limited
                        </h2>
                        <p className="text-xl text-gray-600 mt-4">
                            Reach out to us for personalized assistance, inquiries, or collaboration
                            opportunities. We’re here to help you explore the world.
                        </p>
                    </div>

                    {/* Contact Details */}
                    <div className="grid md:grid-cols-4 gap-8 mb-16">
                        <div className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-lg shadow-lg text-white transition-transform duration-300 hover:scale-105">
                            <Phone className="text-5xl mb-4" />
                            <h3 className="text-xl font-semibold">Call Us</h3>
                            <p className="mt-2 text-center">+1 (506) 436-4498</p>
                        </div>
                        <div className="flex flex-col items-center bg-gradient-to-r from-green-500 to-green-700 p-6 rounded-lg shadow-lg text-white transition-transform duration-300 hover:scale-105">
                            <Email className="text-5xl mb-4" />
                            <h3 className="text-xl font-semibold">Email Us</h3>
                            <p className="mt-2 text-center">info@latitudeoverseas.online</p>
                        </div>
                        <div className="flex flex-col items-center bg-gradient-to-r from-purple-500 to-purple-700 p-6 rounded-lg shadow-lg text-white transition-transform duration-300 hover:scale-105">
                            <LocationOn className="text-5xl mb-4" />
                            <h3 className="text-xl font-semibold">Visit Us</h3>
                            <p className="mt-2 text-center">
                                 456 Vodden St E, Brampton, ON L6S 5Y7, Canada...Ava NW Edmonlod AB T6E 5L7,Ottawa CANADA
                            </p>
                        </div>
                        <div className="flex flex-col items-center bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-lg shadow-lg text-white transition-transform duration-300 hover:scale-105">
                            <SupportAgent className="text-5xl mb-4" />
                            <h3 className="text-xl font-semibold">Customer Support</h3>
                            <p className="mt-2 text-center">Available 24/7</p>
                        </div>
                    </div>

                    {/* Global Reach */}
                    <div className="mt-16 text-center">
                        <h3 className="text-3xl font-extrabold text-gray-800 mb-4">
                            Global Presence
                        </h3>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <div className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-indigo-700 p-6 rounded-lg shadow-lg text-white transition-transform duration-300 hover:scale-105">
                                <Public className="text-5xl mb-4" />
                                <h4 className="text-xl font-semibold">Worldwide Network</h4>
                                <p className="mt-2 text-center">
                                    Connecting travelers with partners across the globe.
                                </p>
                            </div>
                            <div className="flex flex-col items-center bg-gradient-to-r from-teal-500 to-teal-700 p-6 rounded-lg shadow-lg text-white transition-transform duration-300 hover:scale-105">
                                <SupportAgent className="text-5xl mb-4" />
                                <h4 className="text-xl font-semibold">24/7 Support</h4>
                                <p className="mt-2 text-center">
                                    Assistance anytime, anywhere for seamless travel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <BlurGrad1 />
                <BlurGrad2 />
            </Section>
        </Page>
    );
}
