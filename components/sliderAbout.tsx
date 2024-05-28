"use client";

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "@/styles/swiper.css";
import Image from "next/image";
import { Fragment } from "react";

interface AboutProps {
  image: string;
  id: number;
}

export default function SliderAbout() {
  const aboutList: AboutProps[] = [
    {
      id: 1,
      image: "/about/1.jpg",
    },
    {
      id: 2,
      image: "/about/2.jpg",
    },
    {
      id: 3,
      image: "/about/3.jpg",
    },
    {
      id: 7,
      image: "/about/7.jpg",
    },
    {
      id: 8,
      image: "/about/8.jpeg",
    },
    {
      id: 11,
      image: "/about/11.jpg",
    },
    {
      id: 13,
      image: "/about/13.jpg",
    },
    {
      id: 15,
      image: "/about/15.jpg",
    },
    {
      id: 16,
      image: "/about/16.jpg",
    },
    {
      id: 17,
      image: "/about/17.jpg",
    }
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
      slidesPerView={1}
      className="mySwiper"
    >
      {aboutList.map((about) => (
        <Fragment key={about.id}>
          <SwiperSlide className="">
            <Image src={about.image} alt="hero" width={450} height={400} />
          </SwiperSlide>
        </Fragment>
      ))}
    </Swiper>
  );
};
