import { Section } from "@/styles/hero";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import Header from "./header";
import { PiMapPinFill } from "react-icons/pi";
import { IoTime } from "react-icons/io5";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"]
});

export default function Hero() {

  return (
    <Section id="home" $bg="/hero/hero.jpg">
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 mx-auto max-w-7xl  h-full items-start ">
        <Header />
        <div className="w-5/6 flex flex-col gap-16 h-full">
          <div className="hidden md:flex bg-[#020000] w-full items-center gap-16 py-2">
            <div className="flex px-8 w-full items-center gap-4">
              <IoTime className="text-goldColor text-2xl" />
              <span className="uppercase">Seg - Sáb, 10:00 - 19:30</span>
            </div>
            <div className="flex items-center justify-center">
              <Link
                href="https://api.whatsapp.com/send?phone=554797713257"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 py-4 px-6 hover:text-goldColor transition-all duration-300 border-l border-l-gray-700"
                aria-label="Facebook da Barbearia John"
              >
                <FaWhatsapp className="text-xl" />
              </Link>
              <Link
                href="https://www.instagram.com/barbeariajohnn/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 py-4 px-6 hover:text-goldColor transition-all duration-300 border-l border-l-gray-700"
                aria-label="Instagram da Barbearia John"
              >
                <FaInstagram className="text-xl" />
              </Link>
              <Link
                href="https://www.facebook.com/barbeariajohnn/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 py-4 px-6 hover:text-goldColor transition-all duration-300 border-l border-l-gray-700"
                aria-label="Facebook da Barbearia John"
              >
                <FaFacebookF className="text-xl" />
              </Link>
              <Link
                href="https://maps.app.goo.gl/4toBGJMxHn73mh5w8"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 py-4 px-6 hover:text-goldColor transition-all duration-300 border-l border-l-gray-700 border-r border-r-gray-700"
                aria-label="Facebook da Barbearia John"
              >
                <PiMapPinFill className="text-xl" />
              </Link>
            </div>
          </div>
          <div className="bg-black/50 rounded-md p-6 md:w-fit mx-auto w-5/6 md:ml-16 flex flex-col justify-between gap-8">

            <div className="w-fit flex flex-col justify-center items-start">
              <div className="flex items-center md:min-w-96">
                <div className="hidden md:block w-full h-[1px] bg-goldColor"></div>
                <p className={`${righteous.className} md:mx-4 md:w-full text-goldColor max-w-36 uppercase`}>Camboriú, SC</p>
                <div className="hidden md:block w-full h-[1px] bg-goldColor"></div>
              </div>
              <p className={`${righteous.className} w-full text-4xl md:text-6xl max-w-xl `}>Seja Clássico, Seja Único!</p>
              <div className="flex flex-col-reverse justify-between gap-4 items-start mt-4">
                <Link
                  className={` uppercase w-fit flex gap-3 items-center justify-center text-white bg-goldColor transition-all duration-200 hover:opacity-75 px-4 py-2 text-sm md:text-lg font-medium`}
                  href={`https://api.whatsapp.com/send?phone=554797713257&text=Oi,%20Tudo%20bem!`}
                  target="_blank"
                  aria-label="Agende agora pelo WhatsApp"
                >
                  <FaWhatsapp />
                  Agende agora
                </Link>
                <p className="tracking-tighter text-sm leading-6 max-w-80">
                  Agende online e ganhe 10% de desconto em todos os serviços!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </Section>
  )
}