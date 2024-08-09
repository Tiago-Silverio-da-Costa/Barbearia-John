"use client";

import Link from "next/link";
import { useState } from "react";
import { ImMenu } from "react-icons/im";
import { AiOutlineCloseSquare } from "react-icons/ai";
import Image from "next/image";

export default function Header() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <header className="w-full md:w-fit">
      <div className="md:mt-6 md:ml-6 flex flex-row md:flex-col items-center justify-between w-full md:w-fit max-w-5xl md:max-w-52 py-8 px-8 md:pb-0 md:pt-4 md:bg-[#020000]">
        <Image src="/logo.png" alt="Logo da Barbearia John em Camboriú: Corte de Cabelo Masculino e Infantil com Agendamento Online Descontado" width={80} height={80} />
        <nav className="items-center justify-center w-full hidden md:flex">
          <ul className="flex flex-col mt-4 w-full">
            <li className="flex justify-center items-center w-full py-4 px-16 bg-transparent hover:bg-goldColor border-t border-t-gray-500/35 border-b border-b-gray-500/35 hover:border-transparent transition-all duration-300 cursor-pointer">
              <Link className="text-white font-bold w-full" href="/#home">Ínicio</Link>
            </li>
            <li className="flex justify-center items-center w-full py-4 px-16 bg-transparent hover:bg-goldColor border-t border-t-gray-500/35 border-b border-b-gray-500/35 hover:border-transparent transition-all duration-300 cursor-pointer">
              <Link className="text-white font-bold w-full" href="/#services">Serviços</Link>
            </li>
            <li className="flex justify-center items-center w-full py-4 px-16 bg-transparent hover:bg-goldColor border-t border-t-gray-500/35 border-b border-b-gray-500/35 hover:border-transparent transition-all duration-300 cursor-pointer">
              <Link className="text-white font-bold w-full" href="/#about">Sobre</Link>
            </li>
            <li className="flex justify-center items-center w-full py-4 px-16 bg-transparent hover:bg-goldColor border-t border-t-gray-500/35 border-b border-b-gray-500/35 hover:border-transparent transition-all duration-300 cursor-pointer">
              <Link className="text-white font-bold w-full" href="/#contact">Contato</Link>
            </li>
            <li className="flex justify-center items-center w-full py-4 px-16 bg-transparent hover:bg-goldColor border-t border-t-gray-500/35 border-b border-b-gray-500/35 hover:border-transparent transition-all duration-300 cursor-pointer">
              <Link className="text-white font-bold w-full" href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <button
          aria-label="Menu"
          type="button"
          className="md:hidden text-goldColor text-2xl"
          onClick={() => setOpenPopup(!openPopup)}
        >
          <ImMenu />
        </button>

        {
          openPopup && (
            <nav className="md:hidden fixed top-0 left-0 w-full h-full bg-blackColor z-50 flex flex-col items-center justify-center">
              <Image src="/logo.png" alt="Logo da Barbearia John em Camboriú: Corte de Cabelo Masculino e Infantil com Agendamento Online Descontado" width={100} height={100} />
              <button
                aria-label="Fechar"
                type="button"
                className="absolute top-4 right-4 text-goldColor text-2xl"
                onClick={() => setOpenPopup(false)}
              >
                <AiOutlineCloseSquare />
              </button>
              <ul className="flex flex-col gap-4 mt-8">
                <li onClick={() => setOpenPopup(false)}>
                  <Link className="text-goldColor font-bold hover:text-WhiteColor transition-all duration-300" href="#home">Ínicio</Link>{/* e galeria */}
                </li>
                <li onClick={() => setOpenPopup(false)}>
                  <Link className="text-goldColor font-bold hover:text-WhiteColor transition-all duration-300" href="#services">Serviços</Link>
                </li>
                <li onClick={() => setOpenPopup(false)}>
                  <Link className="text-goldColor font-bold hover:text-WhiteColor transition-all duration-300" href="#about">Sobre</Link>{/* e reviews */}
                </li>
                <li onClick={() => setOpenPopup(false)}>
                  <Link className="text-goldColor font-bold hover:text-WhiteColor transition-all duration-300" href="#contact">Contato</Link>
                </li>
                <li onClick={() => setOpenPopup(false)}>
                  <Link className="text-goldColor font-bold hover:text-WhiteColor transition-all duration-300" href="/blog">Blog</Link>
                </li>
              </ul>
            </nav>
          )
        }
      </div>
    </header>
  );
}