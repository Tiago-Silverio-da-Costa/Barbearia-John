import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const righteous = Righteous({
    weight: "400",
    subsets: ["latin"]
});

export default function DiscountGold() {

    return (
        <section className="bg-[#b49068]">
            <div className="flex gap-6 mx-auto w-5/6 max-w-5xl py-16">
                <div className="flex flex-col justify-center items-start">
                    <p className={`${righteous.className} uppercase`}>
                        Agende já
                    </p>
                    <h1 className={`${righteous.className} text-4xl`}>Ganhe 10% de Desconto</h1>
                    <p className="mt-6 max-w-md">
                        Agende seu horário pelo nosso site e ganhe 10% de desconto em todos os serviços! É rápido, fácil e você ainda aproveita uma oferta exclusiva. Não perca essa chance de renovar seu visual com um desconto especial.
                    </p>
                    <Link className={`w-fit mt-4 flex gap-3 items-center justify-center text-WhiteColor bg-black transition-all duration-200 hover:opacity-75 px-12 py-2 font-bold text-2xl`} href={`https://api.whatsapp.com/send?phone=4797713257&text=Oi,%20Tudo%20bem!`} target="_blank" aria-label="Agende agora pelo WhatsApp">
                        <FaWhatsapp />
                        Agende agora
                    </Link>
                </div>
                <Image className="hidden md:block rounded-md" src="/discount/man.jpg" alt="" width={500} height={350} />
            </div>
        </section>
    )
}