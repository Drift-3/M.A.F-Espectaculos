const PorqueSomos = () => {

  return (

    <section className="bg-black text-white py-12 px-4">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
    
    <div className="grid grid-cols-2 gap-4 place-items-center">
      {[

        "/img/IMG_2251.jpg",
        "/img/IMG_2256.jpg",
        "/img/IMG_1540.jpg",
        "/img/IMG_3792.jpg",
        "/img/IMG_0132.jpg",
        "/img/IMG_3589.jpg",
        "/img/IMG_2242.jpg",
        "/img/IMG_0136.jpg"

        
      ].map((src, i) => (

        <div
          key={i}
          className="flex items-center justify-center overflow-hidden rounded shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <img
            src={src}
            alt={`Imagen ${i + 1}`}
            className="max-w-full max-h-64 object-contain"
          />
        </div>
      ))}
    </div>

        {/* Columna de texto */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bebas mb-6 leading-tight text-white drop-shadow-[1px_1px_2px_#fff]">
            ¿Quiénes somos y por qué somos tu mejor opción?
          </h2>
          <p className="text-3xl md:text-2xl font-bebas mb-4 leading-tight text-white drop-shadow-[1px_1px_1px_#fff]">
            La Sensación Orquesta es una agrupación musical profesional que forma parte de MAF Espectáculos, dedicada a llevar música en vivo de alta calidad a todo tipo de eventos sociales y masivos. Nuestro equipo está integrado por músicos jóvenes, talentosos y comprometidos con brindar presentaciones inolvidables llenas de energía, carisma y profesionalismo.
            <br /><br />
            Nos especializamos en ofrecer un espectáculo completo, no solo musical, sino también visual y emocional, cuidando cada detalle desde el repertorio, la puesta en escena, el vestuario y la interacción con el público. Gracias a nuestra versatilidad, nos adaptamos a diferentes gustos y tipos de eventos, garantizando siempre una experiencia personalizada.
            <br /><br />
            Lo que nos distingue de otras agrupaciones es nuestro compromiso con la calidad, la responsabilidad y el trabajo en equipo. Contamos con experiencia en eventos sociales, bodas, aniversarios, shows masivos y más, siempre con un enfoque en superar las expectativas de nuestros clientes.
            <br /><br />
            Somos tu mejor opción porque combinamos pasión, talento y profesionalismo para convertir tu evento en un momento inolvidable. No solo tocamos música, creamos experiencias...
          </p>
        </div>
      </div>
    </section>
  );
};

export default PorqueSomos;
