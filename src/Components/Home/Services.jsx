import React from 'react';

const services = [
  {
    title: "Maternity Care",
    description: "Experience the joy of motherhood with our comprehensive pre-natal and post-natal care, ensuring a safe delivery.",
    image: "/Images/service_1.png",
  },
  {
    title: "Fertility Solutions",
    description: "Advanced fertility treatments including IVF and IUI, providing hope and happiness to couples dreaming of a family.",
    image: "/Images/service_2.png",
  },
  {
    title: "Gynaecology",
    description: "Expert care for women's health issues ranging from adolescence to menopause, with advanced screenings and treatments.",
    image: "/Images/service_3.png",
  },
  {
    title: "Pediatrics",
    description: "Compassionate care for your little ones, offering vaccinations, growth monitoring, and treatment for common childhood illnesses.",
    image: "/Images/service_4.png",
  },
  {
    title: "Laparoscopic Surgery",
    description: "Minimally invasive surgical procedures ensuring faster recovery, less pain, and minimal scarring for patients.",
    image: "/Images/service_5.png",
  },
  {
    title: "Ultrasound & Diagnostics",
    description: "State-of-the-art diagnostic facilities providing accurate and timely reports for better treatment planning.",
    image: "/Images/service_6.png",
  }
];

export default function Services() {
  return (
    <section className="py-24">
      <div className="w-[90%] mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1500">
          <span className="text-primary  font-regular font-bold uppercase tracking-wider text-sm">Our Expertise</span>
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold text-gray-900 mt-3 mb-6">
            Clinical Excellence
          </h2>
          <p className="text-gray-500 font-regular max-w-2xl mx-auto text-lg">
            We offer a wide range of specialized medical services designed to meet the unique health needs of women and children.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-duration="1500">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
            >
              <div className="w-24 h-24 rounded-full bg-pink-50 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <img className='h-16 w-16' src={service.image} alt="" />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 font-regular leading-relaxed">
                {service.description}
              </p>
              <a href="#" className="inline-block mt-6 font-regular text-primary font-semibold text-sm hover:text-pink-700 items-center">
                Read More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
