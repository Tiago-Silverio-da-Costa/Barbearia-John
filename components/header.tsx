"use client";

import Link from "next/link";
import { useState } from "react";
import { ImMenu } from "react-icons/im";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import localFont from "next/font/local";

const didot = localFont({
  src: [
    {
      path: "../public/fonts/Didot-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Didot-italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/Didot-title.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Didot.otf",
      weight: "400",
      style: "normal",
    },
  ],
})


export default function Header() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <header className="bg-WhiteColor">
      <div className="flex items-center justify-between mx-auto max-w-5xl w-5/6 py-8">
        <h1 className="uppercase text-black font-black text-2xl">John</h1>
        <nav className="items-center justify-center hidden md:flex">
          <ul className="flex gap-4">
            <li>
              <Link className="text-goldColor font-bold hover:text-blackColor transition-all duration-300" href="#home">Ínicio</Link>{/* e galeria */}
            </li>
            <li>
              <Link className="text-goldColor font-bold hover:text-blackColor transition-all duration-300" href="#services">Serviços</Link>
            </li>
            <li>
              <Link className="text-goldColor font-bold hover:text-blackColor transition-all duration-300" href="#about">Sobre nós</Link>{/* e reviews */}
            </li>
            <li>
              <Link className="text-goldColor font-bold hover:text-blackColor transition-all duration-300" href="#contact">Contato</Link>
            </li>
          </ul>
        </nav>
        <a className={`${didot.className}  hidden md:flex gap-3 items-center justify-center text-WhiteColor bg-gradient-to-tr from-[#363536] via-blackColor to-black transition-all duration-200 hover:opacity-90 px-6 py-2 font-bold text-xl md:text-2xl`} href={`https://api.whatsapp.com/send?phone=${process.env.NUMBER}&text=Oi,%20Tudo%20bem!`}>
          Agendar horário
          <FaWhatsapp />
        </a>
        <button
          className="md:hidden text-goldColor text-2xl"
          onClick={() => setOpenPopup(!openPopup)}
        >
          <ImMenu />
        </button>

        {
          openPopup && (
            <nav className="md:hidden fixed top-0 left-0 w-full h-full bg-WhiteColor z-50 flex flex-col items-center justify-center">
              {/* deixar logo no meio do topo */}
              <h1 className="uppercase text-black font-black text-2xl">John</h1>
              <button
                className="absolute top-4 right-4 text-goldColor text-2xl"
                onClick={() => setOpenPopup(false)}
              >
                <AiOutlineCloseSquare />
              </button>
              <ul className="flex flex-col gap-4 mt-8">
                <li onClick={() => setOpenPopup(false)}>
                  <Link className="text-goldColor font-bold hover:text-blackColor transition-all duration-300" href="#home">Ínicio</Link>{/* e galeria */}
                </li>
                <li onClick={() => setOpenPopup(false)}>
                  <Link className="text-goldColor font-bold hover:text-blackColor transition-all duration-300" href="#services">Serviços</Link>
                </li>
                <li onClick={() => setOpenPopup(false)}>
                  <Link className="text-goldColor font-bold hover:text-blackColor transition-all duration-300" href="#about">Sobre</Link>{/* e reviews */}
                </li>
                <li onClick={() => setOpenPopup(false)}>
                  <Link className="text-goldColor font-bold hover:text-blackColor transition-all duration-300" href="#contact">Contato</Link>
                </li>
              </ul>
            </nav>
          )
        }
      </div>
    </header>
  );
}