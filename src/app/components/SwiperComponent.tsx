"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCard from "./swiperCard";
import { nanoid } from "nanoid";

const SwiperComponent: React.FC = () => {
  const cardDetails = [
    {
      id: nanoid(),
      image: "/Images/services/cosmeticDentistry.jpg",
      altText: "Aesthetic dental care",
      title: "Aesthetic dental care",
      description: "Treatment options for selected aesthetic concerns after assessment.",
    },
    {
      id: nanoid(),
      image: "/Images/services/braces.jpg",
      altText: "Digital treatment planning",
      title: "Appropriate technology",
      description: "Digital tools may support examination and treatment planning when indicated.",
    },
    {
      id: nanoid(),
      image: "/Images/services/crowns1.jpg",
      altText: "Dental services",
      title: "Dental services",
      description:
        "Preventive, restorative, endodontic, orthodontic, and aesthetic services",
    },
    {
      id: nanoid(),
      image: "/Images/services/dentures1.jpg",
      altText: "Patient communication",
      title: "Patient communication",
      description: "Treatment options and expected outcomes are discussed before care.",
    },
    {
      id: nanoid(),
      image: "/Images/services/cosmeticDentistry1.jpg",
      altText: "Preventive and restorative care",
      title: "Preventive and restorative care",
      description: "Services are planned according to clinical findings and oral health needs.",
    },
    {
      id: nanoid(),
      image: "/Images/greater noida.png",
      altText: "In the Heart of Greater Noida",
      title: "In the Heart of Greater Noida",
      description: "Convenient location with flexible scheduling",
    },
  ];
  return (
    <div className="h-full bg-gray-500 p-5 rounded-lg">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // Autoplay delay in milliseconds (3 seconds)
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {cardDetails.map((card) => (
          <SwiperSlide
            key={card.id}
            className="flex items-center justify-center bg-white text-sm md:text-lg p-0 md:p-2 rounded-lg"
          >
            <SwiperCard card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
