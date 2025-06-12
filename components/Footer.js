const Footer = () => (
  <footer className="bg-black text-white text-center py-6">
    <p>Síguenos en:</p>
    <div className="flex justify-center gap-4 mt-2">
      <a href="#" aria-label="Facebook" className="hover:text-blue-500">📘</a>
      <a href="#" aria-label="Instagram" className="hover:text-pink-500">📸</a>
      <a href="#" aria-label="YouTube" className="hover:text-red-500">▶️</a>
    </div>
    <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} La Sensación Orquesta</p>
  </footer>
);

export default Footer;
