import Image from "next/image";
import ServicesSlider from "./servicesSlider";
import { Righteous } from "next/font/google";

const righteous = Righteous({
    weight: "400",
    subsets: ["latin"]
});

export default function ServicesLight() {

    return (
        <section className="bg-white">
            <div className="relative flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto w-5/6 py-32">
                <Image className="hidden md:block rounded-md" src="/services/barber.png" alt="" width={350} height={100} />
                <div className="flex flex-col">
                    <div className="relative">
                        <h1 className={`${righteous.className} flex flex-col relative z-20 text-black text-4xl`}>O que oferecemos para os <span className="text-goldColor">nossos clientes</span></h1>
                        <div className="hidden md:flex items-center gap-4 absolute z-10 opacity-10 bottom-14 right-0 ">
                            <Image src="/services/mustache-1.svg" alt="" width={70} height={70} />
                            <Image src="/services/mustache-2.svg" alt="" width={70} height={70} />
                            <Image src="/services/mustache-3.svg" alt="" width={70} height={70} />
                            <Image src="/services/mustache-4.svg" alt="" width={70} height={70} />
                        </div>
                    </div>
                    <ServicesSlider />
                </div>
            </div>
        </section>
    )
}