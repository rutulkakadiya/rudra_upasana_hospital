import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
    {
        title: "A Trusted Name in Maternity, Women’s Health & Fertility",
        subtitle: "Compassionate Care | Advanced Treatment | Trusted Expertise",
        description:
            "Upasana Hospital is committed to delivering personalized healthcare solutions with safety, care, and excellence for every woman.",
        image: "/Images/slide_1.png",
    },
    {
        title: "Safe Motherhood, Healthy Beginnings",
        subtitle: "Complete Maternity Care Under One Roof",
        description:
            "From pregnancy to delivery, we ensure expert maternity care with modern facilities and experienced doctors.",
        image: "/Images/slide_2.png",
    },
    {
        title: "Dedicated Care for Every Woman",
        subtitle: "Comprehensive Women’s Health Services",
        description:
            "We provide specialized care for gynecological, hormonal, and reproductive health needs at every stage of life.",
        image: "/Images/slide_3.png",
    },
    {
        title: "Advanced Fertility Care with Compassion",
        subtitle: "Your Journey to Parenthood Starts Here",
        description:
            "Scientifically advanced fertility treatments combined with personalized care to help you build your family.",
        image: "/Images/slide_4.png",
    },
];

export default function Slider() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const handleButton = () => {
        const phoneNumber = "918849261444";
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const whatsappURL = isMobile
            ? `https://api.whatsapp.com/send?phone=${phoneNumber}`
            : `https://web.whatsapp.com/send?phone=${phoneNumber}`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <div className="relative w-full h-screen overflow-hidden group">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, Mousewheel]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="w-full h-full bg-cover bg-center flex items-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="w-full h-full bg-black/70 flex justify-center text-center items-center">
                                <div className="max-w-5xl px-6 md:px-12 text-white">
                                    <h1 className="font-heading font-bold text-3xl md:text-5xl mb-4 animate-fadeInDown">
                                        {slide.title}
                                    </h1>
                                    <h2 className="font-regular text-[14px] sm:text-lg md:text-2xl mb-4 animate-fadeInUp delay-200">
                                        {slide.subtitle}
                                    </h2>
                                    <center>
                                        <p className="font-regular hidden sm:block text-sm md:text-lg max-w-2xl mb-6 animate-fadeInUp delay-500">
                                            {slide.description}
                                        </p>
                                    </center>
                                    <div className="flex gap-4 justify-center animate-fadeInUp delay-700">
                                        <button
                                            onClick={handleButton}
                                            className="bg-primary cursor-pointer font-regular hover:bg-pink-700 transition-all duration-300 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-primary/50"
                                        >
                                            Book Appointment
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button
                ref={prevRef}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary text-white backdrop-blur-md transition-all duration-300 border border-white/20 hover:border-primary cursor-pointer opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-0"
            >
                <IoChevronBack size={24} />
            </button>
            <button
                ref={nextRef}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary text-white backdrop-blur-md transition-all duration-300 border border-white/20 hover:border-primary cursor-pointer opacity-0 group-hover:opacity-100 translate-x-[20px] group-hover:translate-x-0"
            >
                <IoChevronForward size={24} />
            </button>

            {/* Custom Pagination */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3 custom-pagination"></div>

            <style jsx="true">{`
                .custom-pagination .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: rgba(255, 255, 255, 0.5);
                    opacity: 1;
                    transition: all 0.3s ease;
                    border-radius: 6px;
                }
                .custom-pagination .swiper-pagination-bullet-active {
                    background: var(--color-primary, #e91e63);
                    width: 30px;
                }
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeInDown {
                    animation: fadeInDown 0.8s ease-out forwards;
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                .delay-200 {
                    animation-delay: 0.2s;
                }
                .delay-500 {
                    animation-delay: 0.5s;
                }
                .delay-700 {
                    animation-delay: 0.7s;
                }
            `}</style>
        </div>
    );
}
