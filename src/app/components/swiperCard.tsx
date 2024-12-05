import Image from "next/image";

// Define the type for the card prop
interface CardProps {
  image: string; // URL for the image
  altText: string; // Alternative text for the image
  title: string; // Title or heading for the card
  description: string; // Description or details for the card
}

const SwiperCard: React.FC<{ card: CardProps }> = ({ card }) => {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <div>
        <Image
          src={card.image}
          alt={card.altText}
          width={300}
          height={100}
          className="shadow-xl rounded-xl"
        />
      </div>

      <p className="font-bold mt-2">{card.title}</p>
      <p className="text-sm mt-1 min-h-20 md:min-h-14">{card.description}</p>
    </div>
  );
};

export default SwiperCard;
