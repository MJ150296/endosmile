"use client";

import Image from "next/image";
import Counter from "./components/Counter";
import ServiceCard from "./components/ServiceCard";
import SmileStoryCard from "./components/SmileStoryCard";
import CoverSlider from "./components/CoverSlider";
import FAQComponent from "./components/FAQComponent";
import { nanoid } from "nanoid";
import HeadingPointer from "./components/HeadingPointer";
import WhyChooseUs from "./components/WhyChooseUs";
import SignUpExcitingOffer from "./components/SignUpExcitingOffer";
import Link from "next/link";
import React, { useRef } from "react";

export default function Home() {
  const services = [
    {
      id: nanoid(),
      iconURL: "/Images/Icons/orthodontics.png",
      title: "Painless Root Canal Treatment",
      description:
        "Save your smile with precise and painless root canal treatment.",
      imageURL: "/Images/services/rootCanal.jpg",
      linkURL: "",
      detailedDescription: "",
    },
    {
      id: nanoid(),
      iconURL: "/Images/Icons/cosmetics.png",
      title: "Cosmetic Dentistry",
      description:
        "Enhance your smile and confidence with personalized cosmetic dentistry.",
      imageURL: "/Images/services/cosmeticDentistry.jpg",
      linkURL: "",
      detailedDescription: "",
    },
    {
      id: nanoid(),
      iconURL: "/Images/Icons/dental.png",
      title: "Dental Fillings and Implants",
      description:
        "From seamless fillings to secure dental implants, restore and protect your smile with confidence.",
      imageURL: "/Images/services/ImplantsAndFillings.jpg",
      linkURL: "",
      detailedDescription: "",
    },
    {
      id: nanoid(),
      iconURL: "/Images/Icons/orthodontics1.png",
      title: "Orthodontics Treatment",
      description:
        "Straighten your teeth and perfect your smile with our advanced orthodontic treatments.",
      imageURL: "/Images/services/orthodontics.jpg",
      linkURL: "",
      detailedDescription: "",
    },
    {
      id: nanoid(),
      iconURL: "/Images/Icons/crownsAndBridges.png",
      title: "Crowns and Bridges",
      description:
        "Restore your smile with durable crowns and bridges, blending strength and beauty.",
      imageURL: "/Images/services/crowns.jpg",
      linkURL: "",
      detailedDescription: "",
    },
    {
      id: nanoid(),
      iconURL: "/Images/Icons/pediatric.png",
      title: "Periradicular Treatments",
      description:
        "Expert care for tissues around the tooth root, ensuring comfort and health.",
      imageURL: "/Images/services/pediaticDentistry.jpg",
      linkURL: "",
      detailedDescription: "",
    },
    {
      id: nanoid(),
      iconURL: "/Images/Icons/dental (1).png",
      title: "Braces & Aligners",
      description:
        "Transform your smile with braces and aligners, offering precision and comfort.",
      imageURL: "/Images/services/braces.jpg",
      linkURL: "",
      detailedDescription: "",
    },

    {
      id: nanoid(),
      iconURL: "/Images/Icons/dentures.png",
      title: "Dentures",
      description:
        "Restore your smile and confidence with comfortable, natural-looking dentures.",
      imageURL: "/Images/services/dentures.jpg",
      linkURL: "",
      detailedDescription: "",
    },
  ];

  const SignUpExcitingOfferRef = useRef<HTMLDivElement>(null); // Create a ref for the target section

  const handleScrollToSignUpExcitingOffer = () => {
    if (SignUpExcitingOfferRef.current) {
      SignUpExcitingOfferRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* WHATSAPP ICON  */}
      <div className="fixed z-50 right-5 bottom-10 flex flex-col gap-y-3">
        {/* Phone Icon */}
        <a href="tel:8368847831" aria-label="Call 8368847831">
          <Image
            src="/Images/Icons/phoneB.png"
            alt="Phone Icon"
            width={40}
            height={40}
            className="ml-2 w-10 h-10"
          />
        </a>

        {/* WhatsApp Icon */}
        <a
          href="https://api.whatsapp.com/send?phone=+918368847831&text=Hello%20Doc!%20Please%20help%20me%20with%20the%20following%20question."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message on WhatsApp"
        >
          <Image
            src="/Images/Icons/WhatsApp.png"
            alt="WhatsApp Icon"
            width={60}
            height={40}
            className="w-14 h-14"
          />
        </a>
      </div>
      <div className="pt-40 py-12 pb-32 bg-gray-100 shadow-md">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 px-6 lg:px-10">
          {/* Text Section */}
          <div className="flex-1 flex flex-col text-center gap-6 lg:text-left pt-1">
            {/* Heading */}
            <h1 className="text-4xl font-bold text-gray-800 leading-snug sm:text-5xl lg:text-6xl">
              Crafting Smiles, Creating Confidence
            </h1>

            {/* Subheading */}
            <h2 className="text-gray-700 leading-relaxed">
              Your trusted partner in delivering unparalleled dental care,
              dedicated to enhancing the beauty of your smile.
            </h2>

            {/* Tagline */}
            <h3 className="text-blue-600 text-base font-semibold sm:text-lg lg:text-xl">
              &quot;Endo<span className="text-green-600">Smile</span> - The Art
              of Creating Beautiful Smiles&quot;
            </h3>

            {/* Stats Section */}
            <div className="flex gap-4 border-t border-b border-gray-400 py-4 sm:justify-between sm:items-center">
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-lg sm:text-xl lg:text-3xl font-bold">
                  <Counter end={5} duration={2} suffix=".0" />
                </span>
                <p className="text-xs sm:text-sm text-gray-600">
                  Google Rating
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-lg sm:text-xl lg:text-3xl font-bold">
                  <Counter end={24} duration={2} suffix="x7" />
                </span>
                <p className="text-xs sm:text-sm text-gray-600">
                  Emergency Services
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-lg sm:text-xl lg:text-3xl font-bold">
                  <Counter end={12} duration={2} suffix="+" />
                </span>
                <p className="text-xs sm:text-sm text-gray-600">
                  Years of Experience
                </p>
              </div>
            </div>

            {/* Call-To-Action Buttons */}
            <div className="mt-6 flex flex-row gap-4 justify-start">
              <Link
                href="/bookAppointment"
                className="p-3 md:px-6 md:py-3 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 transition"
              >
                Book An Appointment
              </Link>
              <button
                className="p-3 md:px-6 md:py-3 text-white bg-green-600 rounded-md shadow hover:bg-green-700 transition"
                onClick={handleScrollToSignUpExcitingOffer} // Trigger scroll on click
              >
                + Enquiries
              </button>
            </div>

            {/* Offer Section */}
            <div className="flex items-start text-red-600 text-start gap-x-2 mt-2 md:mt-4">
              <p className="mt-1 font-semibold animate-colorChange">*</p>
              <p className="text-sm sm:text-base animate-colorChange">
                Enjoy an exclusive 10% off your first visit! Your perfect smile
                awaits!
              </p>
              {/* in global css  */}
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 p-5 md:p-0 flex justify-center items-center">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/Images/Clinic/dentist.jpg" // Ensure correct path for your image
                alt="Dr Sumit"
                width={380} // Specify image width
                height={600} // Specify image height
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* SECOND SECTION   POP UP MODAL */}

      <div className="flex flex-col items-center -mt-12">
        <div className="w-4/5 max-w-4xl bg-white rounded-xl shadow-xl p-6 sm:p-8 md:px-10 md:py-8 flex flex-col lg:flex-row justify-between items-start md:items-center gap-6 lg:gap-12">
          {/* Dental Queries Section */}
          <div className="flex flex-col text-lg font-medium text-center lg:text-left">
            <p>Any Dental Queries</p>
            <p className="font-sans font-light">+91 - 83688 47831</p>
          </div>

          {/* Opening Hours Section */}
          <div className="flex flex-col text-lg sm:text-xl font-medium text-start">
            <p>Opening Hours</p>
            <p className="font-sans font-light text-sm">
              <span className="font-semibold">Mon to Sat</span> 10:00AM to
              1:00PM(Morning) <br />
              <span className="md:ml-[78px]">05:00PM to 8:00PM(Evening)</span>
              <br />
              <span>
                <span className="font-semibold">Sunday -</span> Appointment Only
              </span>
            </p>
          </div>

          {/* Book Appointment Button Section */}
          <div className="flex flex-col text-center lg:text-left">
            <Link
              href="/bookAppointment"
              className="p-3 md:px-6 md:py-3 text-white bg-blue-600 rounded-full shadow hover:bg-green-600 transition"
            >
              Book An Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* SECOND SECTION - ABOUT US */}

      <div>
        <div className="w-full flex flex-col-reverse gap-y-10 md:flex-row md:px-10 pt-20 pb-5">
          {/* Image Section */}
          <div className="w-full md:w-1/2 p-10 md:p-0 flex justify-center items-start">
            <Image
              src="/Images/AboutUs.png"
              alt="About Us"
              width={400}
              height={400} // Ensure image height is proportional to the width
              className="rounded-xl shadow-xl shadow-gray-400 "
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-y-5 px-5 md:p-0">
            <div className="flex gap-x-3 items-center">
              <HeadingPointer />
              <h3 className="font-semibold">ABOUT US</h3>
            </div>
            <p className="text-3xl md:text-5xl font-semibold">
              Bringing Bright Smiles and Better Health Together.
            </p>
            <p className="text-gray-600">
              {" "}
              At <strong>EndoSmile Dental Care</strong>, we believe every smile
              tells a story. Our mission is to provide exceptional{" "}
              <strong>dental care in Greater Noida West</strong>, blending
              advanced <strong>dental technology</strong> with a compassionate
              approach. From routine check-ups to advanced treatments like{" "}
              <strong>Root Canal Therapy</strong> and{" "}
              <strong>Smile Makeovers</strong>, we are dedicated to improving
              your <strong>oral health</strong> and boosting your confidence—one
              smile at a time.{" "}
            </p>

            {/* Stats Section */}
            <div className="flex flex-col lg:flex-row justify-between p-5 border-b border-t border-gray-200">
              <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left mb-5 lg:mb-0">
                <p className="text-3xl sm:text-4xl font-semibold">5000+</p>
                <p className="text-lg">Smiles Delivered</p>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
                <p className="text-3xl sm:text-4xl font-semibold">100%</p>
                <p className="text-lg">Patient Satisfaction</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Link
                href="/bookAppointment"
                className="p-3 md:px-6 md:py-3 text-white bg-blue-600 rounded-full shadow hover:bg-green-600 transition"
              >
                Make An Appointment +
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* THIRD SECTION - OUR SERVICES*/}

      <div>
        <div className="w-full flex flex-col p-5 md:p-10">
          <div className="w-full flex flex-col gap-y-10">
            <div className="w-full flex flex-col md:flex-row">
              <div className="w-3/4 flex flex-col gap-y-10">
                <div className="flex gap-x-3 items-center">
                  <HeadingPointer />
                  <h3 className="font-semibold">OUR SERVICES</h3>
                </div>
                <p className="text-3xl md:text-5xl font-semibold">
                  Comprehensive dental care tailored services for every smile
                </p>
              </div>
              <div className="w-full md:w-1/4 py-5 flex justify-end items-center">
                <Link
                  href="/treatments"
                  className="px-6 py-3 bg-blue-600 rounded-full shadow-lg hover:bg-green-600 text-white text-base"
                >
                  Our Treatments
                </Link>
              </div>
            </div>
            <div className="w-full flex flex-wrap flex-1 gap-x-10 gap-y-14 justify-center items-center">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FOURTH SECTION  */}

      <div>
        <div className="w-full flex flex-col md:flex-row py-20 px-10">
          <div className="w-full md:w-1/2 flex flex-col gap-y-10">
            <div className="flex gap-x-3 items-center">
              <HeadingPointer />
              <h3 className="font-semibold">EXPERTISE</h3>
            </div>
            <p className="text-3xl md:text-5xl font-semibold">
              Elevating Your Oral Health and Smile Aesthetics with Expertise
            </p>
            <div className="space-y-4 mr-10 text-gray-600">
              <p>
                {" "}
                Welcome to <strong>EndoSmile Dental Care</strong>, the trusted
                dental clinic in <strong>Greater Noida West</strong>, where
                expertise meets innovation. Led by{" "}
                <strong>Dr. Sumit Dinkar</strong>, a renowned{" "}
                <strong>Micro Endodontist and Aesthetic Dentist</strong>, our
                clinic is committed to providing personalized care that
                prioritizes your comfort and oral health. As part of our mission
                to make dental care accessible, we align with government
                initiatives like the{" "}
                <strong>National Oral Health Programme (NOHP)</strong> to
                promote preventive and affordable dental solutions for the
                community.{" "}
              </p>{" "}
              <p>
                {" "}
                At EndoSmile Dental Care, we specialize in advanced treatments
                such as <strong>Root Canal Therapy</strong>,{" "}
                <strong>Smile Makeovers</strong>, and{" "}
                <strong>Cosmetic Dentistry</strong>, while also offering routine
                check-ups and preventive care. Our clinic integrates
                state-of-the-art technology with a patient-first approach to
                ensure every visit is both effective and stress-free. We also
                participate in schemes like <strong>Ayushman Bharat</strong> to
                provide subsidized dental care for eligible patients, ensuring
                oral health is accessible to everyone.{" "}
              </p>{" "}
            </div>
            <div>
              <Link
                href="/treatments"
                className="px-6 py-3 bg-blue-600 rounded-full shadow-lg hover:bg-green-600 text-white text-base"
              >
                Go to Treatments
              </Link>
            </div>
          </div>
          <div className="w-full py-5 md:w-1/2 mt-10 md:mt-0 flex relative justify-center items-center">
            <div className="p-0 md:p-20">
              <Image
                src="/Images/bg/bg1.jpg"
                alt="Dr Sumit || endoSmile dental care || greater noida west"
                width={530} // Specify image width
                height={600} // Specify image height
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <div className="absolute md:top-20 md:left-10 top-0 right-0">
              <Image
                src="/Images/Clinic/dentist.jpg"
                alt="Dr Sumit"
                width={220} // Specify image width
                height={600} // Specify image height
                className="object-cover rounded-3xl w-32 md:w-48 transform scale-x-[-1]"
                priority
              />
            </div>
            <div className="absolute hidden md:flex md:bottom-20 md:right-10 ">
              <Image
                src="/Images/Clinic/dentist.jpg"
                alt="Dr Sumit || EndoSmile Dental Care || Greater Noida west"
                width={200} // Specify image width
                height={600} // Specify image height
                className="object-cover rounded-3xl w-28 md:w-60"
                priority
              />
            </div>

            {/* ABOVE AND BELOW DIV'S ARE SAME, TO TACKLE SCREEN SIZE WE HAVE TO CREATE 2 DIV'S  */}

            <div className="absolute md:hidden -bottom-10 left-0">
              <Image
                src="/Images/Clinic/dentist.jpg"
                alt="Dr Sumit"
                width={200} // Specify image width
                height={600} // Specify image height
                className="object-cover rounded-3xl w-28 md:w-60"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* FIFTH SECTION  */}

      <div className="hidden px-0 md:px-10">
        <div className="flex flex-col px-5 md:px-10 pt-10">
          <div className="flex flex-col gap-y-5 md:flex-row md:justify-between">
            <div className="">
              <h2 className="tracking-wide text-green-600 text-3xl md:text-4xl">
                ENDOSMILE
                <span className="text-blue-600 text-2xl md:text-3xl font-medium">
                  STORIES..
                </span>
                .
              </h2>
              <p className="text-gray-700 md:text-2xl tracking-wider">
                Redefining smiles, Redefining confidence.
              </p>
            </div>
            <div>
              <Link
                href="/bookAppointment"
                className="px-6 py-3 bg-blue-600 rounded-full shadow-lg hover:bg-green-600 text-white text-base"
              >
                Book An Appointment +
              </Link>
            </div>
          </div>

          {/* IMAGE COLLAGE  */}
          <div>
            <SmileStoryCard />
          </div>
        </div>
      </div>

      {/* SIXTH SECTION - Why Choose Us  */}

      <div>
        <WhyChooseUs />
      </div>

      {/* SEVENTH SECTION - PROFILE  */}

      <div>
        <div className="flex flex-col md:flex-row p-10 gap-y-10 md:p-20">
          <div className="w-full md:w-1/2 flex flex-col gap-y-5">
            <h5 className="text-blue-600 tracking-wider text-xl font-semibold">
              ENDO<span className="text-green-600">SMILE</span> DENTAL CARE
            </h5>
            <div className="space-y-1">
              <p className="text-4xl font-sans text-gray-800 font-semibold">
                Dr. Sumit Dinkar
                <span className="text-xl text-blue-600">
                  (The Smile Architect)
                </span>
              </p>
              <p className="text-green-600 font-semibold">
                Micro Endodontist and Aesthetic Dentist
              </p>
            </div>
            <div className="space-y-4 tracking-wide leading-relaxed text-gray-800">
              <p>
                {" "}
                Dr. Sumit Dinkar is a highly skilled{" "}
                <strong>Micro Endodontist</strong> and{" "}
                <strong>Aesthetic Dentist</strong> based in{" "}
                <strong>Greater Noida West</strong>, specializing in{" "}
                <strong>Root Canal Treatment</strong>,{" "}
                <strong>Smile Design</strong>, and{" "}
                <strong>Cosmetic Dentistry</strong>. Known for his precision and
                approachable demeanor, Dr. Sumit provides world-class dental
                care in a comfortable, stress-free environment, transforming
                smiles and oral health across the region.{" "}
              </p>{" "}
              <p>
                {" "}
                An alumnus of the prestigious{" "}
                <strong>
                  Maulana Azad Institute of Dental Sciences, New Delhi
                </strong>
                , Dr. Sumit has over a decade of expertise in advanced
                procedures like <strong>crown and bridge work</strong>,{" "}
                <strong>peri-radicular surgeries</strong>, and{" "}
                <strong>aesthetic treatments</strong>. He is also trained to
                deliver compassionate care under general anesthesia for patients
                with special needs.{" "}
              </p>{" "}
              <p>
                Dr. Sumit has advanced training in{" "}
                <strong>Porcelain Veneers</strong>,{" "}
                <strong>Teeth Whitening</strong> and ensures every dental
                visit is a step closer to the <strong>perfect smile</strong>.
              </p>
              <button className="px-6 py-3 bg-blue-600 rounded-full shadow-lg hover:bg-green-600 text-white text-base">
                Read More
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <Image
              src="/Images/Clinic/dentist.jpg"
              alt="Best Dentist in Grater Noida"
              width={380}
              height={9}
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* SEVENTH SECTION - TRANSFORMATION  */}

      <div className="">
        <div className="p-10 bg-gray-200 shadow-xl">
          <h5 className="text-3xl font-sans font-semibold text-gray-800">
            Your Transformation Destination.
          </h5>
          <div className="px-0 md:px-20 pt-10 hover:scale-95 duration-500">
            <CoverSlider />
          </div>
        </div>
      </div>

      {/* EIGHTH SECTION - SIGNUP FOR OFFERS  */}

      <div ref={SignUpExcitingOfferRef}>
        <SignUpExcitingOffer />
      </div>

      {/* NINTH SECTION - FAQ's  */}

      <div>
        <div className="w-full flex justify-center items-center px-0 md:px-10">
          <div className="w-full md:w-3/4">
            <FAQComponent />
          </div>
        </div>
      </div>
    </>
  );
}
