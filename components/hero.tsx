import { FaWhatsapp } from "react-icons/fa6";


export default function Hero() {

  return (
    <section id="home" className="flex flex-col items-center justify-center py-32 bg-white text-black">
      <h1 className="text-xl font-semibold text-gray-500">Cuidando do seu estilo desde 2016.</h1>
      <h1 className="text-5xl font-bold">
        Bem-vindo à Barbearia John.
      </h1>
      <p className="text-lg">Corte de cabelo masculino, infantil e sobrancelha.</p>
      <a className="mt-4 flex gap-3 items-center justify-center text-white bg-black transition-all duration-200 hover:opacity-75 px-6 py-2 font-bold text-2xl" href={`https://api.whatsapp.com/send?phone=${process.env.NUMBER}&text=Oi,%20Tudo%20bem!`} >
        Agendar horário
        <FaWhatsapp />
      </a>
    </section>
  )
}