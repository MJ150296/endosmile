import Image from "next/image";
import Counter from "./components/Counter";
import ServiceCard from "./components/ServiceCard";
import SmileStoryCard from "./components/SmileStoryCard";
import CoverSlider from "./components/CoverSlider";
import FAQComponent from "./components/FAQComponent";
import { nanoid } from "nanoid";
import HeadingPointer from "./components/HeadingPointer";

export default function Home() {
  const services = [
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
      iconURL: "/Images/Icons/dental.png",
      title: "Dental Implants and Fillings",
      description:
        "From seamless fillings to secure dental implants, restore and protect your smile with confidence.",
      imageURL: "/Images/services/ImplantsAndFillings.jpg",
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
      iconURL: "/Images/Icons/orthodontics.png",
      title: "Root Canal Treatment",
      description:
        "Save your smile with precise and painless root canal treatment.",
      imageURL: "/Images/services/rootCanal.jpg",
      linkURL: "",
      detailedDescription: "",
    },
    {
      id: nanoid(),
      iconURL: "/Images/Icons/pediatric.png",
      title: "Pediatric Dentistry",
      description:
        "Gentle care for little smiles with expert pediatric dentistry.",
      imageURL: "/Images/services/pediaticDentistry.jpg",
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
  ];
  return (
    <>
      {/* WHATSAPP ICON  */}
      <div className="fixed z-50 right-5 bottom-10 flex flex-col gap-y-3">
        {/* Phone Icon */}
        <a href="tel:7895927366" aria-label="Call 7895927366">
          <Image
            src="/Images/Icons/phone.png"
            alt="Phone Icon"
            width={40}
            height={40}
            className="ml-2 w-10 h-10"
          />
        </a>

        {/* WhatsApp Icon */}
        <a
          href="https://api.whatsapp.com/send?phone=7895927366&text=Hello Doc!%20Help%20me%20with%20the%20following%20questions%20please."
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
            <h2 className="text-base text-gray-600 leading-relaxed sm:text-lg lg:text-xl">
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
              <button className="p-3 md:px-6 md:py-3 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 transition">
                Book An Appointment
              </button>
              <button className="p-3 md:px-6 md:py-3 text-white bg-green-600 rounded-md shadow hover:bg-green-700 transition">
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
        <div className="w-4/5 max-w-4xl bg-white rounded-xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12">
          {/* Dental Queries Section */}
          <div className="flex flex-col text-lg font-medium text-center lg:text-left">
            <p>Any Dental Queries</p>
            <p className="font-sans font-light">+91-1234567890</p>
          </div>

          {/* Opening Hours Section */}
          <div className="flex flex-col text-lg sm:text-xl font-medium text-center lg:text-left">
            <p>Opening Hours</p>
            <p className="font-sans font-light">Tue to Sun 10:00AM to 7:30PM</p>
          </div>

          {/* Book Appointment Button Section */}
          <div className="flex flex-col text-center lg:text-left">
            <button className="px-6 py-3 bg-blue-600 rounded-full shadow-lg hover:bg-green-600 text-white text-base">
              Book An Appointment
            </button>
          </div>
        </div>
      </div>

      {/* SECOND SECTION - ABOUT US */}

      <div>
        <div className="w-full flex flex-col-reverse gap-y-10 lg:flex-row pt-20 pb-5 md:py-20 px-5 sm:px-10 lg:px-32">
          {/* Image Section */}
          <div className="w-full p-5 md:p-0 lg:w-1/2 mb-10 lg:mb-0">
            <Image
              src="/Images/AboutUs.png"
              alt="About Us"
              width={400}
              height={300} // Ensure image height is proportional to the width
              className="w-full rounded-xl shadow-xl shadow-gray-400"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-y-10">
            <div className="flex gap-x-3 items-center">
              <HeadingPointer />
              <h3 className="font-semibold text-2xl sm:text-3xl">ABOUT US</h3>
            </div>
            <p className="text-3xl sm:text-4xl font-semibold">
              Bringing Bright Smiles and Better Health Together.
            </p>
            <p className="mr-10 text-gray-600 text-base sm:text-lg lg:text-xl">
              At EndoSmile Dental Care, we believe every smile tells a story.
              Our mission is to provide exceptional dental care tailored to your
              unique needs, combining cutting-edge technology with a
              compassionate touch. From routine check-ups to advanced dental
              solutions, we are committed to enhancing your oral health and
              restoring your confidence—one smile at a time.
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
              <button className="px-6 py-3 bg-blue-600 rounded-full shadow-lg hover:bg-green-600 text-white text-base sm:text-lg">
                Make An Appointment +
              </button>
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
                <button className="px-6 py-3 bg-blue-600 rounded-full shadow-lg hover:bg-green-600 text-white text-base">
                  Go to Services
                </button>
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
            <div className="space-y-4">
              <p className="mr-10 text-gray-600">
                Welcome to EndoSmile Dental Care, your trusted dental clinic in
                Greater Noida! Here, expertise truly meets excellence. With our
                team of highly skilled professionals and a passion for
                innovation, we&apos;re dedicated to offering personalized care
                that prioritizes your comfort and oral health.
              </p>
              <p className="mr-10 text-gray-600">
                From advanced endodontics and smile makeovers to preventive
                dental solutions, we combine state-of-the-art technology with a
                compassionate approach to ensure your visit is as effective as
                it is comfortable.
              </p>
              <p className="mr-10 text-gray-600">
                Located in the heart of Greater Noida, we take pride in
                transforming smiles and boosting confidence for our community.
                Choose EndoSmile Dental Care for exceptional results you can
                trust—because your smile deserves nothing but the best!
              </p>
            </div>
            <div>
              <button className="px-6 py-3 bg-blue-600 rounded-full shadow-lg hover:bg-green-600 text-white text-base">
                Treatments
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex relative justify-center items-center">
            <div className="p-20">
              <Image
                src="/Images/bg/bg1.jpg"
                alt="Dr Sumit"
                width={530} // Specify image width
                height={600} // Specify image height
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <div className="absolute top-20 left-10">
              <Image
                src="/Images/expertise-img-1.jpg"
                alt="Dr Sumit"
                width={220} // Specify image width
                height={600} // Specify image height
                className="object-cover rounded-3xl"
                priority
              />
            </div>
            <div className="absolute bottom-20 right-16">
              <Image
                src="/Images/expertise-img-1.jpg"
                alt="Dr Sumit"
                width={200} // Specify image width
                height={600} // Specify image height
                className="object-cover rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* FIFTH SECTION  */}

      <div className="px-10">
        <div className="flex flex-col px-10 pt-10">
          <div className="flex justify-between">
            <div className="">
              <h2 className="tracking-wide text-green-600 text-4xl">
                ENDOSMILE
                <span className="text-blue-600 text-3xl font-medium">
                  STORIES..
                </span>
                .
              </h2>
              <p className="text-gray-700 text-2xl tracking-wider">
                Redefining smiles, Redefining confidence.
              </p>
            </div>
            <div>
              <button className="px-6 py-3 bg-blue-600 rounded-full shadow-lg hover:bg-green-600 text-white text-base">
                Book An Appointment +
              </button>
            </div>
          </div>

          {/* IMAGE COLLAGE  */}
          <div>
            <SmileStoryCard />
          </div>
        </div>
      </div>

      {/* SIXTH SECTION - TRANSFORMATION  */}
      <div className="">
        <div className="p-10 bg-gray-200 shadow-xl">
          <h5 className="text-3xl font-sans font-semibold text-gray-800">
            Your Transformation Destination.
          </h5>
          <div className="px-20 pt-10 hover:scale-95 duration-500">
            <CoverSlider />
          </div>
        </div>
      </div>

      {/* SEVENTH SECTION - PROFILE  */}

      <div>
        <div className="flex p-20">
          <div className="w-1/2 flex flex-col gap-y-5">
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
                Principal Dentist; Endodontist (Root Canal Specialist)
              </p>
            </div>
            <div className="space-y-4 tracking-wide leading-relaxed text-gray-800">
              <p>
                Dr. Sumit Dinkar is a passionate and skilled dentist dedicated
                to crafting confident, radiant smiles. With his expertise and a
                warm, approachable demeanor, he ensures every patient feels at
                ease while receiving top-notch care. Specializing in Endodontics
                (Root Canal Treatment) and Cosmetic Dentistry, Dr. Sumit is on a
                mission to transform oral health and smiles alike!
              </p>
              <p>
                A proud alumnus of the prestigious Maulana Azad Institute of
                Dental Sciences, New Delhi, Dr. Sumit brings over a decade of
                hands-on experience to his practice. He&apos;s a lifetime member
                of the Indian Academy of Aesthetic and Cosmetic Dentistry and
                has pursued advanced training in Smile Design, Porcelain
                Veneers, Teeth Whitening, Bioclear techniques, Implant
                Dentistry, and TMD (Temporomandibular Disorder) Management.
              </p>
              <p>
                Dr. Sumit&apos;s blend of cutting-edge skills and genuine care
                for his patients makes every dental visit a step closer to the
                perfect smile you deserve!
              </p>
              <button className="px-6 py-3 bg-blue-600 rounded-full shadow-lg hover:bg-green-600 text-white text-base">
                Read More
              </button>
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center">
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

      {/* EIGHT SECTION - FAQ's  */}

      <div>
        <div className="w-full flex justify-center items-center px-10">
          <div className="w-3/4">
            <FAQComponent />
          </div>
        </div>
      </div>
    </>
  );
}
