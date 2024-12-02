// pages/about.tsx
import SEO from "../components/SEO";
import Image from "next/image";
import SwiperComponent from "../components/SwiperComponent";
import DoctorCardList from "../components/DoctorsCardList";

const About = () => {
  return (
    <>
      <SEO
        title="About Us | EndoSmile Dental Care"
        description="Learn more about EndoSmile Dental Care, your trusted dental clinic for healthy smiles."
        keywords="dental care, dental clinic, oral health, smile"
        image="/images/about-us-image.jpg"
        url="https://www.endosmiledental.com/about"
        author="EndoSmile Team"
      />
      <div className="w-full min-h-screen flex flex-col items-center justify-center pt-28">
        <div className="w-full h-screen bg-fixed bg-[url('/Images/Clinic/DentalClinic3.jpg')] bg-cover bg-center flex flex-col items-center justify-center">
          <div className="w-full h-full bg-white bg-opacity-20 flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center -mt-14">
              <h1 className="animate__animated animate__slideInUp px-10 py-5 border-b-2 border-b-white  text-6xl font-bold font-sans bg-black bg-opacity-60 text-gray-200 text-center rounded-tl-3xl rounded-tr-3xl">
                About Us
              </h1>
              <p className="animate__animated animate__slideInUp animate__delay-800ms text-xl p-10 border-b-2 border-white bg-black bg-opacity-60 text-gray-200 text-center max-w-3xl rounded-3xl">
                Welcome to{" "}
                <span className="font-semibold">EndoSmile Dental Care</span>,
                where{" "}
                <span className="font-semibold">
                  your smile is our priority!
                </span>{" "}
                Our clinic is committed to providing the{" "}
                <span className="font-semibold">best dental care services</span>{" "}
                using state-of-the-art technology and{" "}
                <span className="font-semibold">
                  personalized treatment plans.
                </span>
              </p>
              <p className="animate__animated animate__slideInUp animate__delay-1.5s text-xl p-10 border-b-2 border-white bg-black bg-opacity-60 text-gray-200 text-center max-w-3xl rounded-3xl">
                Our team of skilled professionals is dedicated to making each
                visit as comfortable as possible. With a focus on preventive
                care, we ensure that you have the knowledge and support needed
                to maintain a healthy smile for life.
              </p>
            </div>
          </div>
        </div>

        {/* SECOND SECTION - ABOUT US BLOG  */}
        <div className="w-full bg-gray-50 flex p-20">
          <div className="w-1/2 flex flex-col gap-y-5">
            <div className="flex gap-x-3">
              <Image
                src="/Images/Icons/Teeth.png"
                alt="Teeth Pointer"
                width={20}
                height={20}
                className="-ml-8"
              />
              <p className="text-gray-800 font-semibold text-lg">WELCOME TO</p>
            </div>
            <div className="flex flex-col gap-y-1">
              <h2 className="text-3xl text-blue-600 font-semibold">
                ENDO<span className="text-green-600">SMILE</span> DENTAL CARE
              </h2>
              <p className="text-gray-900 text-lg italic">
                Crafting Confident Smiles
              </p>
            </div>
            <div className="flex flex-col gap-y-3">
              <p className="text-gray-800 tracking-wide leading-relaxed">
                At EndoSmile Dental Care, we are dedicated to providing
                exceptional dental services with a patient-first approach.
                Located in the heart of Greater Noida, our clinic combines
                advanced dental technology with a team of highly skilled
                professionals to deliver personalized care. We specialize in
                preventive, restorative, and cosmetic dentistry, ensuring that
                every patient achieves and maintains a healthy, confident smile.
                Our warm and welcoming environment is designed to make every
                visit comfortable, prioritizing your oral health and overall
                well-being.
              </p>
              <p className="text-gray-800 tracking-wide leading-relaxed">
                With a commitment to excellence and innovation, we strive to set
                a new standard for dental care in Greater Noida. Our team of
                experienced dentists and support staff work collaboratively to
                develop customized treatment plans tailored to your needs.
                Whether you require routine checkups, orthodontic solutions, or
                advanced endodontic procedures, EndoSmile Dental Care is your
                trusted partner for comprehensive oral health care. We are
                passionate about creating beautiful smiles and enhancing the
                quality of life for our patients through compassionate and
                professional dental services.
              </p>
            </div>

            <div>
              <button className="px-6 py-3 bg-blue-600 rounded-full shadow-lg hover:bg-green-600 text-white text-base">
                Book An Appointment
              </button>
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-end justify-center pr-10">
            <Image
              src="/Images/Clinic/dentist.jpg"
              alt="About Us Clinic Image"
              width={400}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* SWIPER COMPONENT  */}
        <div className="bg-white p-20 w-full">
          <div className="w-full flex gap-x-10">
            <div className="w-1/3 flex flex-col gap-y-5 justify-center">
              <p className="text-green-600 tracking-wide">
                ENDO<span className="text-blue-600">SMILE</span> DENTAL CARE
              </p>
              <h3 className="text-4xl text-gray-700 font-sans font-medium">
                Why Choose Us?
              </h3>
              <p className="text-gray-800">
                At EndoSmile Dental Care, we make dentistry fun, friendly, and
                fear-free—because your smile deserves the happiest vibes and the
                best care!
              </p>
              <div className="flex gap-x-2">
                <Image
                  src="/Images/Icons/phone1.png"
                  alt="Phone Icon"
                  width={50}
                  height={30}
                />
                <div className="flex flex-col font-medium">
                  <p className="text-blue-600">FOR MORE INFORMATION</p>
                  <p className="text-green-600 font-semibold">
                    {" "}
                    +91 7895927366
                  </p>
                </div>
              </div>
            </div>
            <div className="w-2/3">
              <SwiperComponent />
            </div>
          </div>
        </div>

        {/* TEAM CARDS  */}
        <div className="px-20 py-10 w-full flex">
          <div className="flex flex-col gap-y-5">
            <h4 className="text-4xl font-semibold text-blue-600">
              The Smile <span className="text-green-600">Squad</span>
            </h4>

            <div className="p-10 flex">
              <DoctorCardList />
            </div>
          </div>
        </div>

        {/* STAFF GROUP IMAGE  */}
        <div className="w-full p-20 flex justify-center items-center">
          <p className="text-3xl">STAFF GROUP IMAGE</p>
        </div>
      </div>
    </>
  );
};

export default About;
