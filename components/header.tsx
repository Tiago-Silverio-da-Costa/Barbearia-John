"use client";

import Link from "next/link";
import { useState } from "react";
import { ImMenu } from "react-icons/im";
import { AiOutlineCloseSquare } from "react-icons/ai";

export default function Header() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <header className="bg-blackColor">
      <div className="flex items-center justify-between mx-auto max-w-5xl w-5/6 py-8">
        <h1 className="uppercase text-WhiteColor font-black text-2xl">John</h1>
        <nav className="items-center justify-center hidden md:flex">
          <ul className="flex gap-4">
            <li>
              <Link className="text-goldColor font-bold hover:text-WhiteColor transition-all duration-300" href="#home">Ínicio</Link>{/* e galeria */}
            </li>
            <li>
              <Link className="text-goldColor font-bold hover:text-WhiteColor transition-all duration-300" href="#services">Serviços</Link>
            </li>
            <li>
              <Link className="text-goldColor font-bold hover:text-WhiteColor transition-all duration-300" href="#about">Sobre nós</Link>{/* e reviews */}
            </li>
            <li>
              <Link className="text-goldColor font-bold hover:text-WhiteColor transition-all duration-300" href="#contact">Contato</Link>
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
              <h1 className="uppercase text-WhiteColor font-black text-2xl">John</h1>
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
              </ul>
            </nav>
          )
        }
      </div>
    </header>
  );
}