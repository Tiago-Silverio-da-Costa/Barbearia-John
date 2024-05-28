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
      <div className="flex flex-col items-center gap-4 md:flex-row  mx-auto max-w-5xl w-5/6">
        <SliderAbout />
        <div className="flex flex-col items-start justify-center mx-auto max-w-5xl w-5/6 py-16">
          <div className="flex flex-col justify-start">
            <p className={`${proximaNova.className} italic uppercase text-lg font-semibold`}>
              sobre nós
            </p>
            <h1 className={`${didot.className} uppercase max-w-2xl text-goldColor leading-10 text-4xl font-bold mb-4`}>
              Cuidando do seu estilo com dedicação, excelência e atenção aos detalhes desde 2017
            </h1>
          </div>
          <p className="text-lg text-textBlack tracking-tighter leading-6 max-w-3xl">
            Ofereço serviços excepcionais de corte de cabelo e barba, sempre com um sorriso e dedicação ao que faço. Meu compromisso é proporcionar a cada cliente uma experiência única, onde conforto e estilo se encontram.
          </p>
          <br />
          <p className="text-lg text-textBlack tracking-tighter leading-6 max-w-3xl">
            Desde 2017, a Barbearia John tem cuidado do seu estilo com dedicação e excelência. Ao longo dos anos, passamos por altos e baixos e já estivemos em diversos locais, mas nunca fechamos nossas portas. Este trabalho, que tanto amo, jamais será abandonado. Atualmente, estamos localizados no <Link href="#contact" className="underline text-goldColor">Monte Alegre, ao lado da escola CAIC.</Link>
          </p>
          <br />
          <p className="text-lg text-textBlack tracking-tighter leading-6 max-w-3xl">
            Agradeço por confiarem em mim ao longo dos anos. Cada visita é uma oportunidade de criar um estilo que reflete sua personalidade e realça sua confiança. Venha me visitar e descubra por que a Barbearia John é a escolha certa para o seu estilo          </p>
        </div>
      </div>
    </section>
  )
}