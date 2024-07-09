import localFont from "next/font/local";
import Image from "next/image";
import SliderHero from "./sliderHero";

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

export default function Reviews() {

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center items-start md:items-end gap-2 md:gap-4 mx-auto max-w-5xl w-5/6">
        <div className="flex flex-col justify-start">
          <p className={`${proximaNova.className} italic uppercase text-sm md:text-lg font-semibold`}>
            Avaliações
          </p>
          <h1 className={`${didot.className} uppercase max-w-2xl text-goldColor leading-10 text-4xl font-bold mb-4`}>
            O que dizem sobre nós
          </h1>
          <p className="text-lg text-WhiteColor tracking-tighter leading-6 max-w-xl">
            Em nossa barbearia, prezamos pela qualidade e satisfação de nossos clientes. Confira o que eles têm a dizer sobre nós:
          </p>
          <div className="flex flex-col gap-2 mt-4">
            <Image src="/reviews/reviewromulofariasg.png" alt="Avaliação de cliente satisfeito com a Barbearia John em Camboriú: Romulo farias g" width={500} height={500} />
            <Image src="/reviews/reviewfabioandressanago.png" alt="Avaliação de cliente satisfeito com a Barbearia John em Camboriú: Fabio Andressa Nago" width={500} height={500} />
            <Image src="/reviews/reviewjaquelinesantos.png" alt="Avaliação de cliente satisfeito com a Barbearia John em Camboriú: Jaqueline Santos" width={500} height={500} />
          </div>
        </div>
        <SliderHero />
      </div>
    </section>
  )
}