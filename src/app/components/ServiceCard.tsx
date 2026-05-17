import Image from "next/image";
import Link from "next/link";

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
  } = service;

  return (
    <Link 
      href={linkURL || "/"} 
      className="group w-full max-w-[360px] cursor-pointer block"
    >
      <div className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 overflow-hidden border border-gray-100">
        
        {/* Card Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-50">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:bg-blue-100 transition-colors duration-300">
              <Image
                src={iconURL}
                alt={title}
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold text-gray-800 tracking-wide">{title}</h3>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <Image
            src={imageURL}
            alt={title}
            fill
            className="object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-105"
            sizes="(max-width: 768px) 100vw, 360px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Description */}
        <div className="p-5">
          <p className="text-gray-600 text-sm leading-relaxed text-center">{description}</p>
        </div>

      </div>
    </Link>
  );
}

export default ServiceCard;