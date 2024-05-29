import SliderHero from "./sliderHero";
import localFont from "next/font/local";
import Image from "next/image";

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

export default function Hero() {

  return (
    <section id="home" className="bg-WhiteColor text-black">
      <div className="relative mx-auto max-w-5xl w-5/6 flex flex-col pt-20  items-start lg:flex-row justify-between lg:items-center py-16">
        <div className="flex flex-col">
          <h1 className={`${proximaNova.className} uppercase text-sm md:text-lg font-semibold text-goldColor italic`}>Desde 2017</h1>
          <h1 className={`${didot.className} uppercase text-6xl font-bold leading-[0.9] tracking-tighter max-w-32`}>
            Barbearia John
          </h1>
        </div>

        <div className="relative z-20 mt-4 lg:mt-0 md:bg-gradient-to-br md:from-blackColor md:to-[#363536]">
          {/* <SliderHero /> */}
          <Image className="m-2" src="/hero/heroDecorator.jpg" alt="hero" width={400} height={450} />
        </div>

      <Image width={500} height={500} className="hidden lg:block rotate-[69deg] absolute top-[12rem] right-[52rem]" src="/hero/shave.png" alt="hero"  objectFit="cover" />
      <Image width={500} height={500} className="hidden lg:block rotate-[50deg] absolute top-[33rem] left-[-2rem]" src="/hero/tee.png" alt="hero"  objectFit="cover" />
      </div>
    </section>
  )
}