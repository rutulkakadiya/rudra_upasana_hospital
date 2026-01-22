import { useEffect, useState } from "react";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
              <a href="#" className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="Upasana Hospital"
                  className="h-[60px] md:h-[80px] w-auto"
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <nav className={`hidden md:flex font-regular items-center gap-8 font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              <NavLink href="" text="Home" scrolled={scrolled} />
              <NavLink href="" text="About us" scrolled={scrolled} />
              <NavLink href="" text="Services" scrolled={scrolled} />
              <NavLink href="" text="Doctors" scrolled={scrolled} />
              <NavLink href="" text="Contact Us" scrolled={scrolled} />
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="tel:+918849261444"
                className={`text-sm font-regular font-bold flex items-center gap-2 ${scrolled ? 'text-gray-900' : 'text-white'}`}
              >
                Emergency 24×7
              </a>
              <button className="bg-primary font-regular hover:bg-pink-700 hover:scale-105 transition-all text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-primary/30">
                Book Appointment
              </button>
              <LanguageSelector />

            </div>

            {/* Mobile Menu Icon */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}
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
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-bold text-primary">Upasana</span>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-gray-100 rounded-full text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="space-y-4 flex-1">
            <MobileNavLink href="#home" text="Home" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink href="#about" text="About Us" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink href="#services" text="Services" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink href="#doctors" text="Doctors" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavLink href="#contact" text="Contact Us" onClick={() => setMobileMenuOpen(false)} />
          </div>

          <div className="mt-8 space-y-4">
            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20">
              Book Appointment
            </button>
            <button className="w-full border-2 border-gray-200 text-gray-700 py-4 rounded-xl font-bold text-lg">
              Call Emergency
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function NavLink({ href, text, scrolled }) {
  return (
    <a href={href} className="relative group py-2">
      <span className={`transition-colors ${scrolled ? 'group-hover:text-primary' : 'group-hover:text-primary'}`}>{text}</span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </a>
  )
}

function MobileNavLink({ href, text, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block text-xl font-medium text-gray-800 py-3 border-b border-gray-100 hover:text-primary hover:pl-2 transition-all"
    >
      {text}
    </a>
  )
}
