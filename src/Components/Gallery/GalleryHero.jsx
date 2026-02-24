import React from 'react';

export default function GalleryHero() {
    return (
        <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
                style={{ backgroundImage: "url('/Images/slide_2.png')" }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Decorative Shapes */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center px-6" data-aos="zoom-out" data-aos-duration="1200">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-6">
                    <span className="text-white font-bold text-sm tracking-widest uppercase">Visual Journey</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4">
                    Our <span className="text-primary">Gallery</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-regular">
                    A glimpse into our world-class facilities, specialized treatments, and compassionate medical care.
                </p>
            </div>
        </section>
    );
}
