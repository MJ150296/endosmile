// pages/about.tsx
import SEO from "../components/SEO";
import Image from "next/image";
import SwiperComponent from "../components/SwiperComponent";
import DoctorCardList from "../components/DoctorsCardList";
import HeadingPointer from "../components/HeadingPointer";
import Link from "next/link";

const About = () => {
  return (
    <>
      <SEO
        title="About Us | EndoSmile Dental Care"
        description="Learn more about EndoSmile Dental Care, your dental clinic for healthy smiles."
        keywords="dental care, dental clinic, oral health, smile"
        image="/images/about-us-image.jpg"
        url="https://www.endosmiledental.com/about"
        author="EndoSmile Team"
      />
      <div className="w-full min-h-screen flex flex-col items-center justify-center pt-24">
        {/* Premium About Us Hero */}
        <div className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">

          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('/Images/Clinic/DentalClinic3.jpg')] bg-cover bg-center scale-105"></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl px-6">

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white animate__animated animate__fadeInUp">
              About Us
            </h1>

            {/* Divider */}
            <div className="w-20 h-[2px] bg-white/60 mx-auto my-6"></div>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed animate__animated animate__fadeInUp animate__delay-500ms">
              <span className="font-semibold text-white">EndoSmile Dental Care </span>
              provides dental consultation, preventive care, and treatment
              services in Greater Noida West.
            </p>

            {/* Secondary Text */}
            <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed animate__animated animate__fadeInUp animate__delay-1s">
              Treatment options are discussed after examination and are based
              on individual clinical findings and preferences.
            </p>

            {/* Glass CTA */}
            <div className="mt-10 animate__animated animate__fadeInUp animate__delay-1.5s">
              <Link
                href="/bookAppointment"
                className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                Book An Appointment
              </Link>
            </div>

          </div>
        </div>

        {/* SECOND SECTION - ABOUT US BLOG  */}
        <div className="w-full p-10 md:p-20 bg-gray-50 flex flex-col gap-y-14 md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col gap-y-5">
            <div className="flex gap-x-3 items-center">
              <HeadingPointer />
              <h3 className="font-semibold">WELCOME TO</h3>
            </div>
            <div className="flex flex-col gap-y-1">
              <h2 className="text-3xl text-blue-600 font-semibold">
                ENDO<span className="text-green-600">SMILE</span> DENTAL CARE
              </h2>
              <p className="text-gray-900 text-lg italic">
                Dental consultation and treatment
              </p>
            </div>
            <div className="flex flex-col gap-y-3">
              <p className="text-gray-800 tracking-wide leading-relaxed">
                <strong>EndoSmile Dental Care</strong> provides dental
                consultation and services in Greater Noida West, including
                preventive, restorative, endodontic, orthodontic, and aesthetic
                care. The appropriate treatment depends on examination findings
                and the patient&apos;s oral health needs.
              </p>
              <p className="text-gray-800 tracking-wide leading-relaxed">
                Services include routine examinations, oral hygiene guidance,
                tooth restoration, root canal treatment, tooth replacement,
                orthodontic assessment, and selected cosmetic procedures. The
                clinician explains expected benefits, limitations, risks, and
                alternatives before treatment.
              </p>
            </div>

            <div>
              <Link
                href="/bookAppointment"
                className="p-3 md:px-6 md:py-3 text-white bg-blue-600 rounded-full shadow hover:bg-green-600 transition"
              >
                Book An Appointment
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-end justify-center pr-0 md:pr-10">
            <Image
              src="/Images/sumit/aboutUs.jpg"
              alt="About Us Clinic Image"
              width={400}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* SWIPER COMPONENT  */}
        <div className="bg-white p-0 md:p-20 w-full">
          <div className="w-full flex flex-col md:flex-row gap-y-10 gap-x-10">
            <div className="w-full p-10 md:p-0 md:w-1/3 flex flex-col gap-y-5 justify-center">
              <p className="text-green-600 tracking-wide">
                ENDO<span className="text-blue-600">SMILE</span> DENTAL CARE
              </p>
              <h3 className="text-4xl text-gray-700 font-sans font-medium">
                Why Choose Us?
              </h3>
              <p className="text-gray-800">
                EndoSmile Dental Care provides a structured clinical setting
                with attention to communication, prevention, and patient comfort.
              </p>
              <a href="tel:+918368847831" className="flex gap-x-2 group cursor-pointer">
                <Image
                  src="/Images/Icons/phoneB.png"
                  alt="Phone Icon"
                  width={50}
                  height={30}
                  className="animate__animated animate__tada animate__infinite animate__slow group-hover:scale-110 transition-transform"
                />
                <div className="flex flex-col font-medium">
                  <p className="text-blue-600">FOR MORE INFORMATION</p>
                  <p className="text-green-600 font-semibold group-hover:underline">+91-83688 47831</p>
                </div>
              </a>
            </div>
            <div className="w-full md:w-2/3">
              <SwiperComponent />
            </div>
          </div>
        </div>

        {/* TEAM CARDS  */}
        <div className="px-5 md:px-20 py-10 md:py-5 w-full flex">
          <div className="flex flex-col gap-y-2">
            <h4 className="text-4xl font-semibold text-blue-600">
              The Smile <span className="text-green-600">Squad</span>
            </h4>
            <div className="p-10 flex">
              <DoctorCardList />
            </div>
          </div>
        </div>

        {/* STAFF GROUP IMAGE  */}
        <div className="hidden w-full p-20 justify-center items-center">
          <p className="text-3xl">STAFF GROUP IMAGE</p>
        </div>
      </div>
    </>
  );
};

export default About;
