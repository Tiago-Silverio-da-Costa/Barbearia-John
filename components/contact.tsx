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
        <p className="text-lg mt-2 text-start md:text-center text-textBlack"> R. Lauro Francisco dos Santos, 944 • Monte Alegre, Santa catarina - SC • 88348-595</p>
        <div className="flex flex-col md:flex-row items-stretch gap-4 justify-between w-full mt-8">
          <div className="w-full">
            <div className="w-full">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.821742345527!2d-48.67131088874965!3d-27.004184796934716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b58ff77448c7%3A0x2404ce4f39b8ff1b!2sR.%20Lauro%20Francisco%20dos%20Santos%2C%20944%20-%20Monte%20Alegre%2C%20Cambori%C3%BA%20-%20SC%2C%2088348-595!5e0!3m2!1sen!2sbr!4v1716760561964!5m2!1sen!2sbr"
                width="100%"
                height="350"
                style={{ border: "0" }}
                loading="lazy"
                className="filter-[invert(90%)] rounded-md"
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