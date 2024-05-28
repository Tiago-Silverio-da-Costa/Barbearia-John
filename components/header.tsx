"use client";

import Link from "next/link";
import { useState } from "react";
import { ImMenu } from "react-icons/im";

import { MdClose } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineCloseSquare } from "react-icons/ai";



export default function Header() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <header className="bg-WhiteColor">
      <div className="flex justify-between mx-auto max-w-5xl w-5/6 py-8">
        <h1 className="uppercase text-black font-black text-2xl">John</h1>
        {/* TODO: fazer toggle menu */}
        <nav className="hidden md:block">
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
                <li>
                  <Link className="text-goldColor font-bold hover:text-blackColor transition-all duration-300" href="#home">Ínicio</Link>{/* e galeria */}
                </li>
                <li>
                  <Link className="text-goldColor font-bold hover:text-blackColor transition-all duration-300" href="#services">Serviços</Link>
                </li>
                <li>
                  <Link className="text-goldColor font-bold hover:text-blackColor transition-all duration-300" href="#about">Sobre</Link>{/* e reviews */}
                </li>
                <li>
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