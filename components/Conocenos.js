"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const integrantes = [
  {
    nombre: "Juan Pérez",
    rol: "Vocalista",
    foto: "/img/logoMAF.jpg",
  },
  {
    nombre: "Ana López",
    rol: "Baterista",
    foto: "/img/logoMAF.jpg",
  },
  {
    nombre: "Luis Ríos",
    rol: "Saxofonista",
    foto: "/img/logoMAF.jpg",
  },
  {
    nombre: "María Díaz",
    rol: "Tecladista",
    foto: "/img/logoMAF.jpg",
  },
];

const Conocenos = () => {
  return (
    <section className="bg-white text-black py-12 px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-bebas mb-6 leading-tight text-black drop-shadow-[1px_1px_2px_#000]">Conócenos</h2>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {integrantes.map((persona, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                <img
                  src={persona.foto}
                  alt={persona.nombre}
                  className="w-40 h-40 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-bold">{persona.nombre}</h3>
                <p className="text-gray-600">{persona.rol}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Conocenos;
