const HeroSection = () => {
  return (
    <section className="relative h-screen w-full">
      
      <img
        src="/img/homescreen.jpg"
        alt="Portada La Sensación Orquesta"
        className="absolute inset-0 object-cover w-full h-full translate-y-[-40px]"
      />

      <div className="relative z-10 flex items-start justify-end h-full bg-black/60 text-white px-75 py-50 text-right">
        <div>
          <h1 className="text-5xl md:text-7xl font-bebas mb-6 leading-tight text-white drop-shadow-[1px_1px_2px_#fff]">
  HAZ TU EVENTO<br />
  INOLVIDABLE
</h1>


          <a
  href="https://wa.me/5212381018041" 
  target="_blank"
  rel="noopener noreferrer"
  className="mt-3 inline-block px-8 py-3 bg-white hover:bg-yellow-200 text-black text-lg font-semibold rounded shadow-lg transition duration-300 cursor-pointer"
>
  CONTACTANOS
</a>

        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-90 py-3 px-8 text-center z-20">
  <p className="text-4xl md:text-5xl font-bebas mb-6 leading-tight text-white drop-shadow-[1px_1px_2px_#fff]">
    EN LA SENSACIÓN ORQUESTA TENDRÁS LA GARANTÍA DE UN SHOW <br />
    AL NIVEL DEL EVENTO QUE SIEMPRE HAS SOÑADO
  </p>
</div>

    </section>
  );
};

export default HeroSection;
