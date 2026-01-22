import React, { useEffect } from 'react'
import Home from './Components/Home/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhatsApp from './Common Components/Whatsapp.jsx';

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);
  return (
    <div>
      <WhatsApp />
      <Home />
    </div>
  )
}
