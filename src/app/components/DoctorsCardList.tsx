import { nanoid } from "nanoid";
import DoctorCard from "./DoctorCard";

const DoctorCardList = () => {
  const doctorsDetails = [
    {
      id: nanoid(),
      imageSrc: "/Images/Clinic/dentist.jpg",
      altText: "Dentist",
      name: "Dr. Sumit Dinkar",
      specialist: "Principal Dentist",
      externalLink: "#",
    },
  ];
  return (
    <div className="flex flex-1 flex-wrap gap-10">
      {doctorsDetails.map((doctor) => (
        <DoctorCard key={doctor.id} doctor = {doctor}/>
      ))}
    </div>
  );
};

export default DoctorCardList;
