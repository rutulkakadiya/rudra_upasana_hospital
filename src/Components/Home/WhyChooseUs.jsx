import React, { useState } from 'react';

const features = [
    {
        title: "Patient-First Approach",
        description: "Your comfort, safety, and well-being are at the core of everything we do.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        gradient: "from-primary to-primary"
    },
    {
        title: "Expert Medical Team",
        description: "Highly qualified doctors and specialists dedicated to providing the best care.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        gradient: "from-primary to-primary"
    },
    {
        title: "Advanced Technology",
        description: "Equipped with state-of-the-art medical technology for accurate diagnosis and treatment.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        gradient: "from-primary to-primary"
    },
    {
        title: "24/7 Emergency Support",
        description: "Always ready to handle any medical emergency with our round-the-clock services.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        gradient: "from-primary to-primary"
    }
];

export default function WhyChooseUs() {
    const [hoveredFeature, setHoveredFeature] = useState(null);

    return (
        <section className="py-24 relative overflow-hidden">


            <div className="max-w-[90%] mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-8" data-aos="fade-right" data-aos-duration="1500">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-200 bg-pink-50 mb-6">
                                <div className="w-2 h-2 rounded-full animate-pulse bg-primary"></div>
                                <span className="text-sm font-bold tracking-wider uppercase text-pink-700">Why Choose Upasana</span>
                            </div>
                            <h2 className="text-4xl font-heading md:text-5xl font-extrabold leading-tight text-gray-900">
                                A Higher Standard of <span className="text-primary">Healthcare</span>
                            </h2>

                            <p className="text-gray-600 font-regular text-lg leading-relaxed">
                                We combine advanced medical technology with a human touch. Our team of experts is dedicated to your well-being, providing personalized care that you can trust.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-pink-200 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-default"
                                    onMouseEnter={() => setHoveredFeature(idx)}
                                    onMouseLeave={() => setHoveredFeature(null)}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-300 bg-gradient-to-br ${feature.gradient} group-hover:scale-110 shadow-md`}>
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold font-primary text-lg text-gray-800 mb-2 transition-colors">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-500 font-regular text-sm leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Right Image */}
                    <div className="relative h-full hidden lg:block" data-aos="fade-left" data-aos-duration="1500">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary rounded-[40px] rotate-3 opacity-20 transform translate-x-4 translate-y-4"></div>
                        <div className="relative h-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="/Images/why_us.jpeg"
                                alt="Doctor caring for patient"
                                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                            />
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div> */}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}