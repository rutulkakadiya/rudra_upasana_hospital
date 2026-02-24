import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function ServiceCategory({ category, index }) {
    const isEven = index % 2 === 0;

    const handleButton = () => {

        const phoneNumber = "918849261444";
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const whatsappURL = isMobile
            ? `https://api.whatsapp.com/send?phone=${phoneNumber}`
            : `https://web.whatsapp.com/send?phone=${phoneNumber}`;
        window.open(whatsappURL, "_blank");

    };

    return (
        <section className={`py-24`}>
            <div className="max-w-[90%] mx-auto px-6">
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Content Side */}
                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`} data-aos={isEven ? "fade-right" : "fade-left"}>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                {category.icon}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 italic">
                                {category.title}
                            </h2>
                        </div>

                        <p className="text-xl text-primary font-semibold mb-8 leading-relaxed">
                            {category.subtitle}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {category.services.map((service, idx) => (
                                <div key={idx} className="flex items-start gap-3 group">
                                    <div className="mt-1 text-primary group-hover:scale-110 transition-transform">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <span className="text-gray-700 font-medium text-lg leading-tight group-hover:text-primary transition-colors">
                                        {service}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={handleButton}
                            className="bg-primary cursor-pointer font-regular hover:bg-pink-700 transition-all duration-300 px-8 py-4 rounded-[5px] text-white mt-[30px] font-semibold shadow-lg hover:shadow-primary/50"
                        >
                            Book Appointment
                        </button>
                    </div>

                    {/* Image Side */}
                    <div className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`} data-aos={isEven ? "fade-left" : "fade-right"}>
                        <div className={`absolute -inset-4 bg-primary/5 rounded-4xl ${isEven ? 'rotate-3' : '-rotate-3'} -z-10`}></div>
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-4/3 bg-pink-50">
                            <img
                                src={category.image}
                                alt={category.title}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=1000";
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
