import React, { useState, useEffect, useRef } from 'react';

const stats = [
    { value: 25, suffix: "+", label: "Years of Experience" },
    { value: 500, suffix: "+", label: "Happy Deliveries" },
    { value: 1000, suffix: "+", label: "Satisfied Patients" },
    { value: 24, suffix: "/7", label: "Emergency Services" }
];

export default function Counter() {
    const [hoveredStat, setHoveredStat] = useState(null);
    const [counts, setCounts] = useState(stats.map(() => 0));
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startCounters();
                } else {
                    // 👇 Section chhodte hi reset
                    setCounts(stats.map(() => 0));
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    const startCounters = () => {
        stats.forEach((stat, index) => {
            let start = 0;
            const duration = 1800;
            const increment = stat.value / (duration / 16);

            const counter = setInterval(() => {
                start += increment;

                if (start >= stat.value) {
                    start = stat.value;
                    clearInterval(counter);
                }

                setCounts(prev => {
                    const updated = [...prev];
                    updated[index] = Math.floor(start);
                    return updated;
                });
            }, 16);
        });
    };

    return (
        <section ref={sectionRef} className="py-20 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-duration="1500">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            onMouseEnter={() => setHoveredStat(idx)}
                            onMouseLeave={() => setHoveredStat(null)}
                        >
                            <div
                                className={`p-6 md:p-8 rounded-2xl border-2 transition-all duration-500
                                ${hoveredStat === idx ? 'scale-105 shadow-2xl -translate-y-2' : 'shadow-lg'}`}
                                style={{
                                    borderColor: hoveredStat === idx ? '#8e2a6d' : '#8e2a6d',
                                    backgroundColor: hoveredStat === idx ? '#8e2a6d' : '#fff'
                                }}
                            >
                                <div
                                    className={`text-4xl text-center md:text-5xl font-black mb-2
                                    ${hoveredStat === idx ? 'text-white' : 'text-transparent bg-clip-text'}`}
                                    style={{
                                        backgroundImage: hoveredStat === idx
                                            ? 'none'
                                            : 'linear-gradient(to bottom right, #8e2a6d, #8e2a6d)'
                                    }}
                                >
                                    {counts[idx]}{stat.suffix}
                                </div>

                                <div
                                    className={`text-sm text-center font-semibold
                                    ${hoveredStat === idx ? 'text-pink-100' : 'text-gray-600'}`}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
