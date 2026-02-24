import React, { useEffect } from 'react';
import GalleryHero from './GalleryHero';
import GalleryGrid from './GalleryGrid';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Gallery() {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="overflow-hidden">
            <GalleryHero />
            <GalleryGrid />
        </div>
    );
}
