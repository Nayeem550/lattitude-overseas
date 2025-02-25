import Section from '../Components/Section';

const JobList = () => {
    // Updated job data with odd jobs
    const jobs = [
        {
            id: 1,
            title: 'Restaurant Job',
            description: 'Join our team and help serve delicious meals to customers.',
            image: '/jobs/res.png',
        },
        {
            id: 2,
            title: 'Construction Job',
            description: 'Work on exciting construction projects and build the future.',
            image: '/jobs/cons.png',
        },
        {
            id: 3,
            title: 'Orange Garden Job',
            description: 'Help us grow and harvest fresh oranges in our garden.',
            image: '/jobs/orange.png',
        },
        {
            id: 4,
            title: 'Hotel Receptionist',
            description: 'Provide excellent customer service as a receptionist in our hotel.',
            image: '/jobs/hotel.png',
        },
        {
            id: 5,
            title: 'Delivery Driver',
            description: 'Join our team as a delivery driver and ensure timely deliveries.',
            image: '/jobs/delivery.png',
        },
        {
            id: 6,
            title: 'Factory Worker',
            description: 'Be part of our manufacturing team and help produce quality products.',
            image: '/jobs/factory.png',
        },
        {
            id: 7,
            title: 'Food Packaging',
            description:
                'Join our food packaging team to help package and prepare products for shipment.',
            image: '/jobs/food-packaging.png', // Add the appropriate image path for this job
        },

        {
            id: 8,
            title: 'Gardener',
            description: 'Assist with planting, weeding, and maintaining gardens and landscapes.',
            image: '/jobs/gardener.png', // Add the appropriate image path for this job
        },
        {
            id: 9,
            title: 'Painter',
            description: 'Help paint homes, fences, and buildings to give them a fresh look.',
            image: '/jobs/painter.png', // Add the appropriate image path for this job
        },
    ];

    return (
        <Section>
            <div className="p-6 bg-gray-50">
                <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-800">
                    Available Jobs
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jobs.map(job => (
                        <div
                            key={job.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-[1.01] hover:shadow-2xl"
                        >
                            <img
                                src={job.image}
                                alt={job.title}
                                className="w-full h-72 object-cover"
                            />
                            <div className="p-5">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-blue-500 transition-colors">
                                    {job.title}
                                </h2>
                                <p className="text-gray-600 leading-relaxed">{job.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default JobList;
