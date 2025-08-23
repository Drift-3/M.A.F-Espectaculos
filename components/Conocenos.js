"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const integrantes = [
  {
    nombre: "Jose Carlos Rojas",
    rol: "Cantante",
    foto: "/img/Cantante.jpg",
  },
  {
    nombre: "Victor Cruz",
    rol: "Baterista",
    foto: "/img/baterista.jpg",
  },
  {
    nombre: "Raymundo Tellez",
    rol: "Saxofonista",
    foto: "/img/saxofonista1.jpg",
  },
  {
    nombre: "Majo Macario",
    rol: "Saxofonista 2",
    foto: "/img/sax2.jpg",
  },
   {
    nombre: "Katy Cruz",
    rol: "Cantante",
    foto: "/img/voz2.jpg",
  },
   {
    nombre: "Hugo Rodriguez",
    rol: "Trombon",
    foto: "/img/Hugo.jpg",
  },
     {
    nombre: "Carmen Yareli ",
    rol: "Cantante",
    foto: "/img/voz1.jpg",
  },
  {
    nombre: "David Cruz ",
    rol: "Timbal",
    foto: "/img/timbal.jpg",
  },
  {
    nombre: "Mario Flores ",
    rol: "Trompeta",
    foto: "/img/trompeta.jpg",
  },
  {
    nombre: "Gabriel Rodriguez",
    rol: "Bajo",
    foto: "/img/guitarra.jpg",
  },
  {
    nombre: "Francisco Rojas",
    rol: "Congas",
    foto: "/img/congas.jpg",
  },
  {
    nombre: "Ricardo Vidal",
    rol: "Piano",
    foto: "/img/piano.jpg",
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
