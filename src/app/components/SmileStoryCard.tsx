import Image from "next/image";

const SmileStoryCard = () => {
  return (
    <div className="pt-32">
      <div className="relative h-screen w-full flex justify-center items-center">
        <div className="bg-white p-1 z-40">
          <div className="w-64 h-48 bg-[url('/Images/smileStories/smile1.jpg')] bg-cover bg-top"></div>
        </div>
        <div className="bg-white p-1 absolute z-20 -top-16 left-1/2 -translate-x-1/2">
          <div className="w-52 h-72 bg-[url('/Images/expertise-img-2.jpg')] bg-cover bg-top"></div>
        </div>
        <div className="bg-white p-1 absolute -top-9 left-44">
          <div className="w-72 h-52 bg-[url('/Images/expertise-img-1.jpg')] bg-cover bg-top"></div>
        </div>
        <div className="bg-white p-1 absolute -z-20 top-44 left-56">
          <div className="w-60 h-72 bg-[url('/Images/expertise-img-2.jpg')] bg-cover bg-top"></div>
        </div>
        <div className="bg-white p-1 absolute top-4 right-44">
          <div className="w-72 h-52 bg-[url('/Images/expertise-img-1.jpg')] bg-cover bg-top"></div>
        </div>
        <div className="bg-white p-1 absolute bottom-[210px] right-32">
          <div className="w-80 h-52 bg-[url('/Images/expertise-img-1.jpg')] bg-cover bg-top"></div>
        </div>

        <div className="">
          <h4 className="font-sans italic text-4xl absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
            <span className="text-blue-600">
              "Every smile has a story, and we're{" "}
            </span>
            <span className="text-green-600">
              here to make yours unforgettable."
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SmileStoryCard;
