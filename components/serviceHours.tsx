import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"]
});


export default function ServiceHours() {
  return (
    <section>
      <div className="flex flex-col justify-between items-start">
        <div className="text-WhiteColor rounded-md flex flex-col justify-center items-start w-full">
          <h1 className={`text-lg text-start text-goldColor font-bold leading-6 ${righteous.className}`}>Horário de funcionamento Barbearia John Camboriú</h1>
          <p className="font-semibold text-black">
            • Seg: <span className={`text-goldColor`}>12:00</span> – <span className={`text-goldColor`}>17:00</span>
          </p>
          <p className="font-semibold text-black">
            • Ter a Sex: <span className={`text-goldColor`}>9:30</span> – <span className={`text-goldColor`}>20:00</span>
          </p>
          <p className="font-semibold text-black">
            • Sáb: <span className={`text-goldColor`}>10:00</span> – <span className={`text-goldColor`}>20:00</span>
          </p>
          <p className="font-semibold text-black">
            • Dom: <span className="text-goldColor">Fechado</span>
          </p>
          <p className="font-semibold text-black">
            • Feriados: <span className={`text-goldColor`}>10:00</span> – <span className={`text-goldColor`}>20:00</span>
          </p>
        </div>
        <p className="font-semibold text-black text-sm mt-2 max-w-96 text-start tracking-tight leading-4">
          Para agendar seu horário com facilidade, clique no botão abaixo:
        </p>
        <Link className={`w-full mt-4 flex gap-3 items-center justify-center text-WhiteColor bg-black transition-all duration-200 hover:opacity-75 px-6 py-2 font-bold text-2xl`} href={`https://api.whatsapp.com/send?phone=4797713257&text=Oi,%20Tudo%20bem!`} target="_blank" aria-label="Agende agora pelo WhatsApp">
          <FaWhatsapp />
          Agende agora
        </Link>
      </div>
    </section>
  )
}