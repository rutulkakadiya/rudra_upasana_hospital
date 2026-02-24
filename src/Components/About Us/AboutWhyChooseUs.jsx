import React from 'react';
import { Award, Zap, Heart, Shield, Home } from 'lucide-react';

const reasons = [
    {
        title: "Experienced and Qualified Doctors",
        icon: <Award className="w-8 h-8" />,
        desc: "A team of highly qualified specialists with years of expertise in women's health."
    },
    {
        title: "Modern Medical Equipment",
        icon: <Zap className="w-8 h-8" />,
        desc: "Equipped with the latest diagnostic and surgical technology for accurate care."
    },
    {
        title: "Personalized Patient Care",
        icon: <Heart className="w-8 h-8" />,
        desc: "Individualized treatment plans focused on your unique health needs and comfort."
    },
    {
        title: "Ethical and Transparent Treatment",
        icon: <Shield className="w-8 h-8" />,
        desc: "Complete transparency in medical procedures and ethical practices you can trust."
    },
    {
        title: "Comfortable and Safe Environment",
        icon: <Home className="w-8 h-8" />,
        desc: "A safe, hygienic, and welcoming environment designed for patient well-being."
    }
];

export default function AboutUsWhyChooseUs() {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 transition-transform duration-1000 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48 transition-transform duration-1000 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-[90%] mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">
                        Why Choose <br /> <span className="text-pink-200">Upasana Hospital?</span>
                    </h2>
                    <p className="text-xl text-pink-50 font-regular">
                        Providing a higher standard of healthcare with a patient-first approach.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    data-aos="fade-up">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl hover:bg-white hover:text-primary transition-all duration-500"

                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                            <p className="text-pink-50 group-hover:text-gray-600 font-regular leading-relaxed">
                                {reason.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
