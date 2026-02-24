import React, { useEffect } from 'react';
import AboutUsHero from './AboutUsHero';
import AboutUsIntro from './AboutUsIntro';
import MissionVision from './MissionVision';
import MedicalTeam from './MedicalTeam';
import AboutWhyChooseUs from './AboutWhyChooseUs';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutUs() {
    return (
        <div className="overflow-hidden">
            <AboutUsHero />
            <AboutUsIntro />
            <MedicalTeam />
            <AboutWhyChooseUs />
            <MissionVision />
        </div>
    );
}
