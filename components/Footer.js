import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => (
  <footer className="bg-black text-white text-center py-6">
    <p>Síguenos en:</p>

<div className="flex justify-center gap-4 mt-2 text-2xl">
  <a
    href="https://www.facebook.com/share/1Bk8pMRBDW/"
    aria-label="Facebook"
    className="hover:text-blue-500"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://www.instagram.com/la.sensacion.orquestaof?igsh=OG5meWpkcnAybXNo"
    aria-label="Instagram"
    className="hover:text-pink-500"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </a>
  <a
    href="https://youtube.com/@lasensacionorquestas?si=ChdeW7nbOKi7hYli"
    aria-label="YouTube"
    className="hover:text-red-500"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaYoutube />
  </a>
</div>

    <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} La Sensación Orquesta</p>
  </footer>
);

export default Footer;
