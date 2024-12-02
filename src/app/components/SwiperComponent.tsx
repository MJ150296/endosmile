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
      altText: "Smile Experts",
      title: "Smile Experts",
      description: "Our skilled team crafts smiles you’ll love to show off",
    },
    {
      id: nanoid(),
      image: "/Images/services/cosmeticDentistry.jpg",
      altText: "Cutting-Edge Care",
      title: "Cutting-Edge Care",
      description: "Powered by advanced technology for precision and comfort",
    },
    {
      id: nanoid(),
      image: "/Images/services/cosmeticDentistry.jpg",
      altText: "All-in-One Dental Hub",
      title: "All-in-One Dental Hub",
      description:
        "From routine check-ups to stunning makeovers, we've got it all",
    },
    {
      id: nanoid(),
      image: "/Images/services/cosmeticDentistry.jpg",
      altText: "Your Comfort, Our Priority",
      title: "Your Comfort, Our Priority",
      description: "Relax in a stress-free, patient-first environment",
    },
    {
      id: nanoid(),
      image: "/Images/services/cosmeticDentistry.jpg",
      altText: "Modern Vibes, Classic Care",
      title: "Modern Vibes, Classic Care",
      description: "A perfect blend of innovation and a personal touch",
    },
    {
      id: nanoid(),
      image: "/Images/services/cosmeticDentistry.jpg",
      altText: "Affordable Excellence",
      title: "Affordable Excellence",
      description: "High-quality care without the hefty price tag",
    },
    {
      id: nanoid(),
      image: "/Images/services/cosmeticDentistry.jpg",
      altText: "In the Heart of Greater Noida",
      title: "In the Heart of Greater Noida",
      description: "Convenient location with flexible scheduling",
    },
    {
      id: nanoid(),
      image: "/Images/services/cosmeticDentistry.jpg",
      altText: "Safe & Sparkling Clean",
      title: "Safe & Sparkling Clean",
      description: "Hygiene and safety you can count on",
    },
    {
      id: nanoid(),
      image: "/Images/services/cosmeticDentistry.jpg",
      altText: "Tailored Just for You",
      title: "Tailored Just for You",
      description: "Customized treatments designed to meet your goals",
    },
    {
      id: nanoid(),
      image: "/Images/services/cosmeticDentistry.jpg",
      altText: "Dedicated to Your Smile",
      title: "Dedicated to Your Smile",
      description: "Passionate about making every visit a reason to grin!",
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
            className="flex items-center justify-center bg-white text-lg p-2 rounded-lg"
          >
            <SwiperCard card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
