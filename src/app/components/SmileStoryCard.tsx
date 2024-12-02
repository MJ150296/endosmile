const SmileStoryCard = () => {
  return (
    <div className="pt-32 flex flex-col gap-y-5">
      <div className="relative h-screen w-full flex flex-col justify-center items-center">
        <div className="bg-white p-1 z-40">
          <div className="w-64 h-48 bg-[url('/Images/smileStories/smile1.jpg')] bg-cover bg-top"></div>
        </div>
        <div className="bg-white p-1 absolute z-20 -top-16 left-1/2 -translate-x-1/2">
          <div className="w-52 h-72 bg-[url('/Images/smileStories/smile02.jpg')] bg-cover bg-top"></div>
        </div>
        <div className="bg-white p-1 absolute -top-9 left-44">
          <div className="w-72 h-52 bg-[url('/Images/smileStories/smile04.jpg')] bg-cover bg-top"></div>
        </div>
        <div className="bg-white p-1 absolute -z-20 top-44 left-56">
          <div className="w-60 h-72 bg-[url('/Images/smileStories/smile06.jpg')] bg-cover bg-top"></div>
        </div>
        <div className="bg-white p-1 absolute top-4 right-44">
          <div className="w-72 h-52 bg-[url('/Images/smileStories/smile05.jpg')] bg-cover bg-top"></div>
        </div>
        <div className="bg-white p-1 absolute bottom-[210px] right-32">
          <div className="w-80 h-52 bg-[url('/Images/smileStories/smile03.jpg')] bg-cover bg-top"></div>
        </div>
        <div className="w-full absolute bottom-12">
          <h4 className="font-sans italic text-4xl text-center">
            <span className="text-blue-600">
              &quot;Every smile has a story, and we&apos;re
            </span>
            <br />
            <span className="text-green-600">
              here to make yours unforgettable.&quot;
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SmileStoryCard;
