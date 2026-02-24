import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="py-24">
            <div className="max-w-[90%] mx-auto px-6">
                <div className="grid lg:grid-cols-5 gap-16 items-start">
                    {/* Form Content */}
                    <div className="lg:col-span-3 bg-white p-10 md:p-16 rounded-4xl shadow-xl border border-gray-100" data-aos="fade-right">
                        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-gray-900 mb-8 italic">
                            Send Us a <span className="text-primary italic">Message</span>
                        </h2>

                        {isSubmitted ? (
                            <div className="bg-green-50 border border-green-100 p-8 rounded-3xl text-center animate-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                                <p className="text-gray-600 font-medium">Thank you for reaching out. We will get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Your Name</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your full name"
                                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300 outline-none text-gray-700 font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300 outline-none text-gray-700 font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Phone Number</label>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Enter phone number"
                                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300 outline-none text-gray-700 font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Subject</label>
                                        <input
                                            required
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="What is this about?"
                                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300 outline-none text-gray-700 font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Your Message</label>
                                    <textarea
                                        required
                                        rows="5"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you?"
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300 outline-none text-gray-700 font-medium resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    disabled={isSubmitting}
                                    className="w-full md:w-auto px-12 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Side Content */}
                    <div className="lg:col-span-2 py-10" data-aos="fade-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Reach Out?</h3>
                        <div className="space-y-8">
                            <ReachOutItem
                                title="Immediate Support"
                                desc="Our dedicated team is ready to assist you with any inquiries or emergency support."
                            />
                            <ReachOutItem
                                title="Expert Guidance"
                                desc="Get direct access to specialist advice regarding treatments and services."
                            />
                            <ReachOutItem
                                title="Appointment Booking"
                                desc="Easily schedule your visit or consultation through our direct contact channels."
                            />
                        </div>

                        <div className="mt-16 p-8 bg-pink-50 rounded-4xl border border-pink-100">
                            <h4 className="text-primary font-bold mb-2 uppercase tracking-widest text-sm">Emergency?</h4>
                            <p className="text-gray-900 text-2xl font-extrabold mb-4 italic">+91 88492 61444</p>
                            <p className="text-gray-600 font-medium italic">Our emergency care unit is available 24/7 for maternity and gynecological emergencies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ReachOutItem({ title, desc }) {
    return (
        <div className="flex gap-5">
            <div className="mt-1">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white scale-75 md:scale-100">
                    <CheckCircle2 className="w-4 h-4" />
                </div>
            </div>
            <div>
                <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
                <p className="text-gray-600 font-regular text-sm leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}
