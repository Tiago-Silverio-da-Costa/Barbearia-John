"use client";

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "@/styles/swiper.css";
import Image from "next/image";
import { Fragment } from "react";
import { Righteous } from "next/font/google";

const righteous = Righteous({
    weight: "400",
    subsets: ["latin"]
});

interface ServicesProps {
    id: number;
    image: string;
    title: string;
    text: string;
    price: string;
}

export default function ServicesSlider() {
    const servicesList: ServicesProps[] = [
        {
            id: 1,
            image: "/services/slide/razor.svg",
            title: "Barba",
            text: "Mantenha sua barba sempre impecável com nosso serviço de corte.",
            price: "25"
        },
        {
            id: 2,
            image: "/services/slide/haircut.svg",
            title: "Corte de cabelo",
            text: "low-fade, degradê, high-fade, mid-fade, social, moicano e mais.",
            price: "25"
        },
        {
            id: 3,
            image: "/services/slide/machine.svg",
            title: "Corte + Barba",
            text: "Atualize seu visual com nosso combo especial de Corte de Cabelo e Barba.",
            price: "50"
        },
        {
            id: 4,
            image: "/services/slide/eyebrown.svg",
            title: "Sobrancelha",
            text: "Realce seu olhar com nosso Design de Sobrancelhas.",
            price: "25"
        },
        {
            id: 4,
            image: "/services/slide/man.svg",
            title: "Cabelo + Barba + Sobrancelha",
            text: "Transforme seu visual de forma completa.",
            price: "75"
        },
    ];

    return (
        <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            loop={true}
            keyboard={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            slidesPerView={2}
            spaceBetween={2}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 5
                },
                960: {
                    slidesPerView: 2,
                    spaceBetween: 5
                },
            }}
        >
            {servicesList.map((serv) => (
                <Fragment key={serv.id}>
                    <SwiperSlide>
                        <div className="flex flex-col py-6 px-4 bg-white border-2 border-goldColor/10 rounded-md mt-6">
                            <Image src={serv.image} alt="Cortes de cabelo impecáveis na Barbearia John em Camboriú: Satisfação garantida para todos os clientes!" width={50} height={50} />
                            <p className={`${righteous.className} mt-4 font-bold text-black`}>{serv.title}</p>
                            <p className="mt-2 text-black/90 font-medium text-sm max-w-48">{serv.text}</p>
                            <p className={`${righteous.className} mt-4 text-goldColor`}>R$ {serv.price}</p>
                        </div>
                    </SwiperSlide>
                </Fragment>
            ))}
        </Swiper>
    );
};
