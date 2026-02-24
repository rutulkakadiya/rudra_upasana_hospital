import React, { useEffect } from 'react';
import ContactHero from './ContactHero';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <div className="overflow-hidden">
            <ContactHero />
            <ContactInfo />
            <ContactForm />
            <ContactMap />
        </div>
    );
}
