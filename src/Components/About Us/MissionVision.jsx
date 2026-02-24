import React from 'react';

export default function MissionVision() {
    return (
        <section className="py-24">
            <div className="max-w-[90%] mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Mission */}
                    <div
                        className="group p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/20 relative overflow-hidden"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-primary/10 transition-colors"></div>

                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl text-primary mb-8 group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>

                        <h3 className="text-3xl font-heading font-bold text-gray-900 mb-6 underline decoration-pink-200 decoration-4 underline-offset-8">Our Mission</h3>
                        <p className="text-xl text-gray-700 leading-relaxed font-regular">
                            To provide safe, affordable, and advanced women’s healthcare with compassion and excellence.
                        </p>
                    </div>

                    {/* Vision */}
                    <div
                        className="group p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/20 relative overflow-hidden"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-primary/10 transition-colors"></div>

                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl text-primary mb-8 group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>

                        <h3 className="text-3xl font-heading font-bold text-gray-900 mb-6 underline decoration-pink-200 decoration-4 underline-offset-8">Our Vision</h3>
                        <p className="text-xl text-gray-700 leading-relaxed font-regular">
                            To become a trusted center for maternity care, gynecological treatment, and infertility solutions, offering complete care under one roof.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
