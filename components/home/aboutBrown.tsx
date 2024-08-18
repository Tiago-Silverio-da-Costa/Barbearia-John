import { PiMapPinFill } from "react-icons/pi";
import Link from "next/link";
import SliderReview from "./sliderHero";
import { Righteous } from "next/font/google";

const righteous = Righteous({
    weight: "400",
    subsets: ["latin"]
});

export default function AboutBrown() {

    return (
        <section className="bg-[#141109]">
            <div className="flex flex-col md:flex-row items-start gap-8 mx-auto w-5/6 max-w-5xl py-32">
                <div className="flex flex-col">
                    <h1 className={`${righteous.className} mt-4 flex flex-row md:flex-col relative z-20 max-w-96 text-4xl`}>Nossa História</h1>
                    <p className={`${righteous.className} mt-4 flex flex-row md:flex-col relative z-20 max-w-96 text-xl text-goldColor font-light`}>Desde 2017</p>
                    <p className="mt-4 text-white/70 max-w-lg">
                        Desde 2017, a Barbearia John está na ativa, firme e forte, cuidando do seu visual com todo carinho e dedicação. Somos uma barbearia tradicional e familiar que oferece cortes de cabelo com qualidade, atendimento personalizado e preço justo.
                        <br />
                        <br />
                        Passamos por uns perrengues na pandemia, mudamos de lugar umas vezes, mas nunca desistimos. Agora, estamos aqui no <strong><Link aria-label="Barbearia John em Monte Alegre (Camboriú)" href="#contact" className={`text-goldColor`}>Monte Alegre, ao lado da escola CAIC, Camboriú</Link></strong>.
                        <br />
                        <br />
                        Queria agradecer de coração pela confiança ao longo desses anos todos. Se você ainda não veio conferir, venha conhecer a barbearia pra descobrir porque a galera escolhe a gente pra dar aquele tapa no visual e sair com todo estilo na rua!

                    </p>
                    <Link className="flex items-center gap-6 mt-8" href="/#contact">
                        <div className="bg-goldColor text-white p-3 rounded-t-xl rounded-bl-xl">
                            <PiMapPinFill className="text-2xl" />
                        </div>
                        <p className="text-xs font-semibold">R. Lauro Francisco dos Santos, 944 • Monte Alegre, Camboriú</p>
                    </Link>
                </div>
                <SliderReview />
            </div>
        </section>
    )
}