"use client";

import React from "react";
import "animate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import BookAppointmentForm from "../components/BookAppointmentForm";
// import Image from "next/image";
import SwiperCore from "swiper";

const AppointmentPage: React.FC = () => {
  // Register the Autoplay module
  SwiperCore.use([Autoplay]);
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white p-16 text-center shadow-xl animate__animated animate__fadeInDown">
        <h1 className="text-5xl font-extrabold tracking-wide">
          Book Your Appointment
        </h1>
        <p className="mt-4 text-lg font-medium">
          Let us take care of your smile with professional dental care.
        </p>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-40 pointer-events-none"></div>
      </header>

      {/* Highlights Section */}
      <section className="py-10">
        <h2 className="text-4xl font-bold text-center text-green-600 animate__animated animate__fadeInUp">
          Why Choose Us?
        </h2>
        <p className="text-center text-gray-500 mt-2 mb-12">
          Discover what makes us stand out in dental care.
        </p>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={500}
          modules={[Autoplay]}
          className="mySwiper px-6 md:px-20"
        >
          <SwiperSlide>
            <div className="bg-gradient-to-br from-white to-blue-50 shadow-lg p-8 rounded-lg text-center animate__animated animate__fadeInUp">
              <h3 className="text-2xl font-semibold text-blue-600">
                Experienced Professionals
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our team has decades of experience providing dental
                care to all our patients.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gradient-to-br from-white to-blue-50 shadow-lg p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold text-blue-600">
                Diagnostic and treatment planning
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Investigations and treatment techniques are selected according
                to the clinical question and individual needs.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gradient-to-br from-white to-blue-50 shadow-lg p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold text-blue-600">
                Patient-Centered Care
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                The dental team explains procedures, expected effects, and
                available alternatives before treatment.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Appointment Form Section */}
      <section className="relative py-16 bg-gradient-to-b from-blue-50 to-blue-100">
        {/* <div className="absolute hidden md:block z-10 top-10 left-32 bg-white p-2 shadow-xl rounded-full animate__animated animate__fadeInUp">
          <Image
            src="/Images/discount1.png"
            alt="Discount Image"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div> */}
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-700 animate__animated animate__fadeInUp">
          Request an Appointment
          </h2>
          <p className="text-center text-gray-500 mt-4 mb-12 animate__animated animate__fadeInUp">
            Share your contact details and the reason for your visit. The clinic
            will confirm availability and next steps.
          </p>
          <BookAppointmentForm />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-blue-600 text-gray-300 text-center">
        <p className="text-xl font-sans font-semibold tracking-wide">
          "Healthy smiles start with healthy habits — Brush, Floss, and Visit Your Dentist Regularly."
        </p>
      </footer>
    </div>
  );
};

export default AppointmentPage;
