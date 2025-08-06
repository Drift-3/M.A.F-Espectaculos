const testimonios = [
  { src: "/img/test1.jpg", alt: "Comentario de cliente 1" },
  { src: "/img/test2.jpg", alt: "Comentario de cliente 2" },
  { src: "/img/test3.jpg", alt: "Comentario de cliente 3" },
  { src: "/img/test4.jpg", alt: "Comentario de cliente 4" },
];

const Testimonios = () => {
  return (
    <section className="bg-black text-white py-12 px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-bebas mb-6 leading-tight text-white drop-shadow-[1px_1px_2px_#fff]">Testimonios</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonios.map((testimonio, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-xs transform transition duration-300 ease-in-out hover:scale-105"
          >
            <img
              src={testimonio.src}
              alt={testimonio.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonios;
