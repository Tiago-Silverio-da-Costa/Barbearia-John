import ServiceHours from "./serviceHours";
import localFont from "next/font/local";
import { Righteous } from "next/font/google";

const righteous = Righteous({
    weight: "400",
    subsets: ["latin"]
});

export default function Contact() {

  return (
    <section id="contact" className="flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-start justify-between mx-auto max-w-5xl w-5/6 py-32">
        <div className="flex flex-col justify-start">
          <p className={`text-black italic uppercase text-sm md:text-lg font-semibold`}>
            Contato / Localização
          </p>
          <h1 className={`${righteous.className} uppercase max-w-2xl text-goldColor leading-10 text-4xl font-bold`}>
            Onde estamos localizados
          </h1>
        </div>
        <p className="text-lg mt-2 text-start md:text-center text-black"> R. Lauro Francisco dos Santos, 944 • Monte Alegre, Camboriú - SC • 88348-595</p>
        <div className="flex flex-col md:flex-row items-end gap-4 justify-between w-full mt-8">
          <div className="w-full">
            <div className="w-full">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d888.71753080388!2d-48.66769587755647!3d-27.002657909040604!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b574f0b37bf1%3A0x838b05a945b45580!2sBarbearia%20John!5e0!3m2!1sen!2sbr!4v1722700681796!5m2!1sen!2sbr"
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