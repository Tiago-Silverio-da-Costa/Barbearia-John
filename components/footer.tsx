import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-WhiteColor text-black">
      <div className="flex items-center justify-between py-8 mx-auto max-w-5xl w-5/6">
        <p className="text-sm">
          © {new Date().getFullYear()} Barbearia John. Todos os direitos reservados.
        </p>
        <div className="flex gap-4 text-2xl">
          <a href="https://www.instagram.com/barbeariajohn/" target="_blank" rel="noreferrer" className="text-black hover:opacity-70 transition-all duration-300">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/barbeariajohn/" target="_blank" rel="noreferrer" className="text-black hover:opacity-70 transition-all duration-300">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
}