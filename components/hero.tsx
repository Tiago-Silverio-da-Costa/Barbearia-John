import { Section } from "@/styles/hero";
import localFont from "next/font/local";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

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
      <div className="relative mx-auto max-w-5xl w-5/6 flex flex-col pt-20  items-start lg:flex-row justify-between lg:items-center py-64">
        <div className="flex flex-col">
          <h1 className={`${didot.className} uppercase text-6xl font-bold leading-[0.9] tracking-tighter max-w-32`}>
            Barbearia John
          </h1>
          <p className={`${proximaNova.className} uppercase text-lg font-semibold   max-w-96 leading-6`}>Fundada em 2017, a Barbearia John oferece cortes de cabelo masculinos e infantis em Camboriú.</p>
          <Link
            className={`mt-2 flex gap-3 items-center justify-center text-WhiteColor bg-goldColor transition-all duration-200 hover:opacity-90 px-6 py-2 font-bold text-xl md:text-2xl`}
            href={`https://api.whatsapp.com/send?phone=4797713257&text=Oi,%20Tudo%20bem!`}
            target="_blank"
            aria-label="Agende agora pelo WhatsApp"
          >
            Agende agora
            <FaWhatsapp />
          </Link>
        </div>
      </div>
    </Section>
  )
}