import React from 'react';

export default function AboutUsIntro() {
    return (
        <section className="py-20">
            <div className="max-w-[90%] mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div data-aos="fade-right" data-aos-duration="1200">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-8 leading-tight">
                            Upasana Hospital – <span className="text-primary mt-2">Surendranagar</span>
                        </h2>
                        <div className="space-y-6 text-gray-600 font-regular text-lg leading-relaxed">
                            <p>
                                Upasana Hospital is a trusted center for women’s healthcare in Surendranagar, dedicated to providing comprehensive, compassionate, and advanced medical services. We specialize in maternity care, gynecological treatments, infertility solutions, and preventive women’s health services.
                            </p>
                            <p>
                                With a team of highly qualified doctors and modern medical facilities, we ensure accurate diagnosis, safe treatment, and personalized care for every patient. Our focus is on patient comfort, ethical medical practices, and delivering the highest standard of healthcare.
                            </p>
                            <p className="border-l-4 border-primary pl-6 py-2 italic bg-primary/5 rounded-r-xl">
                                We are committed to supporting women through every stage of life — from adolescence and pregnancy to menopause and beyond.
                            </p>
                        </div>
                    </div>

                    <div className="relative" data-aos="fade-left" data-aos-duration="1200">
                        <div className="absolute -inset-4 bg-primary/10 rounded-4xl rotate-3 -z-10"></div>
                        <img
                            src="/Images/about_us.png"
                            alt="Upasana Hospital"
                            loading="lazy"
                            className="rounded-4xl shadow-2xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-500"
                            onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000";
                            }}
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}
