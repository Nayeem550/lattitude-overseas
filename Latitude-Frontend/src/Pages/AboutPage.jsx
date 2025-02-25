import { LocationOn, People, TravelExplore, CheckCircle } from '@mui/icons-material';
import Section from '../Components/Section';
import Page from '../Components/Page';
import BlurGrad1 from '../Components/gradiant/BlurGrad1';
import BlurGrad2 from '../Components/gradiant/BlurGrad2';

export default function AboutPage() {
    return (
        <Page>
            <Section className="!py-16 relative  ">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold ">
                            About Latitude Overseas Limited{' '}
                        </h2>
                        <p className="text-xl  mt-4">
                            Your trusted partner in seamless travel experiences, helping you reach
                            your dream destinations with ease.
                        </p>
                    </div>

                    {/* Introduction Section */}
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-semibold  mb-4">Our Story</h3>
                        <p className="text-lg  mx-auto max-w-3xl">
                            Latitude Overseas Limited was founded with a passion for simplifying
                            travel. Our team of seasoned professionals works tirelessly to help
                            travelers achieve their goals and explore the world with confidence.
                            From tailored visa services to bespoke travel packages, we’re committed
                            to offering solutions that match the needs of every traveler.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Mission Section */}
                        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <TravelExplore className="text-blue-600 text-4xl mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
                            <p className="text-gray-600 mt-4">
                                At Latitude Overseas Limited , we aim to empower travelers with
                                personalized and hassle-free travel solutions. We guide you from
                                start to finish, making your travel experience unforgettable.
                            </p>
                        </div>

                        {/* Vision Section */}
                        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <LocationOn className="text-blue-600 text-4xl mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
                            <p className="text-gray-600 mt-4">
                                Our vision is to become the leading global travel partner, offering
                                tailored services that meet every travelers unique needs, from visa
                                assistance to exclusive travel packages.
                            </p>
                        </div>

                        {/* Team Section */}
                        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <People className="text-blue-600 text-4xl mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-800">Meet Our Team</h3>
                            <p className="text-gray-600 mt-4">
                                Our team consists of seasoned travel experts, customer service
                                specialists, and visa consultants, all dedicated to ensuring a
                                smooth and enriching journey for our clients.
                            </p>
                        </div>
                    </div>

                    {/* Our Values */}
                    <div className="mt-16 text-center">
                        <h3 className="text-3xl font-extrabold text-gray-800 mb-4">
                            Our Core Values
                        </h3>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center">
                                <CheckCircle className="text-green-500 text-4xl mb-4" />
                                <h4 className="text-xl font-semibold text-gray-800">Trust</h4>
                                <p className="text-gray-600 mt-2 text-center">
                                    We prioritize trust by delivering transparent and honest
                                    services that you can count on.
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <CheckCircle className="text-green-500 text-4xl mb-4" />
                                <h4 className="text-xl font-semibold text-gray-800">Integrity</h4>
                                <p className="text-gray-600 mt-2 text-center">
                                    Our commitment to integrity ensures we always act in the best
                                    interest of our clients.
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <CheckCircle className="text-green-500 text-4xl mb-4" />
                                <h4 className="text-xl font-semibold text-gray-800">Quality</h4>
                                <p className="text-gray-600 mt-2 text-center">
                                    We provide the highest quality services and work with partners
                                    who share our dedication to excellence.
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
