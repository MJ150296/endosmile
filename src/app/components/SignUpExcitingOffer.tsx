"use client";
import React, { useState } from "react";
import Image from "next/image";

const SignUpExcitingOffer = () => {
  const [specialOfferEmail, setSpecialOfferEmail] = useState("");

  // Type the event parameter explicitly as React.ChangeEvent<HTMLInputElement>
  const handleSpecialOfferEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpecialOfferEmail(e.target.value);
  };

  const handleGoClick = () => {
    const specialOfferMessage = `I'm all ears! Got any exclusive offers? My email is ${specialOfferEmail}.`;
    const whatsappURL = `https://wa.me/+918700051152?text=${encodeURIComponent(
      specialOfferMessage
    )}`;
    window.open(whatsappURL, "_blank"); // Opens WhatsApp in a new tab
  };
  return (
    <div className="flex flex-col gap-y-10 pt-20 text-center md:text-start justify-center items-center">
      <p className="text-3xl md:text-5xl font-semibold bg-gradient-to-br from-[#23a4db] to-[#3FA434] bg-clip-text text-transparent">
        For special Offers & Discount Updates
      </p>

      <div className="w-11/12 md:w-1/2 border-4 border-transparent rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex justify-center items-center gap-x-5">
        <input
          type="email"
          placeholder="Email address"
          className="w-full p-2 bg-white focus:outline-none rounded-lg"
          onChange={handleSpecialOfferEmail}
          value={specialOfferEmail}
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Please enter a valid email address"
        />
        <button
          className="p-2 pr-5 text-xl text-white font-medium"
          onClick={handleGoClick}
        >
          Go
        </button>
      </div>

      <p className="text-2xl font-semibold bg-gradient-to-br from-[#23a4db] to-[#3FA434] bg-clip-text text-transparent">
        Call us at +91-78959 27366
      </p>

      <p className="text-3xl font-semibold bg-gradient-to-br from-[#3FA434] to-[#23a4db] bg-clip-text text-transparent">
        &quot;Strong Teeth, Bright Smiles.&quot;
      </p>

      <div className="flex md:hidden gap-x-5 px-5">
        <a
          href="https://wa.me/+918700051152"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Images/Icons/WhatsApp.png"
            alt="WhatsApp"
            width={50}
            height={50}
            className="hover:scale-105 duration-200"
          />
        </a>
        <a
          href="http://m.me/An-it solution company"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Images/Icons/Facebook.png"
            alt="Facebook"
            width={50}
            height={50}
            className="hover:scale-105 duration-200"
          />
        </a>
        <a
          href="https://www.instagram.com/itssolutioncompany/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Images/Icons/Instagram.png"
            alt="Instagram"
            width={50}
            height={50}
            className="hover:scale-105 duration-200"
          />
        </a>
        <a href="mailto:singlaromart@gmail.in">
          <Image
            src="/Images/Icons/Gmail.png"
            alt="Gmail"
            width={50}
            height={50}
            className="hover:scale-105 duration-200"
          />
        </a>
      </div>
    </div>
  );
};

export default SignUpExcitingOffer;
