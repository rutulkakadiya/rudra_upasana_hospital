import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './Components/Home/Home';
import CompanyProfile from './Components/Company Profile/CompanyProfile';
import Products from './Components/Products/Products';
import ProductDetail from './Components/Products/ProductDetail';
import Gallery from './Components/Gallery/Gallery';
import ContactUs from './Components/Contact Us/ContactUs';
import EBrochure from './Components/E-Brochure/EBrochure';
import Header from './Common Components/Header';
import Whatsapp from './Common Components/Whatsapp';
import ScrollToTop from "./Common Components/ScrollToTop"
import AdminRoutes from './AdminRoutes';

/* ---------------- INNER ROUTES COMPONENT ---------------- */
function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="overflow-y-hidden">
      {!isAdminRoute && <Header />}
      {!isAdminRoute && <Whatsapp />}
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companyProfile" element={<CompanyProfile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/eBrochure" element={<EBrochure />} />
        <Route path="/contactUs" element={<ContactUs />} />

        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </div>
  );
}

/* ---------------- MAIN APP ---------------- */
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
