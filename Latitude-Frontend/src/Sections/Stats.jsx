import Section from '../Components/Section';
import CountUp from 'react-countup';
import BlurGrad1 from '../Components/gradiant/BlurGrad1';
import BlurGrad2 from '../Components/gradiant/BlurGrad2';
export default function Stats() {
    const stats = [
        { end: 15, suffix: '+', label: 'Countries' },
        { end: 150, suffix: '+', label: 'Cities' },
        { end: 500, suffix: '+', label: 'Happy Clients' },
        { end: 98, suffix: '%', label: 'Success Rate' },
    ];

    return (
        <Section className={'relative'}>
            <div className="bg-base-300 bg-opacity-20 backdrop-blur-sm border-2 border-base-200  py-7 rounded-2xl flex justify-evenly my-10 mobile-lg:grid mobile-lg:grid-cols-2 gap-5">
                {stats?.map(stat => (
                    <div key={stat.label} className="flex flex-col items-center">
                        <CountUp
                            className="text-4xl font-bold"
                            start={0}
                            end={stat.end}
                            duration={2.75}
                            suffix={stat.suffix}
                        />

                        <span>{stat.label}</span>
                    </div>
                ))}
            </div>
            <BlurGrad1 />
            <BlurGrad2 />
        </Section>
    );
}
