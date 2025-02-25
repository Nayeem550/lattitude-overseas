import { Flight, AirplaneTicket, Assignment, Update } from '@mui/icons-material';
import Section from '../Components/Section';

const Services = () => {
    const services = [
        {
            id: 1,
            icon: 'Flight',
            title: 'Visa Processing',
            description:
                'We provide seamless and comprehensive visa processing services to ensure you have a hassle-free experience, whether you are traveling for business, education, or leisure.',
        },
        {
            id: 2,
            icon: 'AirplaneTicket',
            title: 'Air Ticketing',
            description:
                'Our air ticketing services offer you the convenience of booking flights at competitive prices, tailored to your schedule and preferences.',
        },
        {
            id: 3,
            icon: 'Assignment',
            title: 'Consultation Services',
            description:
                'Our visa consultation services provide you with expert advice on visa applications, eligibility, and documentation to increase your success chances.',
        },
        {
            id: 4,
            icon: 'Update',
            title: 'Visa Renewal Support',
            description:
                'We assist with renewing your visa smoothly, ensuring all requirements are met and avoiding interruptions to your plans.',
        },
    ];

    const iconMap = {
        Flight: <Flight fontSize="large" />,
        AirplaneTicket: <AirplaneTicket fontSize="large" />,
        Assignment: <Assignment fontSize="large" />,
        Update: <Update fontSize="large" />,
    };

    return (
        <Section className="py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-800">Our Services</h1>
                <p className="text-lg text-gray-600 mt-4">
                    Discover the wide range of services we offer to make your journey seamless.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map(service => (
                    <div
                        key={service.id}
                        className="relative bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-blue-700 opacity-0 group-hover:opacity-10 transition duration-300"></div>
                        <div className="p-6 text-center flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4 text-4xl shadow-lg">
                                {iconMap[service.icon]}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 group-hover:h-2 transition-all duration-300"></div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Services;
