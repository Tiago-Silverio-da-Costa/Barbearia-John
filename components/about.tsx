import Link from "next/link";
import SliderAbout from "./sliderAbout";
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

export default function About() {
  return (
    <section id="about" className="text-WhiteColor">
      <div className="flex flex-col-reverse items-start md:flex-row mx-auto max-w-5xl w-5/6 py-16 md:gap-4">
        <SliderAbout />
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-col justify-start">
            <p className={`${proximaNova.className} italic uppercase text-sm md:text-lg font-semibold`}>
              sobre nós
            </p>
            <h1 className={`${didot.className} uppercase max-w-2xl text-goldColor leading-10 text-4xl font-bold mb-4`}>
              Cuidando do seu estilo com dedicação, excelência e atenção aos detalhes desde 2017
            </h1>
          </div>
          <p className="text-lg text-textBlack tracking-tighter leading-6 max-w-3xl">
            Desde 2017, a Barbearia John está na ativa, firme e forte, cuidando do seu visual com todo carinho e dedicação. Passamos por uns perrengues, mudamos de lugar umas vezes, mas nunca desistimos. Agora, tamo aqui no <Link href="#contact" className="underline text-goldColor">Monte Alegre, ao lado da escola CAIC.</Link>
          </p>
          <br />
          <p className="text-lg text-textBlack tracking-tighter leading-6 max-w-3xl">
            Queria agradecer de coração pela confiança ao longo desses anos todos. Cada vez que vocês pintam por aqui, é uma chance de deixar o seu estilo brilhar, mostrando quem você é de verdade. E, ó, se você ainda não veio conferir, apareci na Barbearia pra descobrir porque a galera escolhe a gente pra dar aquele tapa no visual e sair com todo estilo na rua!
          </p>
        </div>
      </div>
    </section>
  )
}