"use client";

import React from "react";
import SEO from "../components/SEO";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
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
        "Cosmetic dentistry includes procedures that address tooth color, shape, position, or proportions. Options may include whitening or restorative procedures, depending on oral health, examination findings, and treatment goals.",
      altText: "Cosmetic Dentistry",
      image: "/Images/services/cosmeticDentistry.jpg",
    },
    {
      id: nanoid(),
      slug: "root-canal-treatment",
      title: "Root Canal Treatment",
      description:
        "Root canal treatment removes inflamed or infected pulp from inside a tooth, cleans and seals the root canals, and is followed by appropriate restoration. It may help retain a tooth when the tooth is restorable; the expected outcome depends on clinical findings.",
      altText: "Root Canal Treatment",
      image: "/Images/services/rootCanal.jpg",
    },
    {
      id: nanoid(),
      slug: "orthodontics-braces",
      title: "Orthodontics Procedure",
      description:
        "Orthodontic treatment uses appliances such as fixed braces or clear aligners to apply controlled forces and improve tooth alignment and bite relationships. Suitability and duration depend on the individual case.",
      altText: "Orthodontics Procedure",
      image: "/Images/services/orthodontics.jpg",
    },
    {
      id: nanoid(),
      slug: "braces-and-aligners",
      title: "Braces & Aligners",
      description:
        "Fixed braces and clear aligners are options for selected tooth-alignment problems. An orthodontic assessment is needed to determine the appropriate appliance, treatment plan, expected duration, and retention requirements.",
      altText: "Braces & Aligners",
      image: "/Images/services/braces.jpg",
    },
    {
      id: nanoid(),
      slug: "dental-implants-and-fillings",
      title: "Dental Implants & Fillings",
      description:
        "Fillings repair teeth affected by decay or limited structural loss. Dental implants are a surgical tooth-replacement option that may support a crown, bridge, or denture after assessment of bone, gums, medical history, and restorative needs.",
      altText: "Dental Implants & Fillings",
      image: "/Images/services/ImplantsAndFillings.jpg",
    },
    {
      id: nanoid(),
      slug: "pediatric-dentistry",
      title: "Pediatric Dentistry",
      description:
        "Pediatric dental care includes examination, prevention, oral hygiene guidance, monitoring of dental development, and treatment of decay or other conditions when indicated.",
      altText: "Pediatric Dentistry",
      image: "/Images/services/pediatricDentistry.jpeg",
    },
    {
      id: nanoid(),
      slug: "dentures",
      title: "Dentures",
      description:
        "Complete and partial dentures are removable prostheses used for selected patterns of tooth loss. Fit, adaptation, speech, and chewing function vary among patients and may require adjustment or review.",
      altText: "Dentures",
      image: "/Images/services/dentures.jpg",
    },
  ];

  return (
    <>
      <SEO
        title="Treatments | EndoSmile Dental Care | Greater Noida West"
        description="Learn more about EndoSmile Dental Care, your dental clinic for healthy smiles."
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
              Treatment options based on clinical assessment and individual needs.
            </p>
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
