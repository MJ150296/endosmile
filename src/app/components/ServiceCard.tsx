import Image from "next/image";

function ServiceCard({ service }) {
  const {
    iconURL,
    title,
    description,
    imageURL,
    linkURL,
    detailedDescription,
  } = service;

  return (
    <div className="w-[350px] hover:scale-95 duration-500 cursor-pointer">
      <div className="flex flex-col shadow-xl rounded-3xl p-5">
        <div className="flex justify-between items-center mb-5">
          <div className="border border-gray-600 rounded-full p-2">
            <Image
              src={iconURL} // Ensure correct path for your image
              alt="icon"
              width={35} // Specify image width
              height={50} // Specify image height
              className="object-cover rounded-full"
            />
          </div>
          <p className="font-semibold tracking-wide text-blue-600">{title}</p>
          <p className="text-green-600 font-extrabold">&gt;</p>
        </div>
        <div className="w-full flex justify-center items-center pb-2">
          <div className="w-11/12">
            <p className="text-center text-gray-800">{description}</p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <Image
            src={imageURL}
            alt="Card Image"
            width={300}
            height={10}
            className="object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
