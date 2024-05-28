"use client";

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "@/styles/swiper.css";
import Image from "next/image";
import { Fragment } from "react";

interface HeroProps {
  image: string;
  id: number;
}

export default function SliderHero() {
  const heroList: HeroProps[] = [
    {
      id: 1,
      image: "/hero/1.jpg",
    },
    {
      id: 2,
      image: "/hero/2.jpg",
    },
    {
      id: 3,
      image: "/hero/3.jpg",
    },
    {
      id: 5,
      image: "/hero/5.jpg",
    },
    {
      id: 6,
      image: "/hero/6.jpeg",
    },
    {
      id: 7,
      image: "/hero/7.jpg",
    },
    {
      id: 8,
      image: "/hero/8.jpeg",
    },
    {
      id: 9,
      image: "/hero/9.jpg",
    },
    {
      id: 10,
      image: "/hero/10.jpeg",
    },
    {
      id: 11,
      image: "/hero/11.jpeg",
    },
    {
      id: 13,
      image: "/hero/13.jpeg",
    },
    {
      id: 16,
      image: "/hero/16.jpeg",
    },
    {
      id: 17,
      image: "/hero/17.jpeg",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      loop={true}
      keyboard={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      className="mySwiper"
    >
      {heroList.map((hero) => (
        <Fragment key={hero.id}>
          <SwiperSlide className="">
            <Image src={hero.image} alt="hero" width={450} height={400} />
          </SwiperSlide>
        </Fragment>
      ))}
    </Swiper>
  );
};
