import { FaWhatsapp } from "react-icons/fa6";
import SliderHero from "./sliderHero";
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
    <section id="home" className="bg-WhiteColor text-black">
      <div className="mx-auto max-w-5xl w-5/6 flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <h1 className={`${proximaNova.className} uppercase text-lg font-semibold text-goldColor italic`}>Desde 2017</h1>
          <h1 className={`${didot.className} uppercase text-7xl font-bold leading-[0.9] tracking-tighter max-w-32`}>
            Barbearia John
          </h1>
          <a className={`${didot.className}  mt-4 flex gap-3 items-center justify-center text-WhiteColor bg-blackColor transition-all duration-200 hover:opacity-75 px-6 py-2 font-bold text-2xl`} href={`https://api.whatsapp.com/send?phone=${process.env.NUMBER}&text=Oi,%20Tudo%20bem!`}>
            Agendar horário
            <FaWhatsapp />
          </a>
        </div>

        <div className="h-[31rem]">
          <SliderHero />
        </div>

      </div>
    </section>
  )
}