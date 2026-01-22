import { useEffect, useState } from "react";

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
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === active ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <div
                        className="w-full h-full bg-cover bg-center flex items-center"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="w-full h-full bg-black/80 flex justify-center text-center items-center">
                            <div className="max-w-5xl px-6 md:px-12 text-white">
                                <h1 className="font-heading font-bold text-3xl md:text-5xl mb-4">
                                    {slide.title}
                                </h1>
                                <h2 className="font-regular text-[14px] sm:text-lg md:text-2xl mb-4">
                                    {slide.subtitle}
                                </h2>
                                <center>
                                    <p className="font-regular hidden sm:block text-sm md:text-lg max-w-2xl mb-6">
                                        {slide.description}
                                    </p>
                                </center>
                                <div className="flex gap-4 justify-center">
                                    <button className="bg-primary font-regular hover:bg-pink-700 transition px-6 py-3 rounded-md font-semibold">
                                        Book Appointment
                                    </button>
                                    <button className="font-regular hidden sm:block border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActive(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${idx === active ? "bg-white scale-125" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
