import React from 'react';

const team = [
    {
        name: "Dr. Parth Gol",
        qualifications: "M.B.B.S., D.G.O. (Gynecology)",
        description: "Experienced in maternity care, gynecological treatments, and women’s health management with a patient-first approach.",
        image: "/Images/Dr. Parth Gol.jpg.jpeg"
    },
    {
        name: "Dr. Komal Gol",
        qualifications: "M.B.B.S., M.S. (Gynecology)",
        description: "Specialist in advanced gynecological surgeries and high-risk pregnancy management.",
        image: "/Images/Dr. Komal Gol.jpg.jpeg"
    },
    {
        name: "Dr. Sarju Sanghvi",
        qualifications: "M.B.B.S., D.G.O., D.N.B. (Gynecology)",
        description: "Expert in infertility treatments, laparoscopic procedures, and comprehensive women’s healthcare.",
        image: "/Images/Dr. Sarju Sanghvi.jpg"
    },
    {
        name: "Dr. Urvi Sanghvi",
        qualifications: "M.B.B.S.",
        description: "Providing dedicated medical care with a focus on patient safety and personalized attention.",
        image: "/Images/Dr. Urvi Sanghvi.jpg.jpeg"
    }
];

export default function MedicalTeam() {
    return (
        <section className="py-24">
            <div className="max-w-[90%] mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm">Dedicated Experts</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mt-3 mb-4">
                        Our <span className="text-primary">Medical Team</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    data-aos="fade-up"
                >
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
                        >
                            {/* Member Image */}
                            <div className="relative overflow-hidden aspect-4/5 bg-pink-50">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Member Info */}
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-primary font-semibold text-sm mb-4">
                                    {member.qualifications}
                                </p>
                                <p className="text-gray-600 text-sm font-regular leading-relaxed flex-1">
                                    {member.description}
                                </p>
                                {/* <div className="mt-6 pt-6 border-t border-gray-100">
                                    <div className="flex gap-4">
                                        <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                                        </button>
                                        <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                        </button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
