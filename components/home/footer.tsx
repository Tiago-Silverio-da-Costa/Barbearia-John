import Link from "next/link";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import Image from "next/image";
import { PiMapPinFill } from "react-icons/pi";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-[#141109] text-white">
      <div className="py-8 mx-auto max-w-5xl w-5/6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center flex-col gap-4">
            <Image src="/logo.png" alt="Logo da Barbearia John em Camboriú: Corte de Cabelo Masculino e Infantil com Agendamento Online Descontado" width={70} height={100} />
            <div className="flex items-center justify-center text-2xl">
              <Link
                href="https://api.whatsapp.com/send?phone=554797713257"
                target="_blank"
                rel="noreferrer"
                className="text-xl py-1 px-3 md:px-6"
                aria-label="Facebook da Barbearia John"
              >
                <IoLogoWhatsapp className="text-goldColor hover:scale-110 hover:text-goldColor/70 transition-all duration-300" />
              </Link>
              <Link
                href="https://www.instagram.com/barbeariajohnn/"
                target="_blank"
                rel="noreferrer"
                className="text-xl py-1 px-3 md:px-6 border-l border-l-goldColor"
                aria-label="Instagram da Barbearia John"
              >
                <AiFillInstagram className="text-goldColor hover:scale-110 hover:text-goldColor/70 transition-all duration-300" />
              </Link>
              <Link
                href="https://www.tiktok.com/@barbeariajohn1"
                target="_blank"
                rel="noreferrer"
                className="text-xl py-1 px-3 md:px-6 border-l border-l-goldColor"
                aria-label="Instagram da Barbearia John"
              >
                <FaTiktok className="text-goldColor hover:scale-110 hover:text-goldColor/70 transition-all duration-300" />
              </Link>
              <Link
                href="https://www.youtube.com/@BarbeariaJohn"
                target="_blank"
                rel="noreferrer"
                className="text-xl py-1 px-3 md:px-6 border-l border-l-goldColor"
                aria-label="Instagram da Barbearia John"
              >
                <FaYoutube className="text-goldColor hover:scale-110 hover:text-goldColor/70 transition-all duration-300" />
              </Link>
              <Link
                href="https://www.facebook.com/barbeariajohnn/"
                target="_blank"
                rel="noreferrer"
                className="text-xl py-1 px-3 md:px-6 border-l border-l-goldColor"
                aria-label="Facebook da Barbearia John"
              >
                <FaFacebookF className="text-goldColor hover:scale-110 hover:text-goldColor/70 transition-all duration-300" />
              </Link>
              <Link
                href="https://maps.app.goo.gl/4toBGJMxHn73mh5w8"
                target="_blank"
                rel="noreferrer"
                className="text-xl py-1 px-3 md:px-6 border-l border-l-goldColor"
                aria-label="Facebook da Barbearia John"
              >
                <PiMapPinFill className="text-goldColor hover:scale-110 hover:text-goldColor/70 transition-all duration-300" />
              </Link>
            </div>
          </div>


          <div className="flex flex-col items-start mt-4 md:mt-0 sm:items-center gap-4">
            <p className="text-xl uppercase font-bold text-center w-full">Menu</p>
            <div className="flex gap-2 items-center text-[#b1b1b1] text-xs">
              <Link className={`hover:scale-110 rounded-[3px] m-[2px] text-sm hover:text-blackColor transition-all duration-500`} href="/">Ínicio</Link>
              <Link className={`hover:scale-110 rounded-[3px] m-[2px] text-sm hover:text-blackColor transition-all duration-500`} href="/#services">Serviços</Link>
              <Link className={`hover:scale-110 rounded-[3px] m-[2px] text-sm hover:text-blackColor transition-all duration-500`} href="/#about">Sobre</Link>
              <Link className={`hover:scale-110 rounded-[3px] m-[2px] text-sm hover:text-blackColor transition-all duration-500`} href="/#contact">Contato</Link>
            </div>
          </div>


        </div>




        <div className="flex flex-col md:flex-row gap-2 items-center justify-between pt-8">
          <p className="text-sm text-center md:text-start max-w-72">
            © {new Date().getFullYear()} Barbearia John - Corte de cabelo masculino e infantil em Camboriú.
          </p>

          <Link className="text-center flex w-fit items-center justify-center gap-2 text-sm font-medium text-[#b1b1b1] rounded-md"
            target="_blank"
            rel="noreferrer"
            aria-label="Entre em contato com a Barbearia Carioca pelo Whatsapp"
            href="https://www.tiagosc.com.br/"
          >
            Desenvolvido por Tiago Silverio Programador
          </Link>
        </div>
      </div>

    </footer>
  );
}