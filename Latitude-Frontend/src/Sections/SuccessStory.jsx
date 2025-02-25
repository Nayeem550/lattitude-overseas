import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay } from 'swiper/modules';
import Section from '../Components/Section';

export default function SuccessStory() {
    // Dummy Data for Testimonials
    const testimonials = [
        {
            id: 1,
            name: 'Rafiqur Rahman',
            location: 'United Kingdom',
            review: 'Living and working in London has been an incredible experience! I am grateful for the opportunity to work in a multinational company and develop my skills. Thanks to Global Vision Overseas, my dream came true!',
            rating: 5,
            imgSrc: '/successStory/1.jpg',
        },
        {
            id: 2,
            name: 'MD Ripon Talukdar',
            location: 'Australia',
            review: 'Moving to Australia and working in the healthcare sector has been life-changing. I am now supporting my family while growing in my career. Global Vision Overseas made this journey smooth and successful.',
            rating: 5,
            imgSrc: '/successStory/2.jpg',
        },
        {
            id: 3,
            name: 'Sabbir Hossain',
            location: 'Canada',
            review: 'Canada has given me amazing work opportunities in the tech industry. The work environment is fantastic, and I’m continuously learning. I thank Global Vision Overseas for supporting me in this new chapter of my life.',
            rating: 5,
            imgSrc: '/successStory/3.jpg',
        },
        {
            id: 4,
            name: 'Takdir Ahmed',
            location: 'United States',
            review: 'My experience working in the food industry in New York has been eye-opening. The people, the city, the culture – everything has helped me grow. I am extremely thankful to Global Vision Overseas for making it possible.',
            rating: 5,
            imgSrc: '/successStory/4.jpg',
        },
        {
            id: 5,
            name: 'Shahriar Kibria',
            location: 'Qatar',
            review: 'Working as a project manager in Doha has opened many doors for me professionally. I now have a better quality of life and am constantly evolving in my career. Thanks to Global Vision Overseas for all the help.',
            rating: 5,
            imgSrc: '/successStory/5.jpg',
        },
        {
            id: 6,
            name: 'Mitu Rahman',
            location: 'Malaysia',
            review: 'Moving to Malaysia and working in the education sector has been a rewarding journey. I now live a stable life and continue to build my future. Thanks to Global Vision Overseas for helping me get started!',
            rating: 5,
            imgSrc: '/successStory/6.jpg',
        },
        {
            id: 7,
            name: 'Jubair Hossain',
            location: 'United Arab Emirates',
            review: 'Working in the hospitality sector in Dubai has been an amazing experience. The salary and opportunities are excellent, and my lifestyle has improved drastically. Global Vision Overseas made it all happen!',
            rating: 5,
            imgSrc: '/successStory/7.jpg',
        },
        // Add more testimonial objects as needed
    ];

    return (
        <Section className={'py-8'}>
            <div className="p-8 mobile-lg:p-0">
                <h2 className="text-3xl font-bold text-center mb-4">Voices of Success</h2>
                <p className="text-center mb-8">
                    Discover firsthand experiences and success stories from clients who have
                    embarked on their overseas journeys with Global Vision Overseas.
                </p>

                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{ clickable: true }}
                    modules={[Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        // When the window width is >= 0px (mobile devices)
                        0: {
                            slidesPerView: 1, // Show 1 slide
                        },
                        // When the window width is >= 768px (tablet and above)
                        768: {
                            slidesPerView: 2, // Show 2 slides
                        },
                    }}
                >
                    {testimonials.map(testimonial => (
                        <SwiperSlide key={testimonial.id} className="flex justify-center py-5">
                            <div className=" bg-common-white shadow-lg p-4 rounded-lg flex gap-4 laptop-xl:flex-col relative">
                                <img
                                    src={testimonial.imgSrc}
                                    alt={testimonial.name}
                                    className="w-[300px] mobile-sm:w-full h-[300px] object-cover rounded-lg mb-4"
                                />
                                <div className="flex flex-col justify-evenly">
                                    <blockquote className="pl-2 text-lg mb-4">
                                        &quot;{testimonial.review}&quot;
                                    </blockquote>
                                    <div className="flex items-center gap-2 mb-2">
                                        {Array(testimonial.rating)
                                            .fill()
                                            .map((_, index) => (
                                                <span
                                                    key={index}
                                                    className="text-orange-500 text-xl"
                                                >
                                                    ★
                                                </span>
                                            ))}
                                    </div>
                                    <h3 className=" font-bold z-10">{testimonial.name}</h3>
                                    <p className="text-primary">{testimonial.location}</p>
                                </div>

                                <img
                                    className="absolute w-[140px] laptop-xl:w-[100px] bottom-0 right-5 opacity-30 z-0"
                                    src="/qoute.png"
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Section>
    );
}
