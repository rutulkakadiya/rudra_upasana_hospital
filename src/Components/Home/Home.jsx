import React from 'react'
import Header from '../../Common Components/Header'
import Slider from './Slider'
import AboutUsSection from './AboutUsSection'
import Services from './Services'
import WhyChooseUs from './WhyChooseUs'
import CallToAction from './CallToAction'
import Footer from '../../Common Components/Footer'
import Counter from './Counter'

export default function Home() {
    return (
        <div className='bg-primary/5'>
            <Header />
            <Slider />
            <AboutUsSection />
            <Services />
            <WhyChooseUs />
            <Counter />
            <CallToAction />
            <Footer />
        </div>
    )
}
