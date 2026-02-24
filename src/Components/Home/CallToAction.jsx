import React from 'react';

export default function CallToAction() {
    
    const handleButton = () => {

        const phoneNumber = "918849261444";
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const whatsappURL = isMobile
            ? `https://api.whatsapp.com/send?phone=${phoneNumber}`
            : `https://web.whatsapp.com/send?phone=${phoneNumber}`;
        window.open(whatsappURL, "_blank");
    
    };
    return (
        <section className="py-20 bg-primary relative overflow-hidden">


            <div className="w-[90%] mx-auto px-6 relative z-10 text-center">
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                    Ready to Prioritize Your Health?
                </h2>
                <p className="text-pink-100 font-regular text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Book an appointment today with our expert doctors and take the first step towards a healthier tomorrow.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={handleButton} className="bg-white font-regular text-primary hover:bg-gray-100 transition px-8 py-4 rounded-full font-bold text-lg shadow-lg">
                        Book Your Appointment
                    </button>
                    <a href="tel:+918849261444">
                        <button className="bg-transparent cursor-pointer font-regular border-2 border-white text-white hover:bg-white/10 transition px-8 py-4 rounded-full font-bold text-lg">
                        Contact Support
                    </button>
                    </a>
                </div>
            </div>
        </section>
    );
}
