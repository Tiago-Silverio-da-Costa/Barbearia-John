import localFont from "next/font/local";
import Discout from "./discount";

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

export default function Services() {
  return (
    <section  id="services" className="flex flex-col items-center justify-center pt-16 pb-12 text-WhiteColor">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mx-auto max-w-5xl w-5/6">
        <div>
          <div className="flex flex-col text-start justify-start">
            <p className={`${proximaNova.className} italic uppercase text-sm md:text-lg font-semibold`}>
              Lista de serviços
            </p>
            <h1 className={`${didot.className} uppercase max-w-2xl text-goldColor leading-10 text-4xl font-bold mb-4`}>
              O que estamos oferecendo:
            </h1>
          </div>
          <div className="flex flex-col gap-4">

            <div className="flex justify-between gap-2 items-end">
              <p className="flex gap-4 items-center text-lg">Corte de cabelo</p>
              {/* <p className="text-sm text-gray-500">
                ...............................................................
              </p> */}
              <p className={`${didot.className} text-lg text-goldColor`}>R$ 25,00</p>
            </div>

            <div className="flex justify-between gap-2 items-end">
              <p className="text-lg">Barba</p>
              {/* <p className="text-sm text-gray-500">
                ......................................................................................
              </p> */}
              <p className={`${didot.className} text-lg text-goldColor`}>R$ 25,00</p>
            </div>

            <div className="flex justify-between gap-2 items-end">
              <p className="text-lg">Cabelo + Barba</p>
              {/* <p className="text-sm text-gray-500">
                ................................................................
              </p> */}
              <p className={`${didot.className} text-lg text-goldColor`}>R$ 50,00</p>
            </div>

            <div className="flex justify-between gap-2 items-end">
              <p className="text-lg">Sobrancelha</p>
              {/* <p className="text-sm text-gray-500">
                ........................................................................
              </p> */}
              <p className={`${didot.className} text-lg text-goldColor`}>R$ 25,00</p>
            </div>
          </div>
        </div>
        <Discout />
      </div>
    </section>
  )
}