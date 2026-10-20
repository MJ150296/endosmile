"use client";

import React from "react";
import SEO from "../components/SEO";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { CountUp } from "countup.js";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";

const Treatments = () => {
  const treatmentDetails = [
    {
      id: nanoid(),
      slug: "cosmetic-dentistry",
      title: "Cosmetic Dentistry",
      description:
        "Transform your smile with our state-of-the-art cosmetic dentistry services. We offer a range of treatments, including teeth whitening, veneers, and smile makeovers, designed to improve the aesthetics of your teeth and boost your confidence. Our experienced team uses cutting-edge techniques to deliver natural-looking results tailored to your preferences. Whether you want to correct discoloration, close gaps, or reshape teeth, our customized solutions ensure a radiant, flawless smile.",
      altText: "Cosmetic Dentistry",
      image: "/Images/services/cosmeticDentistry.jpg",
    },
    {
      id: nanoid(),
      slug: "root-canal-treatment",
      title: "Root Canal Treatment",
      description:
        "Save your natural teeth and alleviate pain with our root canal treatment. This procedure treats infected or damaged tooth pulp, preventing tooth loss and restoring function. With advanced tools and techniques, we ensure stress-free experience. Our meticulous care provides long-term relief and maintains your oral health. Don't let tooth pain affect your life—our root canal therapy delivers effective solutions to preserve your beautiful smile.",
      altText: "Root Canal Treatment",
      image: "/Images/services/rootCanal.jpg",
    },
    {
      id: nanoid(),
      slug: "orthodontics-braces",
      title: "Orthodontics Procedure",
      description:
        "Achieve a perfectly aligned smile with our orthodontic procedures. Whether you opt for traditional braces or modern clear aligners like Invisalign, we provide tailored solutions to address misalignment, overcrowding, and bite issues. These treatments enhance not only your appearance but also your oral health. Trust our team for advanced, comfortable care that delivers a healthier, more confident smile.",
      altText: "Orthodontics Procedure",
      image: "/Images/services/orthodontics.jpg",
    },
    {
      id: nanoid(),
      slug: "braces-and-aligners",
      title: "Braces & Aligners",
      description:
        "Perfect your smile with our comprehensive braces and aligner treatments. Choose traditional braces for complex alignment issues or Invisalign for a nearly invisible option. These solutions improve your smile's appearance and oral health. Our personalized plans fit your lifestyle, ensuring minimal disruption to your routine. Achieve a straighter smile with care tailored to your needs.",
      altText: "Braces & Aligners",
      image: "/Images/services/braces.jpg",
    },
    {
      id: nanoid(),
      slug: "dental-implants-and-fillings",
      title: "Dental Implants & Fillings",
      description:
        "Restore your teeth's functionality and aesthetics with our dental implants and fillings. Implants provide a permanent solution for missing teeth, ensuring durability and a natural look, while our high-quality fillings repair cavities effectively. Using biocompatible materials and advanced techniques, we ensure your comfort and long-lasting results. Trust us to rebuild your smile seamlessly.",
      altText: "Dental Implants & Fillings",
      image: "/Images/services/ImplantsAndFillings.jpg",
    },
    {
      id: nanoid(),
      slug: "pediatric-dentistry",
      title: "Pediatric Dentistry",
      description:
        "Give your little ones the best start to oral health with our pediatric dentistry services. From preventive care to treating cavities, we provide gentle, compassionate dental care tailored to children. Start your child's journey to a lifetime of healthy smiles with us.",
      altText: "Pediatric Dentistry",
      image: "/Images/services/pediatricDentistry.jpeg",
    },
    {
      id: nanoid(),
      slug: "dentures",
      title: "Dentures",
      description:
        "Regain your smile and confidence with dentures. Designed for comfort and a natural appearance, restoring functionality and aesthetics. Whether you need partial or full dentures, we offer custom solutions that fit perfectly and improve your quality of life. Let us help you smile with ease and comfort again.",
      altText: "Dentures",
      image: "/Images/services/dentures.jpg",
    },
  ];

  React.useEffect(() => {
    // Hardcoded values for CountUp.js
    const stats = [
      { id: "patients", value: 5000 },
      { id: "treatments", value: 2000 },
      { id: "years", value: 12 },
    ];

    const options = { duration: 2 };
    stats.forEach((stat) => {
      const countUp = new CountUp(stat.id, stat.value, options);
      if (!countUp.error) {
        countUp.start();
      }
    });
  }, []);

  return (
    <>
      <SEO
        title="Treatments | EndoSmile Dental Care | Greater Noida West"
        description="Learn more about EndoSmile Dental Care, your trusted dental clinic for healthy smiles."
        keywords="dental care, dental clinic, oral health, smile"
        image="/images/about-us-image.jpg"
        url="https://www.endosmiledental.com/treatments"
        author="EndoSmile Team"
      />
      <div className="pt-28 bg-gray-50">
        {/* Header Section */}
        <div className="text-center py-32 -mt-4 bg-fixed bg-[url('/Images/Clinic/DentalClinic1.jpg')] bg-cover bg-center shadow-lg">
          <h1 className="text-5xl font-sans font-bold text-blue-600 animate__animated animate__fadeInDown">
            Our Treatments
          </h1>
          <div className="mt-4 p-2 w-full flex justify-center items-center bg-black bg-opacity-40">
            <p className="text-lg text-white font-semibold animate__animated animate__fadeInUp">
              Tailored solutions for every smile, delivered with precision and
              care.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-center">
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp">
            <div className="text-5xl font-bold text-blue-600 flex justify-center items-center gap-x-1">
              <h3 id="patients"></h3>
              <p>+</p>
            </div>
            <p className="text-gray-600 mt-2">Happy Patients</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp">
            <div className="text-5xl font-bold text-green-600 flex justify-center items-center gap-x-1">
              <h3 id="treatments"></h3>
              <p>+</p>
            </div>
            <p className="text-gray-600 mt-2">Successful Treatments</p>
          </div>
          <div className="bg-purple-100 p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp">
            <div className="text-5xl font-bold text-purple-600 flex justify-center items-center gap-x-1">
              <h3 id="years"></h3>
              <p>+</p>
            </div>
            <p className="text-gray-600 mt-2">Years of Experience</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center p-5">
          <Link
            href="/bookAppointment"
            className="p-3 md:px-6 md:py-3 text-white bg-blue-600 rounded-lg shadow hover:bg-green-600 transition"
          >
            Book An Appointment
          </Link>
        </div>

        {/* Swiper for Treatments */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // Autoplay delay in milliseconds (3 seconds)
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          speed={700}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {treatmentDetails.map((treatment) => (
            <SwiperSlide key={treatment.id}>
              <Link href={`/treatments/${treatment.slug}`}>
                <div className="p-20 flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg cursor-pointer hover:opacity-90 transition-opacity">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    width={200}
                    height={200}
                    className="w-full md:w-96 rounded-lg animate__animated animate__zoomIn"
                  />
                  <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                    <h2 className="text-2xl font-semibold text-blue-500">
                      {treatment.title}
                    </h2>
                    <p className="text-gray-600 mt-2">{treatment.description}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Treatments;
