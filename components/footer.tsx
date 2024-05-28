import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-WhiteColor text-black">
      <div className="flex flex-col gap-2 items-start md:flex-row md:items-center justify-between py-8 mx-auto max-w-5xl w-5/6">
        <p className="text-sm">
          © {new Date().getFullYear()} Barbearia John. Todos os direitos reservados.
        </p>
        <div className="flex items-center justify-center gap-2 text-2xl">
          <a href="https://www.instagram.com/barbeariajohn/" target="_blank" rel="noreferrer" className="text-goldColor hover:text-blackColor transition-all duration-300">
            <FaInstagram />
          </a>
          <p className="text-goldColor">•</p>
          <a href="https://www.facebook.com/barbeariajohn/" target="_blank" rel="noreferrer" className="text-goldColor hover:text-blackColor transition-all duration-300">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
}