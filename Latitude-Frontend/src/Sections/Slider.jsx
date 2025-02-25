import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Section from '../Components/Section';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Slider() {
    const sliderData = [
        {
            id: 1,
            headline: 'Explore Breathtaking New Destinations',
            subheadline: 'Embark on a journey that will redefine adventure',
            paragraph:
                "Uncover hidden gems and experience the world like never before. From serene beaches to bustling cities, we bring you closer to the destinations you've always dreamed of. Plan your next great escape with us and create memories that last a lifetime.",
            ctaButtons: { text: 'Apply', link: '/apply' },
            backgroundImage:
                'https://images.esquiremag.ph/esquiremagph/images/gallery/6388/MAIN-things-to-say-or-do-during-business-meeting.jpg',
        },
        {
            id: 2,
            headline: 'Seamless Visa Assistance Tailored for You',
            subheadline: 'Simplify your visa process with expert guidance',
            paragraph:
                'Navigating the complexities of visa applications is now easier than ever. With our professional assistance, you can confidently achieve your dreams of traveling, studying, or working abroad. Let us take the hassle out of visa procedures while you focus on planning your future.',
            ctaButtons: { text: 'Apply', link: '/apply' },
            backgroundImage:
                'https://images.stockcake.com/public/8/1/0/8104dcab-49d4-4fca-9860-fb8f634372bc_large/corporate-team-meeting-stockcake.jpg',
        },
        {
            id: 3,
            headline: 'Unlock Exciting Work Abroad Opportunities',
            subheadline: 'Your dream career is just a step away',
            paragraph:
                'Explore high-demand jobs in countries where your skills are valued. From application support to relocation guidance, we ensure a smooth transition for you to start your dream job overseas. Discover a wealth of opportunities to advance your career and secure a brighter future.',
            ctaButtons: { text: 'Apply', link: '/apply' },
            backgroundImage:
                'https://blog.uwcped.org/wp-content/uploads/2023/02/effective-meeting-blog.jpg',
        },
        {
            id: 4,
            headline: 'Unlock Exciting Work Abroad Opportunities',
            subheadline: 'Your dream career is just a step away',
            paragraph:
                'Explore high-demand jobs in countries where your skills are valued. From application support to relocation guidance, we ensure a smooth transition for you to start your dream job overseas. Discover a wealth of opportunities to advance your career and secure a brighter future.',
            ctaButtons: { text: 'Apply', link: '/apply' },
            backgroundImage: 'https://i.ibb.co.com/chNVSqNL/dc-copy.jpg',
        },
    ];

    return (
        <Section className={'relative'}>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[Autoplay, EffectFade, Pagination]}
                className="h-[80vh] rounded-lg"
            >
                {sliderData.map(slide => (
                    <SwiperSlide key={slide.id} className="relative text-white">
                        <img
                            className="h-full w-full object-cover absolute inset-0 z-0"
                            src={slide.backgroundImage}
                            alt="Slide Background"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#000000cc] from-20%">
                            <div className="w-2/4 laptop-xl:w-3/4 mobile-lg:w-full h-full flex flex-col justify-center items-start gap-6 p-5">
                                <h1 className="text-white text-4xl font-bold">{slide.headline}</h1>
                                <h2 className="text-white text-2xl">{slide.subheadline}</h2>
                                <p className="text-white text-lg">{slide.paragraph}</p>
                                <button className="btn btn-primary">
                                    <Link to={slide.ctaButtons.link}>
                                        <Button variant="contained">{slide.ctaButtons.text}</Button>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-[70px] flex justify-end items-end">
                <div
                    style={{
                        clipPath:
                            'polygon(0% 25.5%, 51.5% 47.38%, 45.18% 88.68%, 42.43% 39.1%, 35.49% 10.13%, 55.5% 21.25%, 80.46% 0.19%, 75.73% 32.5%, 79.75% 100%, 100% 32.5%, 65.99% 42.93%, 31.98% 53.36%, 30.77% 37.2%, 33.9% 78.9%, 2.15% 86.09%)',
                    }}
                    className="relative inset-0 aspect-video w-[50vw] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 translate-y-11"
                />
            </div>
        </Section>
    );
}
