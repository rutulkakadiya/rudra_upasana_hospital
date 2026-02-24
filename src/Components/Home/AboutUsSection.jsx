import React from 'react'
import { Link } from 'react-router-dom';

export default function AboutUsSection() {
  return (
    <section
      id="about"
      className="py-20"
    >
      <div className="w-[90%] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* Right Image */}
          <div className="relative" data-aos="fade-right" data-aos-duration="1500">
            {/* <div className="absolute -top-6 -left-6 w-full h-full rounded-2xl bg-pink-100"></div> */}
            <img
              src="/Images/about_us.png"
              alt="Upasana Hospital Care"
              className="relative rounded-full shadow-lg object-cover w-full"
            />
          </div>

          {/* Left Content */}
          <div data-aos="fade-left" data-aos-duration="1500">
            <p className="text-primary font-semibold mb-2">
              About Upasana 
              Hospital
            </p>

            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-snug">
              A Trusted Name in <br />
              Maternity, Women’s Health & Fertility
            </h2>

            <p className="text-gray-600 font-regular mb-5 leading-relaxed">
              Upasana Hospital is a trusted healthcare destination dedicated to
              maternity care, women’s health, and fertility services. With a
              strong foundation of medical expertise and compassion, we focus on
              providing safe, ethical, and patient-centric care at every stage
              of a woman’s life.
            </p>

            <p className="text-gray-600 font-regular mb-6 leading-relaxed">
              Our hospital combines advanced medical technology with experienced
              specialists to ensure accurate diagnosis, personalized treatment,
              and complete emotional support. We believe healthcare is not just
              about treatment, but about trust.
            </p>

            {/* Highlights */}
            <div className="hidden sm:grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-primary font-bold">
                  ✓
                </span>
                <p className="text-gray-700 font-regular font-medium">
                  Expert Medical Team
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-primary font-bold">
                  ✓
                </span>
                <p className="text-gray-700 font-regular font-medium">
                  Advanced Facilities
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-primary font-bold">
                  ✓
                </span>
                <p className="text-gray-700 font-regular font-medium">
                  Compassionate Care
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-primary font-bold">
                  ✓
                </span>
                <p className="text-gray-700 font-regular font-medium">
                  Patient-First Approach
                </p>
              </div>
            </div>

            <Link to="/aboutUs">
              <button className="bg-primary font-regular hover:bg-pink-700 transition text-white px-7 py-3 rounded-full font-semibold">
                Learn More About Us
              </button>
            </Link>
          </div>


        </div>
      </div>
    </section>
  );
}
