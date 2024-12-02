// pages/about.tsx
import SEO from "../components/SEO";

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
        <div className="w-full h-screen bg-[url('/Images/Clinic/DentalClinic3.jpg')] bg-cover bg-center flex flex-col items-center justify-center">
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
      </div>
    </>
  );
};

export default About;
