import ServiceHours from "./serviceHours";
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


export default function Contact() {

  return (
    <section id="contact" className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-start justify-between mx-auto max-w-5xl w-5/6 py-16">
        <div className="flex flex-col justify-start">
          <p className={`${proximaNova.className} italic uppercase text-sm md:text-lg font-semibold`}>
            Contato / Localização
          </p>
          <h1 className={`${didot.className} uppercase max-w-2xl text-goldColor leading-10 text-4xl font-bold`}>
            Onde estamos localizados
          </h1>
        </div>
        <p className="text-lg mt-2 text-start md:text-center text-textBlack"> R. Lauro Francisco dos Santos, 944 • Monte Alegre, Camboriú - SC • 88348-595</p>
        <div className="flex flex-col md:flex-row items-end gap-4 justify-between w-full mt-8">
          <div className="w-full">
            <div className="w-full">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d332.89296464486097!2d-48.66716021678598!3d-27.002648522013764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1720459520476!5m2!1sen!2sbr"
                width="100%"
                height="350"
                style={{ border: "0" }}
                loading="lazy"
                className="rounded-md"
                title="mapa de localização"
              >
              </iframe>
            </div>
          </div>
          <ServiceHours />
        </div>
      </div>
    </section>
  )
}