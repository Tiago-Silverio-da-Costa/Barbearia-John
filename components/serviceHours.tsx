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

export default function ServiceHours() {
  return (
    <section>
      <div className="flex flex-col justify-between items-start">
        <div className="text-WhiteColor rounded-md flex flex-col justify-center items-start w-full">
          <h1 className={`text-lg text-start text-goldColor font-bold leading-6 `}>Horário de funcionamento Barbearia John Camboriú</h1>
        <p className="font-semibold">
            • Seg: <span className={`text-goldColor ${didot.className}`}>12:00</span> – <span className={`text-goldColor ${didot.className}`}>17:00</span>
          </p>
          <p className="font-semibold">
            • Ter a Sex: <span className={`text-goldColor ${didot.className}`}>9:30</span> – <span className={`text-goldColor ${didot.className}`}>20:00</span>
          </p>
          <p className="font-semibold">
            • Sáb: <span className={`text-goldColor ${didot.className}`}>10:00</span> – <span className={`text-goldColor ${didot.className}`}>20:00</span>
          </p>
          <p className="font-semibold">
            • Dom: <span className="text-goldColor">Fechado</span>
          </p>
          <p className="font-semibold">
            • Feriados: <span className={`text-goldColor ${didot.className}`}>10:00</span> – <span className={`text-goldColor ${didot.className}`}>20:00</span>
          </p>
        </div>
        <p className="font-semibold text-sm text-textBlack mt-2 max-w-96 text-start tracking-tight leading-4">
          Para agendar seu horário com facilidade, clique no botão abaixo:
        </p>
        <Link className={`w-full mt-4 flex gap-3 items-center justify-center text-blackColor bg-WhiteColor transition-all duration-200 hover:opacity-75 px-6 py-2 font-bold text-2xl`} href={`https://api.whatsapp.com/send?phone=4797713257&text=Oi,%20Tudo%20bem!`} target="_blank" aria-label="Agende agora pelo WhatsApp">
          Agende agora
          <FaWhatsapp />
        </Link>
      </div>
    </section>
  )
}