import { FaWhatsapp } from "react-icons/fa6";
import localFont from "next/font/local";
import Link from "next/link";

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

export default function Discout() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl text-center">
        Agende seu corte de cabelo com <span className={`${didot.className} text-goldColor text-3xl`}>20%</span> de desconto! 
        </p>
        {/* TODO:colocar imagem selo 25% de desconto */}
        <Link
        className={`w-full mt-4 flex gap-3 items-center justify-center text-blackColor bg-WhiteColor transition-all duration-200 hover:opacity-75 px-6 py-2 font-bold text-xl md:text-2xl`} 
        href={`https://api.whatsapp.com/send?phone=4797713257&text=Oi,%20Tudo%20bem!`} 
        target="_blank"
         aria-label="Agende agora pelo WhatsApp"
        >
          Agende agora
          <FaWhatsapp />
        </Link>
      </div>
    </section>
  )
}