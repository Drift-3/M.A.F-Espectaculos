const Testimonios = () => (
  <section className="bg-white text-black py-12 px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Testimonios</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <blockquote className="border p-4 rounded-md shadow">
        <p>"¡Increíble show! Fue el alma de la fiesta."</p>
        <cite className="text-sm text-gray-500">– Cliente feliz</cite>
      </blockquote>
      <blockquote className="border p-4 rounded-md shadow">
        <p>"Sonaron como si fueran una banda de concierto profesional."</p>
        <cite className="text-sm text-gray-500">– Invitado</cite>
      </blockquote>
      <blockquote className="border p-4 rounded-md shadow">
        <p>"Mi evento no hubiera sido lo mismo sin ellos."</p>
        <cite className="text-sm text-gray-500">– Organizador</cite>
      </blockquote>
    </div>
  </section>
);

export default Testimonios;
