import Image from "next/image";

function SocialMedia() {
  return (
    <div className="w-full flex justify-center items-center text-center">
      <div className="w-full flex flex-col items-center">
        <div className="hidden md:flex gap-x-10 px-5">
          <a
            href="https://wa.me/+918368847831"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Images/Icons/WhatsApp.png"
              alt="WhatsApp"
              width={30}
              height={30}
              className="hover:scale-105 duration-200"
            />
          </a>
          <a
            href="http://m.me/An-it solution company"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Images/Icons/Facebook.png"
              alt="Facebook"
              width={30}
              height={30}
              className="hover:scale-105 duration-200"
            />
          </a>
          <a
            href="https://www.instagram.com/itssolutioncompany/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Images/Icons/Instagram.png"
              alt="Instagram"
              width={30}
              height={30}
              className="hover:scale-105 duration-200"
            />
          </a>
          <a href="mailto:endosmiledentalcare@gmail.com">
            <Image
              src="/Images/Icons/Gmail.png"
              alt="Gmail"
              width={30}
              height={30}
              className="hover:scale-105 duration-200"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
