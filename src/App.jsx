import React, { useEffect } from 'react'
import Home from './Components/Home/Home'
import AboutUs from './Components/About Us/AboutUs.jsx';
import ServicesPage from './Components/Services/ServicesPage.jsx';
import Gallery from './Components/Gallery/Gallery.jsx';
import Contact from './Components/Contact/Contact.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhatsApp from './Common Components/Whatsapp.jsx';
import Header from './Common Components/Header.jsx';
import Footer from './Common Components/Footer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Common Components/ScrollToTop.jsx';

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);
  return (
    <div className='overflow-hidden bg-primary/5'>
      <BrowserRouter>
        <Header />
        <WhatsApp />
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/aboutUs' element={<AboutUs />}></Route>
          <Route path='/services' element={<ServicesPage />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
