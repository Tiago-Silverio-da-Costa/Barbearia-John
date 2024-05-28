import { FaWhatsapp } from "react-icons/fa6";

export default function Discout() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl">
          Marque um horário e ganhe <span className="text-goldColor">20%</span> de desconto.
        </p>
        {/* TODO:colocar imagem selo 25% de desconto */}
        <a className="mt-4 flex gap-3 items-center justify-center text-black bg-WhiteColor transition-all duration-200 hover:opacity-75 px-6 py-2 font-bold text-xl" href={`https://api.whatsapp.com/send?phone=${process.env.NUMBER}&text=Oi,%20Tudo%20bem!`} >
          Agendar horário
          <FaWhatsapp />
        </a>
      </div>
    </section>
  )
}