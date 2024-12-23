import Image from "next/image";

interface Service {
  iconURL: string;
  title: string;
  description: string;
  imageURL: string;
  linkURL?: string;
  detailedDescription?: string;
}

function ServiceCard({ service }: { service: Service }) {
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
              src={iconURL}
              alt="icon"
              width={35}
              height={35}
              className="object-cover rounded-full"
            />
          </div>
          <p className="font-semibold tracking-wide text-blue-600">{title}</p>
          <p className="text-green-600 font-extrabold">&gt;</p>
        </div>
        <div className="w-full h-full md:h-24 flex justify-center items-center pb-2">
          <div className="w-11/12">
            <p className="text-center text-gray-800">{description}</p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-72 h-64">
            <Image
              src={imageURL}
              alt="Card Image"
              width={300}
              height={200} // Adjust height to match the image's aspect ratio
              className="object-fill w-full h-full rounded-3xl"
            />
          </div>
        </div>
      </div>

      <div className="hidden">
        <p>{linkURL ?? "No link available"}</p>
        <p>{detailedDescription ?? "No details available"}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
