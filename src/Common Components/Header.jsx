import { useEffect, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/90 shadow-md backdrop-blur-lg py-2"
          : "bg-transparent py-4"
          }`}
      >
        <div className="max-w-[95%] md:max-w-[90%] mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="Upasana Hospital"
                  className="h-[60px] md:h-[80px] w-auto transition-transform hover:scale-105"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className={`hidden lg:flex font-regular items-center gap-8 font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              <NavLink href="/" text="Home" scrolled={scrolled} />
              <NavLink href="/aboutUs" text="About us" scrolled={scrolled} />
              <NavLink href="/services" text="Services" scrolled={scrolled} />
              <NavLink href="/gallery" text="Gallery" scrolled={scrolled} />
              <NavLink href="/contact" text="Contact Us" scrolled={scrolled} />
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:+918849261444"
                className={`text-sm font-regular font-bold flex items-center gap-2 ${scrolled ? 'text-gray-900' : 'text-white'}`}
              >
                Emergency 24×7
              </a>
              <LanguageSelector />

            </div>

            {/* Mobile Menu Icon */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>


          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-500 ease-in-out lg:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-8 flex flex-col h-full overflow-y-auto">
          {/* Header in Sidebar */}
          <div className="flex justify-between items-center mb-10">
            <img
              src="/logo.png"
              alt="Upasana Hospital"
              className="h-[60px] w-auto"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-primary hover:bg-primary/5 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2 flex-1">
            <MobileNavLink href="/" text="Home" />
            <MobileNavLink href="/aboutUs" text="About Us" />
            <MobileNavLink href="/services" text="Services" />
            <MobileNavLink href="/gallery" text="Gallery" />
            <MobileNavLink href="/contact" text="Contact Us" />
          </nav>

          {/* Bottom Actions */}
          <div className="mt-10 space-y-4">
            <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 mb-6">
              <p className="text-sm text-gray-500 mb-1 font-regular">Emergency Number</p>
              <a href="tel:+918849261444" className="text-xl font-bold text-primary flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                +91 88492 61444
              </a>
            </div>

            <button
              onClick={() => {
                const phoneNumber = "918849261444";
                const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                const whatsappURL = isMobile
                  ? `https://api.whatsapp.com/send?phone=${phoneNumber}`
                  : `https://web.whatsapp.com/send?phone=${phoneNumber}`;
                window.open(whatsappURL, "_blank");
                setMobileMenuOpen(false);
              }}
              className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:bg-pink-700 transition-all active:scale-[0.98]"
            >
              Book Appointment
            </button>
            <div className="flex justify-center pt-4">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function NavLink({ href, text, scrolled }) {
  return (
    <Link to={href} className="relative group py-2">
      <span className={`transition-colors ${scrolled ? 'group-hover:text-primary text-gray-700' : 'group-hover:text-primary text-white'}`}>{text}</span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}

function MobileNavLink({ href, text }) {
  return (
    <Link
      to={href}
      className="flex items-center justify-between text-lg font-medium text-gray-700 p-4 rounded-xl hover:bg-primary/5 hover:text-primary transition-all group"
    >
      <span>{text}</span>
      <svg
        className="w-5 h-5 text-gray-300 group-hover:text-primary transition-all transform group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  )
}
