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
      altText: "Smile, Smiles",
      title: "Smile, Smiles",
      description: "Our skilled team crafts smiles you'll love to show off",
    },
    {
      id: nanoid(),
      image: "/Images/services/braces.jpg",
      altText: "Cutting-Edge Care",
      title: "Cutting-Edge Care",
      description: "Powered by advanced technology for precision and comfort",
    },
    {
      id: nanoid(),
      image: "/Images/services/crowns1.jpg",
      altText: "All-in-One Dental Hub",
      title: "All-in-One Dental Hub",
      description:
        "From routine check-ups to stunning makeovers, we've got it all",
    },
    {
      id: nanoid(),
      image: "/Images/services/dentures1.jpg",
      altText: "Your Comfort, Our Priority",
      title: "Your Comfort, Our Priority",
      description: "Relax in a stress-free, patient-first environment",
    },
    {
      id: nanoid(),
      image: "/Images/services/cosmeticDentistry1.jpg",
      altText: "Modern Vibes, Classic Care",
      title: "Modern Vibes, Classic Care",
      description: "A perfect blend of innovation and a personal touch",
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
