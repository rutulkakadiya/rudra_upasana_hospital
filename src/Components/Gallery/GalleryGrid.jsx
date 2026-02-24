import React, { useState } from 'react';
import { X, ZoomIn, Filter } from 'lucide-react';

const categories = ["All", "Hospital", "Team", "Services"];

const galleryImages = [
    { id: 1, src: "/Images/Upasana Hospital - Building Photo-.png", category: "Hospital", title: "Hospital Building" },
    { id: 2, src: "/Images/Dr. Parth Gol.jpg.jpeg", category: "Team", title: "Dr. Parth Gol" },
    { id: 3, src: "/Images/Dr. Komal Gol.jpg.jpeg", category: "Team", title: "Dr. Komal Gol" },
    { id: 4, src: "/Images/Dr. Sarju Sanghvi.jpg", category: "Team", title: "Dr. Sarju Sanghvi" },
    { id: 5, src: "/Images/Dr. Urvi Sanghvi.jpg.jpeg", category: "Team", title: "Dr. Urvi Sanghvi" },
    { id: 6, src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200", category: "Hospital", title: "Patient Ward" },
    { id: 7, src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200", category: "Services", title: "Diagnostic Lab" },
    { id: 8, src: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200", category: "Services", title: "Labor Room" },
    // { id: 9, src: "https://images.unsplash.com/photo-1579153138225-390ae270d41d?auto=format&fit=crop&q=80&w=1200", category: "Services", title: "OT Facility" },
];

export default function GalleryGrid() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredImages = activeCategory === "All"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-[90%] mx-auto px-6">
                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-16" data-aos="fade-up">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${activeCategory === cat
                                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            {cat === "All" && <Filter className="w-4 h-4" />}
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
                    {filteredImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="group relative overflow-hidden rounded-3xl bg-gray-100 aspect-square cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                src={image.src}
                                alt={image.title}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <ZoomIn className="w-7 h-7" />
                                </div>
                                <span className="text-white text-xs font-bold uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-70 transition-opacity delay-200">
                                    {image.category}
                                </span>
                                <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                    {image.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 animate-in fade-in duration-300">
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-[110]"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                        />
                        <div className="mt-8 text-center text-white">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">
                                {selectedImage.category}
                            </span>
                            <h3 className="text-3xl font-heading font-extrabold">{selectedImage.title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
