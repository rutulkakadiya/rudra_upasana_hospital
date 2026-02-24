import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: <MapPin size={26} />,
    title: "Visit Us",
    content: (
      <>
        58, Next to J.N.V. High School,
        <br />
        Behind Shri M.P. Shah College,
        <br />
        Surendranagar, Gujarat – 363001
      </>
    ),
  },
  {
    icon: <Phone size={26} />,
    title: "Call Us",
    content: "+91 88492 61444",
    link: "tel:+918849261444",
  },
  {
    icon: <Mail size={26} />,
    title: "Email Us",
    content: "upasanahospital@gmail.com",
    link: "mailto:upasanahospital@gmail.com",
  },
  {
    icon: <Clock size={26} />,
    title: "Working Hours",
    content: "24/7 Emergency Care Available",
  },
];

export default function ContactInfo() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="w-[95%] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            We're here to assist you anytime. Reach out for appointments,
            emergencies, or general inquiries.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                {detail.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {detail.title}
              </h3>

              {/* Content */}
              {detail.link ? (
                <a
                  href={detail.link}
                  className="text-gray-600 hover:text-primary transition-colors text-lg font-medium"
                >
                  {detail.content}
                </a>
              ) : (
                <p className="text-gray-600 text-lg leading-relaxed">
                  {detail.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}