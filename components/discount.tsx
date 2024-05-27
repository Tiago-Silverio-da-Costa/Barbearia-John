import { FaWhatsapp } from "react-icons/fa6";

export default function Discout() {
  return (
    // TODO:implement background image
    <section>
      <div className="flex flex-col items-center justify-center pb-16">
        <p className="text-xl">
          Marque um horário e ganhe 25% de desconto.
        </p>
        <h1 className="text-xl">Ganhe <span className="text-goldColor">25%</span> de desconto</h1>
        <a className="mt-4 flex gap-3 items-center justify-center text-black bg-white transition-all duration-200 hover:opacity-75 px-6 py-2 font-bold text-xl" href={`https://api.whatsapp.com/send?phone=${process.env.NUMBER}&text=Oi,%20Tudo%20bem!`} >
          Agendar horário
          <FaWhatsapp />
        </a>
      </div>
    </section>
  )
}