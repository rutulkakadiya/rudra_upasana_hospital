import React from 'react';

export default function ContactMap() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="max-w-[90%] mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm">Find Us</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mt-3 mb-4 italic">
                        Our <span className="text-primary italic">Location</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="relative rounded-4xl overflow-hidden shadow-2xl h-[500px] border border-gray-100" data-aos="zoom-in">
                    {/* Using a reliable embed for Surendranagar near the specified landmark */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7360.374068351119!2d71.63621364163599!3d22.721288567544146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395941fe195d7047%3A0xdbe8ec063d023b3c!2sUpasana%20Hospital%20Surendranagar!5e0!3m2!1sen!2sin!4v1771920560043!5m2!1sen!2sin"
                        className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Upasana Hospital Location"
                    ></iframe>

                    {/* Map Overlay Card */}
                    <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-96 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden sm:block">
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold text-gray-900 text-xl italic">Upasana Hospital</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                58, Next to J.N.V. High School, Behind Shri M.P. Shah Arts & Science College, Swastik Society, Surendranagar, Gujarat – 363001
                            </p>
                            <a
                                href="https://maps.app.goo.gl/HHAsMyLBw45emAWK8"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-4 text-primary font-bold hover:underline flex items-center gap-2"
                            >
                                Get Directions
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
