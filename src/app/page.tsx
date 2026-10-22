"use client";

import Image from "next/image";
import ServiceCard from "./components/ServiceCard";
import SmileStoryCard from "./components/SmileStoryCard";
import CoverSlider from "./components/CoverSlider";
import FAQComponent from "./components/FAQComponent";
import { nanoid } from "nanoid";
import HeadingPointer from "./components/HeadingPointer";
import WhyChooseUs from "./components/WhyChooseUs";
import SignUpExcitingOffer from "./components/SignUpExcitingOffer";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Modal from "./components/Modal1";
import DoctorProfile from "./components/DoctorProfile1";

export default function Home() {
  const services = [
    {
      id: nanoid(),
      iconURL: "/Images/Icons/orthodontics.png",
      title: "Root Canal Treatment",
      description:
        "Treatment to remove inflamed or infected pulp and restore a tooth when clinically appropriate.",
      imageURL: "/Images/services/rootCanal.jpg",
      linkURL: "/treatments/root-canal-treatment",
      detailedDescription: "",
    },
    {
      id: nanoid(),
      iconURL: "/Images/Icons/cosmetics.png",
      title: "Cosmetic Dentistry",
      description:
        "Procedures that address the appearance of teeth and gums after assessment of oral health and treatment goals.",
      imageURL: "/Images/services/cosmeticDentistry.jpg",
      linkURL: "/treatments/cosmetic-dentistry",
      detailedDescription: "",
    },
    {
      id: nanoid(),
      iconURL: "/Images/Icons/dental.png",
      title: "Dental Fillings and Implants",
      description:
        "Fillings repair localized tooth damage; implants are one option for replacing missing teeth.",
      imageURL: "/Images/services/ImplantsAndFillings.jpg",
      linkURL: "/treatments/dental-implants-and-fillings",
      detailedDescription: "",
    },
    {
      id: nanoid(),
      iconURL: "/Images/Icons/orthodontics1.png",
      title: "Orthodontics Treatment",
      description:
        "Orthodontic assessment and treatment for tooth alignment and bite relationships.",
      imageURL: "/Images/services/orthodontics.jpg",
      linkURL: "/treatments/orthodontics-braces",
      detailedDescription: "",
    },
    {
      id: nanoid(),
      iconURL: "/Images/Icons/crownsAndBridges.png",
      title: "Crowns and Bridges",
      description:
        "Fixed restorations used to protect damaged teeth or replace selected missing teeth.",
      imageURL: "/Images/services/crowns.jpg",
      linkURL: "/treatments/crowns-and-bridges",
      detailedDescription: "",
    },
    {
      id: nanoid(),
      iconURL: "/Images/Icons/pediatric.png",
      title: "Pediatric & Children's Dentistry",
      description:
        "Preventive, diagnostic, and restorative dental care for children and adolescents.",
      imageURL: "/Images/services/pediatricDentistry.jpeg",
      linkURL: "/treatments/pediatric-dentistry",
      detailedDescription: "",
    },
    {
      id: nanoid(),
      iconURL: "/Images/Icons/dental (1).png",
      title: "Braces & Aligners",
      description:
        "Fixed braces and clear aligners for selected orthodontic alignment needs.",
      imageURL: "/Images/services/braces.jpg",
      linkURL: "/treatments/braces-and-aligners",
      detailedDescription: "",
    },
    {
      id: nanoid(),
      iconURL: "/Images/Icons/dentures.png",
      title: "Dentures",
      description:
        "Removable complete or partial prostheses for selected patterns of tooth loss.",
      imageURL: "/Images/services/dentures.jpg",
      linkURL: "/treatments/dentures",
      detailedDescription: "",
    },
  ];

  const SignUpExcitingOfferRef = useRef<HTMLDivElement>(null); // Create a ref for the target section

  const handleScrollToSignUpExcitingOffer = () => {
    if (SignUpExcitingOfferRef.current) {
      SignUpExcitingOfferRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);

  useEffect(() => {
    if (isDoctorModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDoctorModalOpen]);

  const doctorData = {
    name: "Dr. Sumit Dinkar",
    title: "MDS - Conservative Dentistry and Endodontics",
    education: [
      {
        institution: "Maulana Azad Institute of Dental Sciences, Delhi University",
        degree: "Master of Dental Surgery (MDS) - Conservative Dentistry and Endodontics",
        year: "2020"
      },
      {
        institution: "Maulana Azad Institute of Dental Sciences, Delhi University",
        degree: "Bachelor of Dental Surgery (BDS)",
        year: "2015"
      }
    ],
    certifications: [
      "Conscious Sedation Trained",
      "Microscopic Dentistry Certified",
      "CBCT Guided Endodontic Procedures",
      "Aesthetic Dentistry and Smile Designing"
    ],
    services: [
      {
        icon: "/Images/Icons/dental.png",
        title: "Root Canal Treatment",
        description: "Microscopic and CBCT-guided endodontic procedures with precision care"
      },
      {
        icon: "/Images/Icons/cosmetics.png",
        title: "Smile Designing",
        description: "Comprehensive aesthetic smile enhancement and cosmetic dental procedures"
      },
      {
        icon: "/Images/Icons/crownsAndBridges.png",
        title: "Crown & Bridge Work",
        description: "Functional and aesthetic ceramic crowns, bridges, and restorative solutions"
      },
      {
        icon: "/Images/Icons/orthodontics.png",
        title: "Cosmetic Fillings",
        description: "Natural-looking tooth-colored restorative fillings for superior aesthetics"
      }
    ],
    socialMedia: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61570948870281",
        icon: "/Images/Icons/Facebook.png"
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/sumit_dinkar24/",
        icon: "/Images/Icons/Instagram.png"
      }
    ],
    contact: {
      phone: "+91 83688 47831",
      email: "endosmiledentalcare@gmail.com",
      whatsapp: "918368847831"
    },
    images: [
      "/Images/sumit/sumit1.png",
      "/Images/Clinic/dentist.jpg",
      "/Images/sumit/sumit2.png",
      "/Images/Clinic/clinic1.jpg"
    ]
  };

  return (
    <>
      {/* WHATSAPP ICON  */}
      <div className="fixed z-50 right-5 bottom-10 flex flex-col gap-y-3">
        {/* Phone Icon */}
        <a href="tel:+918368847831" aria-label="Call 8368847831">
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
      <div className="relative pt-40 pb-32 overflow-hidden">

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100"></div>

        {/* Dot Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="url(#dotGradient)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-16">

          {/* Text Section */}
          <div className="flex-1 flex flex-col gap-8 text-center lg:text-left">

            {/* Heading */}
            <h1 className="text-5xl font-semibold tracking-tight text-gray-800 leading-tight">
              <span className="text-blue-600">Endo </span>
              <span className="text-green-600">Smile </span>
              Dental Care:
              <br className="hidden lg:block" />
            </h1>
            <h2 className="text-3xl text-gray-700 font-medium">
              <span className="text-blue-600">Dental consultation and treatment</span>
              <span className="text-green-600"> in Greater Noida West</span></h2>

            {/* Subheading */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Consultation, prevention, diagnosis, and treatment planning for
              individual oral health needs.
            </p>

            {/* Tagline */}
            <p className="text-blue-600 font-medium text-lg tracking-wide">
              Endo<span className="text-green-500">Smile</span> Dental Care
            </p>

            {/* Premium Stats */}
            <div className="flex justify-center lg:justify-start gap-6 mt-4">

              {[
                { value: "Mon–Sat", label: "Clinic hours" },
                { value: "By appointment", label: "Sunday visits" },
                { value: "Individual", label: "Treatment planning" }
              ].map((item, i) => (

                <a key={i} href="https://share.google/MKrINQA0xM0qW13ft" target="blank" className="hover:scale-105 transition-transform duration-200">
                  <div
                    className="px-6 py-4 rounded-2xl bg-white/60 backdrop-blur-md shadow-sm border border-gray-200 text-center"
                  >
                    <div className="text-2xl font-semibold text-gray-900">
                      {item.value}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{item.label}</p>
                  </div>
                </a>

              ))}

            </div>

            {/* CTA */}
            <div className="flex flex-row gap-4 justify-center lg:justify-start mt-6">

              <Link
                href="/bookAppointment"
                className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition-all duration-300"
              >
                Book Appointment
              </Link>

              <button
                onClick={handleScrollToSignUpExcitingOffer}
                className="px-6 py-3 rounded-full bg-white/70 backdrop-blur-md border border-gray-200 text-gray-800 hover:bg-white transition-all duration-300"
              >
                Enquiries
              </button>

            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center items-center">

            <div className="relative rounded-3xl overflow-hidden shadow-xl">

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent"></div>

              <Image
                src="/Images/Clinic/dentist.jpg"
                alt="Dr Sumit"
                width={420}
                height={620}
                className="object-cover"
                priority
              />
            </div>

          </div>
        </div>
      </div>

      {/* SECOND SECTION   POP UP MODAL */}

      {/* Floating Info Card */}
      {/* Floating Info Card */}
      <div className="relative z-20 flex justify-center -mt-24 px-6">

        <div className="w-full max-w-5xl rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.15)] px-6 py-8 md:px-10 md:py-10">

          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

            {/* Queries */}
            <div className="text-center lg:text-left">
                <p className="text-gray-800 font-medium text-lg">Dental enquiries</p>
              <p className="text-gray-600 text-base mt-1">+91 - 83688 47831</p>
            </div>

            {/* Divider (only desktop) */}
            <div className="hidden lg:block w-px h-12 bg-gray-300"></div>

            {/* Opening Hours */}
            <div className="text-center lg:text-left">
              <p className="text-gray-800 font-medium text-lg">Opening Hours</p>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                <span className="font-medium">Mon to Sat:</span> 10:00 AM – 1:00 PM <br />
                5:00 PM - 8:00 PM <br />
                <span className="font-medium">Sunday:</span> Appointment Only
              </p>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-12 bg-gray-300"></div>

            {/* CTA */}
            <div>
              <Link
                href="/bookAppointment"
                className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition-all duration-300"
              >
                Book Appointment
              </Link>
            </div>

          </div>

        </div>
      </div>

      {/* SECOND SECTION - ABOUT US */}

      <div>
        <div className="w-full flex flex-col-reverse gap-y-10 md:flex-row md:px-10 pt-20 pb-5">
          {/* Image Section */}
          <div className="w-full md:w-1/2 p-10 md:p-0 flex justify-center items-start">
            <Link href="/about" className="hover:scale-95 duration-500">
              <Image
                src="/Images/AboutUs.png"
                alt="About Us"
                width={400}
                height={400} // Ensure image height is proportional to the width
                className="rounded-xl shadow-xl shadow-gray-400 "
              />
            </Link>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-y-5 px-5 md:p-0">
            <div className="flex gap-x-3 items-center">
              <HeadingPointer />
              <h3 className="font-semibold">ABOUT US</h3>
            </div>
            <p className="text-3xl md:text-5xl font-semibold">
              Oral health care based on clinical assessment.
            </p>
            <p className="text-gray-600">
              At <strong>EndoSmile Dental Care</strong>, located in{" "}
              <strong>Greater Noida West</strong>, we provide{" "}
              <strong>dental consultation</strong>, <strong>preventive care</strong>, and{" "}
              <strong>treatment services</strong> to support your <strong>oral health</strong>. Our services include routine{" "}
              <strong>dental check-ups</strong>, <strong>Root Canal Therapy</strong>, restorative procedures, and{" "}
              <strong>smile enhancement treatments</strong>. Treatment recommendations are based on individual clinical assessments and dental needs, with information provided to help patients make informed decisions about their oral health.
            </p>

            {/* Stats Section */}
            <div className="flex flex-col lg:flex-row justify-between p-5 border-b border-t border-gray-200">
              <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left mb-5 lg:mb-0">
                <p className="text-3xl sm:text-4xl font-semibold">10+</p>
                <p className="text-lg">Years Caring for You</p>
              </div>
              {/* <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
                <p className="text-3xl sm:text-4xl font-semibold">5000+</p>
                <p className="text-lg">Smiles Restored</p>
              </div> */}
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

      <div className="w-full flex flex-col p-5 md:p-10">
        <div className="w-full flex flex-col gap-y-10">
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-4/5 flex flex-col gap-y-10">
              <div className="flex gap-x-3 items-center">
                <HeadingPointer />
                <h3 className="font-semibold">OUR SERVICES</h3>
              </div>
              <p className="text-3xl md:text-4xl font-semibold">
                Dental services for preventive, restorative, endodontic, orthodontic, and aesthetic needs
              </p>
            </div>
            <div className="w-full md:w-1/5 py-5 flex justify-end items-end">
              <Link
                href="/treatments"
                className="px-6 py-3 bg-blue-600 rounded-full shadow-lg hover:bg-green-600 text-white text-base"
              >
                Our Treatments
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-wrap flex-1 gap-10 justify-center items-center">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
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
              Clinical assessment and treatment planning
            </p>
            <div className="space-y-4 mr-10 text-gray-600">
              <p>
                <strong>EndoSmile Dental Care</strong> is a dental clinic located in Greater Noida West, providing dental consultation, diagnosis, treatment, and preventive oral healthcare services.
              </p>
              <p>
                The clinic is associated with <strong>Dr. Sumit Dinkar</strong>, whose professional qualifications and areas of practice include endodontics and aesthetic dentistry, as applicable to his registered credentials.
              </p>
              <p>
                Services offered at the clinic include root canal treatment, aesthetic dental procedures, smile-related treatments, routine dental examinations, and preventive oral care. Treatment recommendations are based on individual dental needs and clinical assessment.
              </p>
              <p>
                The clinic aims to support patients in maintaining oral health through appropriate dental care, patient education, and treatment planning.
              </p>
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
                src="/Images/sumit/sumit2.png"
                alt="Dr Sumit"
                width={220} // Specify image width
                height={600} // Specify image height
                className="object-cover rounded-3xl w-32 md:w-48 transform scale-x-[-1]"
                priority
              />
            </div>
            <div className="absolute hidden md:flex md:bottom-20 md:right-10 ">
              <Image
                src="/Images/sumit/sumit1.png"
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
              </p>
              <p className="text-green-600 font-semibold">
                Micro Endodontist and Aesthetic Dentist
              </p>
            </div>
            <div className="space-y-4 tracking-wide leading-relaxed text-gray-800">
              <p>
                {" "}
                Dr. Sumit Dinkar is a dentist with postgraduate training in{" "}
                <strong>Conservative Dentistry and Endodontics</strong>, based in{" "}
                <strong>Greater Noida West</strong>, specializing in{" "}
                <strong>Root Canal Treatment</strong>,{" "}
                <strong>Smile Design</strong>, and{" "}
                <strong>Cosmetic Dentistry</strong>. Treatment recommendations
                are made after clinical assessment and discussion of available
                options.{" "}
              </p>{" "}
              <p>
                {" "}
                An alumnus of the prestigious{" "}
                <strong>
                  Maulana Azad Institute of Dental Sciences, New Delhi
                </strong>
                . His listed qualifications include postgraduate training and
                procedures like <strong>crown and bridge work</strong>,{" "}
                <strong>peri-radicular surgeries</strong>, and{" "}
                <strong>aesthetic treatments</strong>. He is also trained to
                . Sedation or anesthesia, when indicated, is discussed as part
                of the treatment plan and depends on the patient and procedure.{" "}
              </p>{" "}
              <p>
                Dr. Sumit has training in{" "}
                <strong>Porcelain Veneers</strong>,{" "}
                <strong>Teeth Whitening</strong> and ensures every dental
                treatment goals are discussed before any aesthetic procedure.
              </p>
              <button
                onClick={() => setIsDoctorModalOpen(true)}
                className="px-6 py-3 bg-blue-600 rounded-full shadow-lg hover:bg-green-600 text-white text-base"
              >
                Read More
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <Image
              src="/Images/Clinic/dentist.jpg"
              alt="Dentist in Grater Noida"
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
            Clinic and treatment information.
          </h5>
          <div className="px-0 md:px-20 pt-10 hover:scale-95 duration-500">
            <CoverSlider />
          </div>
        </div>
      </div>

      {/* EIGHTH SECTION - SIGNUP FOR OFFERS  */}

      <div ref={SignUpExcitingOfferRef}>
        <div>.</div>
        {/* <SignUpExcitingOffer /> */}
      </div>

      {/* NINTH SECTION - FAQ's  */}

      <div>
        <div className="w-full flex justify-center items-center px-0 md:px-10">
          <div className="w-full md:w-3/4">
            <FAQComponent />
          </div>
        </div>
      </div>

      <Modal
        isOpen={isDoctorModalOpen}
        onClose={() => setIsDoctorModalOpen(false)}
        size="lg"
        closeOnOverlayClick={true}
        closeOnEscape={true}
      >
        <DoctorProfile
          doctor={doctorData}
          onClose={() => setIsDoctorModalOpen(false)}
        />
      </Modal>
    </>
  );
}
