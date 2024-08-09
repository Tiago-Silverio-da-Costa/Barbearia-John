import { Section } from "@/styles/hero";
import localFont from "next/font/local";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import Header from "./header";
import { Righteous } from "next/font/google";
import { PiMapPinFill } from "react-icons/pi";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"]
});

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

const proximaNova = localFont({
  src: [
    {
      path: "../public/fonts/ProximaNovaBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/ProximaNovaBoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/ProximaNovaRegular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/ProximaNovaRegularItalic.otf",
      weight: "500",
      style: "italic",
    },
  ],
})

export default function Hero() {

  return (
    <Section id="home" $bg="/hero/hero.jpg">
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 mx-auto max-w-7xl  h-full items-start ">
        <Header />
        <div className="w-5/6 flex flex-col gap-16 h-full">
          <div className="hidden md:flex w-full items-center gap-16 border-b border-b-gray-700 py-2">
            <div className="flex px-8 w-full items-center gap-4">
              <FaWhatsapp />
              <span className="uppercase">Seg - Sáb, 10:00 - 19:30</span>
            </div>
            <div className="flex gap-4 items-center">
              <Link
                href="https://api.whatsapp.com/send?phone=5547999055144"
                target="_blank"
                rel="noreferrer"
                className="text-goldColor hover:scale-110 hover:text-blackColor transition-all duration-300 p-4 border-l border-l-gray-700"
                aria-label="Facebook da Barbearia John"
              >
                <FaWhatsapp />
              </Link>
              <Link
                href="https://www.instagram.com/barbeariajohnn/"
                target="_blank"
                rel="noreferrer"
                className="text-goldColor hover:scale-110 hover:text-blackColor transition-all duration-300 p-4 border-l border-l-gray-700"
                aria-label="Instagram da Barbearia John"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.facebook.com/barbeariajohnn/"
                target="_blank"
                rel="noreferrer"
                className="text-goldColor hover:scale-110 hover:text-blackColor transition-all duration-300 p-4 border-l border-l-gray-700"
                aria-label="Facebook da Barbearia John"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://maps.app.goo.gl/4toBGJMxHn73mh5w8"
                target="_blank"
                rel="noreferrer"
                className="text-goldColor hover:scale-110 hover:text-blackColor transition-all duration-300 p-4 border-l border-l-gray-700 border-r border-r-gray-700"
                aria-label="Facebook da Barbearia John"
              >
                <PiMapPinFill />
              </Link>
            </div>
          </div>
          <div className="ml-16 flex flex-col justify-between gap-8">

            <div className="flex flex-col justify-center items-start">
              <div className="flex items-center md:min-w-96">
                <div className="hidden md:block w-full h-[1px] bg-gray-700"></div>
                <p className={`${righteous.className} md:mx-4 md:w-full text-goldColor max-w-36 uppercase`}>Camboriú, SC</p>
                <div className="hidden md:block w-full h-[1px] bg-gray-700"></div>
              </div>
              <p className={`${righteous.className} w-full text-4xl md:text-6xl max-w-80 `}>We are Bold, Italic!</p>
              <div className="flex flex-col-reverse justify-between gap-4 items-start mt-4">
                <Link
                  className={` uppercase w-fit flex gap-3 items-center justify-center text-white bg-goldColor transition-all duration-200 hover:opacity-75 px-4 py-2 text-sm md:text-lg font-medium`}
                  href={`https://api.whatsapp.com/send?phone=4797713257&text=Oi,%20Tudo%20bem!`}
                  target="_blank"
                  aria-label="Agende agora pelo WhatsApp"
                >
                  Agende agora
                </Link>
                <p className="tracking-tighter text-sm leading-6 max-w-80">
                  Barbers have many duties lie cutting hair, facials, shampooing hair, disinfecting tools and fitting hairpieces
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </Section>
  )
}