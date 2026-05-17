import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Education {
  institution: string;
  degree: string;
  year: string;
}

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
}

interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
}

interface Doctor {
  name: string;
  title: string;
  education: Education[];
  certifications: string[];
  services: Service[];
  socialMedia: SocialMedia[];
  contact: ContactInfo;
  images: string[];
}

const DoctorProfile: React.FC<{ doctor: Doctor; onClose: () => void }> = ({
  doctor,
  onClose,
}) => {
  const { name, title, education, certifications, services, socialMedia, contact, images } = doctor;
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Handle escape key to close carousel ONLY
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCarouselOpen) {
        e.stopPropagation();
        e.preventDefault();
        setIsCarouselOpen(false);
      }
    };
    
    // Use capture phase to get event FIRST before parent dialog
    window.addEventListener("keydown", handleEscape, true);
    return () => window.removeEventListener("keydown", handleEscape, true);
  }, [isCarouselOpen]);

  // Prevent body scroll when carousel is open
  useEffect(() => {
    if (isCarouselOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCarouselOpen]);

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Keyboard navigation for carousel
  useEffect(() => {
    if (!isCarouselOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.stopPropagation();
        goToPrevious();
      }
      if (e.key === "ArrowRight") {
        e.stopPropagation();
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [isCarouselOpen, goToPrevious, goToNext]);

  const closeCarousel = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCarouselOpen(false);
  }, []);

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 ease-out animate-fadeInUp">      
      <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-teal-500 text-white relative overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-50">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="px-6 py-8 md:px-8 md:py-10 flex flex-row justify-between items-center gap-6 relative z-10">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{name}</h1>
            <p className="text-lg md:text-xl opacity-90 mt-2 font-medium">{title}</p>
            <div className="flex items-center mt-4 space-x-2">
              <div className="h-1 w-12 bg-white/30 rounded-full"></div>
              <div className="h-1 w-6 bg-white/60 rounded-full"></div>
              <div className="h-1 w-3 bg-white/90 rounded-full"></div>
            </div>
          </div>
          <div className="relative">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/Images/Clinic/dentist.jpg"
                alt={name}
                width={144}
                height={144}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white shadow-md"></div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="p-6 md:p-8 space-y-10">
        {/* Education and Certifications */}
        <div className="space-y-5">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-800">Education & Certifications</h2>
          </div>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="group flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg">{edu.institution}</h3>
                  <p className="text-gray-600 mt-1">{edu.degree} <span className="text-gray-400">•</span> {edu.year}</p>
                </div>
              </div>
            ))}
          </div>

          {certifications.length > 0 && (
            <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-100">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Services */}
        <div className="space-y-5">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-800">Specialized Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-5 bg-white rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img src={service.icon} alt={service.title} className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-4 border-l-2 border-blue-200 group-hover:border-blue-500 transition-colors">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-5">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href={`tel:${contact.phone}`}
              className="group flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:border-blue-200 border border-transparent"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21, 3 14.284, 3 6V5z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">Phone</p>
                <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{contact.phone}</p>
              </div>
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="group flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:border-blue-200 border border-transparent"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors truncate">{contact.email}</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:border-green-200 border border-transparent"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                <svg className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">WhatsApp</p>
                <p className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">Message on WhatsApp</p>
              </div>
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="space-y-5">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-800">Follow Me</h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                <img src={social.icon} alt={social.platform} className="w-6 h-6 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.platform}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Images Gallery */}
        {images.length > 0 && (
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-800">Gallery</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {images.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setIsCarouselOpen(true);
                  }}
                  className="relative rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={image}
                      alt={`Gallery Image ${index + 1}`}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-3">
                    <span className="text-white text-sm font-medium">Click to view</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="px-6 md:px-8 pb-8 pt-2 flex flex-col sm:flex-row gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold shadow-sm hover:shadow-md active:scale-95"
          >
            Close
          </button>
          <a
            href="/bookAppointment"
            className="flex-1 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg active:scale-95 text-center"
          >
            Book Appointment
          </a>
        </div>


        <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
        {/* Custom Carousel - NO SHADCN */}
        {mounted && isCarouselOpen && createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                e.stopPropagation();
                setIsCarouselOpen(false);
              }
            }}
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center px-4 py-12">
              <button
                onClick={closeCarousel}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close carousel"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Custom Simple Carousel */}
              <div className="w-full max-w-6xl relative">
                <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
                  <img
                    src={images[currentImageIndex]}
                    alt={`Gallery Image ${currentImageIndex + 1}`}
                    className="max-h-full max-w-full w-auto h-auto object-contain rounded-lg shadow-2xl transition-opacity duration-300"
                  />
                </div>

                <button
                  onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 border-0 text-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); goToNext(); }}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 border-0 text-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </div>
  );
};

export default DoctorProfile;
