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
      <div className="flex flex-col-reverse items-start md:flex-row mx-auto max-w-5xl w-5/6 py-32 pt-40 gap-4">
        <SliderAbout />
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-col justify-start">
            <p className={`${proximaNova.className} italic uppercase text-sm md:text-lg font-semibold`}>
              sobre nós
            </p>
            <h1 className={`${didot.className} uppercase max-w-2xl text-goldColor leading-10 text-4xl font-bold mb-4`}>
              Cuidando do seu estilo com excelência desde 2017
            </h1>
          </div>
          <p className="text-lg tracking-tighter leading-6 max-w-3xl">
            Desde 2017, a Barbearia John está na ativa, firme e forte, cuidando do seu visual com todo carinho e dedicação. Somos uma barbearia tradicional e familiar que oferece cortes de cabelo com qualidade, atendimento personalizado e preço justo.
            <br />
            <br />
            Passamos por uns perrengues na pandemia, mudamos de lugar umas vezes, mas nunca desistimos. Agora, estamos aqui no <strong><Link aria-label="Barbearia John em Monte Alegre (Camboriú)" href="#contact" className={`text-goldColor`}>Monte Alegre, ao lado da escola CAIC, Camboriú</Link></strong>.
            <br />
            <br />
            Queria agradecer de coração pela confiança ao longo desses anos todos. Se você ainda não veio conferir, venha conhecer a barbearia pra descobrir porque a galera escolhe a gente pra dar aquele tapa no visual e sair com todo estilo na rua!
          </p>
        </div>
      </div>
    </section>
  )
}