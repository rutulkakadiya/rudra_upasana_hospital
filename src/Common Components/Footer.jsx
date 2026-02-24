import React from "react";
import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Linkedin,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-gray-950 text-white pt-20 pb-10 border-t border-gray-900 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute -top-20 left-1/4 w-96 h-96 bg-pink-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Main Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">

                    {/* Brand */}
                    <div className="space-y-6">
                        <img src="/logo.png" alt="Upasana Hospital" className="h-24" />
                        <p className="text-white text-sm leading-relaxed">
                            A trusted name in maternity, women’s healthcare & fertility,
                            delivering compassionate and advanced medical care.
                        </p>

                        <div className="flex gap-4">
                            <SocialIcon Icon={Facebook} />
                            <SocialIcon Icon={Instagram} />
                            <SocialIcon Icon={Linkedin} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <FooterTitle>Quick Links</FooterTitle>
                        <ul className="space-y-4">
                            <FooterLink text="Home" />
                            <FooterLink text="About Us" />
                            <FooterLink text="Our Services" />
                            <FooterLink text="Expert Doctors" />
                            <FooterLink text="Contact Us" />
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <FooterTitle>Our Services</FooterTitle>
                        <ul className="space-y-4">
                            <FooterLink text="Maternity Care" />
                            <FooterLink text="Fertility Solutions" />
                            <FooterLink text="Gynaecology" />
                            <FooterLink text="Pediatrics" />
                            <FooterLink text="Laparoscopic Surgery" />
                            <FooterLink text="Ultrasound & Diagnostics" />
                        </ul>
                    </div>

                    {/* Contact */}
                    {/* Contact */}
                    <div>
                        <FooterTitle>Contact Information</FooterTitle>

                        <div className="space-y-6 text-white text-sm">
                            <ContactItem Icon={MapPin}>
                                58, Next to J.N.V. High School,<br />
                                Behind Shri M.P. Shah Arts & Science College,<br />
                                Swastik Society, Shantivan Society,<br />
                                Surendranagar, Gujarat – 363001
                            </ContactItem>

                            <ContactItem Icon={Phone}>
                                +91 88492 61444
                            </ContactItem>

                            <ContactItem Icon={Mail}>
                                upasanahospital@gmail.com
                            </ContactItem>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                    <p>
                        © {new Date().getFullYear()} Upasana Hospital. All rights reserved.
                    </p>
                    <p>
                        Developed by{" "}
                        <a
                            href="https://rudrabranding.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-primary font-semibold hover:underline"
                        >
                            Rudra Branding
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

/* ---------- Components ---------- */

function FooterTitle({ children }) {
    return (
        <h3 className="text-lg font-semibold mb-6 text-white relative inline-block">
            {children}
            <span className="block w-10 h-[2px] bg-pink-600 mt-2 rounded-full" />
        </h3>
    );
}

function FooterLink({ text }) {
    return (
        <li>
            <a
                href="#"
                className="flex items-center gap-3 text-white hover:text-pink-500 transition-all duration-300 group"
            >
                <span className="w-2 h-2 rounded-full bg-pink-700 group-hover:bg-pink-500 transition" />
                {text}
            </a>
        </li>
    );
}

function ContactItem({ Icon, children }) {
    return (
        <div className="flex gap-4 items-start group">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-pink-500 group-hover:bg-primary group-hover:text-white transition">
                <Icon size={18} />
            </div>
            <p className="group-hover:text-gray-200 transition">
                {children}
            </p>
        </div>
    );
}

function SocialIcon({ Icon }) {
    return (
        <a
            href="#"
            className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg"
        >
            <Icon size={18} />
        </a>
    );
}
