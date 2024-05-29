import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-blackColor text-WhiteColor">
      <div className="flex flex-col gap-2 items-start md:flex-row md:items-center justify-between py-8 mx-auto max-w-5xl w-5/6">
        <p className="text-sm">
          © {new Date().getFullYear()} Barbearia John. Todos os direitos reservados.
        </p>
        <div className="flex items-center justify-center gap-2 text-2xl">
          <Link  
          href="https://www.instagram.com/barbeariajohn/" target="_blank" rel="noreferrer" className="text-goldColor hover:text-WhiteColor transition-all duration-300">
            <FaInstagram />
          </Link>
          <p className="text-goldColor">•</p>
          <Link href="https://www.facebook.com/barbeariajohn/" target="_blank" rel="noreferrer" className="text-goldColor hover:text-WhiteColor transition-all duration-300">
            <FaFacebookF />
          </Link>
        </div>
      </div>
    </footer>
  );
}