"use client";

import { useRef } from "react";

const ReelsSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const reels = [
    { src: "/videos/reel1.mp4", views: "1.5 mil" },
    { src: "/videos/reel2.mp4", views: "2.4 mil" },
    { src: "/videos/reel3.mp4", views: "1.9 mil" },
    { src: "/videos/reel1.mp4", views: "1.5 mil" },
    { src: "/videos/reel2.mp4", views: "2.4 mil" },
    { src: "/videos/reel3.mp4", views: "1.9 mil" },
    { src: "/videos/reel1.mp4", views: "1.5 mil" },
    { src: "/videos/reel2.mp4", views: "2.4 mil" },
    { src: "/videos/reel3.mp4", views: "1.9 mil" },
  ];

  return (
    <section className="bg-black text-white py-12 px-4">
      <h2 className="text-center text-4xl md:text-5xl font-bebas mb-6 leading-tight text-white drop-shadow-[1px_1px_2px_#fff]">Reels</h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Botones */}
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

        {/* Reels con scroll oculto y flechas */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 px-8 scroll-smooth custom-scroll"
        >
          {reels.map((reel, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[250px] md:w-[300px] lg:w-[340px] relative rounded overflow-hidden shadow-lg"
            >
              <video
                className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
                src={reel.src}
                controls
                muted
                playsInline
                preload="metadata"
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                👁️ {reel.views}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;
