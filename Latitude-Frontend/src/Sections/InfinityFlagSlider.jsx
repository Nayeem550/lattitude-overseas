import Slider from 'react-infinite-logo-slider';
import Section from '../Components/Section';

const InfinityFlagSlider = () => {
    const flags = [
        'https://flagcdn.com/w320/us.png',
        'https://flagcdn.com/w320/ca.png',
        'https://flagcdn.com/w320/gb.png',
        'https://flagcdn.com/w320/fr.png',
        'https://flagcdn.com/w320/de.png',
        'https://flagcdn.com/w320/jp.png',
        'https://flagcdn.com/w320/in.png',
        'https://flagcdn.com/w320/au.png',
        'https://flagcdn.com/w320/ae.png',
        'https://flagcdn.com/w320/sa.png',
    ];

    return (
        <Section>
            <div className="overflow-hidden w-full  py-10">
                <div className="flex animate-slide">
                    <Slider
                        width="180px"
                        duration={60}
                        pauseOnHover={true}
                        blurBorders={false}
                        blurBorderColor={'#000'}
                    >
                        {[...flags, ...flags].map((flag, index) => (
                            <Slider.Slide className="flex-none w-24 mx-2 -z-10" key={index}>
                                <img
                                    src={flag}
                                    alt={`Flag ${index}`}
                                    className="aspect-video h-20 object-cover rounded-md border border-base-300 shadow-lg"
                                />
                            </Slider.Slide>
                        ))}
                    </Slider>
                </div>
            </div>
        </Section>
    );
};

export default InfinityFlagSlider;
