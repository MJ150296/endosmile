import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl text-blue-600 font-bold text-center mb-8">
        Endo <span className="text-green-600">Smile</span> Dental Care
      </h2>
      <div>
        {/* Description and Services */}
        <p className="text-center mb-8 mx-5 md:mx-24 text-gray-800 text-lg">
          Endo Smile Dental Care provides dental consultation and treatment in
          Greater Noida West. Services are delivered by Dr. Sumit Dinkar and
          include endodontic, restorative, preventive, aesthetic, and
          orthodontic care.
        </p>

        {/* Clinic Timings Section */}
        <div className="text-center mb-12 mx-5 md:mx-24 text-gray-800 text-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Clinic Timings</h3>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Monday – Saturday:</span>{" "}
              <span className="text-xl text-blue-600">10:00 AM to 01:00 PM</span> &{" "}
              <span className="text-xl text-green-600">05:00 PM to 08:00 PM</span>
            </p>
            <p>
              <span className="font-medium">Sunday:</span> Available by appointment
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-blue-100 text-gray-700 hover:bg-green-100 hover:text-gray-900 hover:scale-95 duration-500 rounded-lg p-6 text-center">
          <Image
            src="/Images/ChooseUsIcons/patientCentric.svg"
            alt="Patient-Centric Approach"
            width={64}
            height={64}
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Patient-Centric Approach</h3>
        </div>
        <div className="bg-blue-100 text-gray-700 hover:bg-green-100 hover:text-gray-900 hover:scale-95 duration-500 rounded-lg p-6 text-center">
          <Image
            src="/Images/ChooseUsIcons/quality.svg"
            alt="Commitment to Quality"
            width={64}
            height={64}
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Commitment to Quality</h3>
        </div>
        <div className="bg-blue-100 text-gray-700 hover:bg-green-100 hover:text-gray-900 hover:scale-95 duration-500 rounded-lg p-6 text-center">
          <Image
            src="/Images/ChooseUsIcons/dentist.svg"
            alt="Specialized Expertise"
            width={64}
            height={64}
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Specialized Expertise</h3>
        </div>
        <div className="bg-blue-100 text-gray-700 hover:bg-green-100 hover:text-gray-900 hover:scale-95 duration-500 rounded-lg p-6 text-center">
          <Image
            src="/Images/ChooseUsIcons/dentist-tool.svg"
            alt="Dental Technology"
            width={64}
            height={64}
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Dental Technology</h3>
        </div>
        <div className="bg-blue-100 text-gray-700 hover:bg-green-100 hover:text-gray-900 hover:scale-95 duration-500 rounded-lg p-6 text-center">
          <Image
            src="/Images/ChooseUsIcons/dental-care.svg"
            alt="Affordable Care"
            width={64}
            height={64}
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Affordable Care</h3>
        </div>
        <div className="bg-blue-100 text-gray-700 hover:bg-green-100 hover:text-gray-900 hover:scale-95 duration-500 rounded-lg p-6 text-center">
          <Image
            src="/Images/ChooseUsIcons/education.svg"
            alt="Patient Education"
            width={64}
            height={64}
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Patient Education</h3>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
