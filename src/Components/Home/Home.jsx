import React from 'react'
import Slider from './Slider'
import AboutUsSection from './AboutUsSection'
import Services from './Services'
import WhyChooseUs from './WhyChooseUs'
import CallToAction from './CallToAction'
import Counter from './Counter'

export default function Home() {
    return (
        <div className='bg-primary/5'>
            <Slider />
            <AboutUsSection />
            <Services />
            <WhyChooseUs />
            <Counter />
            <CallToAction />    
        </div>
    )
}
