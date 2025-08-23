"use client";

import { useRef } from "react";

const ReelsSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  const reels = [
    { src: "/videos/reel1.MOV", views: "" },
    { src: "/videos/reel2.MOV", views: "" },
    { src: "/videos/reel3.MOV", views: "" },
    { src: "/videos/reel4.MOV", views: "" },
    { src: "/videos/reel7.MOV", views: "" },
    { src: "/videos/reel6.MOV", views: "" },
  ];

  return (
    <section className="bg-black text-white py-12 px-4">
      <h2 className="text-center text-4xl md:text-5xl font-bebas mb-6 leading-tight text-white drop-shadow-[1px_1px_2px_#fff]">
        Reels
      </h2>

      <div className="relative max-w-8x2 mx-auto">
        
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full z-30"
        >
          ◀
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full z-30"
        >
          ▶
        </button>

       
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 px-10 scroll-smooth custom-scroll"
        >
          {reels.map((reel, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[520px] h-[500px] relative rounded-lg overflow-hidden shadow-xl"
            >
              <video
                className="w-full h-full object-cover"
                src={reel.src}
                controls
                muted
                playsInline
                preload="metadata"
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm shadow">
                 {reel.views}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;
