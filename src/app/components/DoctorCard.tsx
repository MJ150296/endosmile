import React from "react";
import Image from "next/image";

interface DoctorProps {
  doctor: {
    id: string;
    imageSrc: string;
    altText: string;
    name: string;
    specialist: string;
    externalLink: string;
  };
}

const DoctorCard: React.FC<DoctorProps> = ({ doctor }) => {
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white">
      <Image
        src={doctor.imageSrc}
        alt={doctor.altText}
        width={250}
        height={150}
        className="rounded-lg shadow-xl"
      />
      <h2 className="mt-4 text-xl font-semibold text-gray-800">
        {doctor.name}
      </h2>
      <p className="text-gray-600">{doctor.specialist}</p>
      <a
        href={doctor.externalLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-blue-500 hover:underline"
      >
        Learn More
      </a>
    </div>
  );
};

export default DoctorCard;
