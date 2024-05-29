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
      id: 8,
      image: "/hero/8.jpeg",
    },
    {
      id: 16,
      image: "/hero/16.jpeg",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      loop={true}
      keyboard={true}
      autoplay={{
        delay: 2600,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      className="mySwiper"
    >
      {heroList.map((hero) => (
        <Fragment key={hero.id}>
          <SwiperSlide>
            <Image src={hero.image} alt="hero" width={400} height={450} />
          </SwiperSlide>
        </Fragment>
      ))}
    </Swiper>
  );
};
