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
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          About Us
        </h1>
        <p className="text-xl text-gray-700 text-center max-w-3xl px-4 mb-8">
          Welcome to EndoSmile Dental Care, where your smile is our priority!
          Our clinic is committed to providing the best dental care services
          using state-of-the-art technology and personalized treatment plans.
        </p>
        <p className="text-lg text-gray-600 text-center max-w-3xl px-4">
          Our team of skilled professionals is dedicated to making each visit as
          comfortable as possible. With a focus on preventive care, we ensure
          that you have the knowledge and support needed to maintain a healthy
          smile for life.
        </p>
      </div>
    </>
  );
};

export default About;
