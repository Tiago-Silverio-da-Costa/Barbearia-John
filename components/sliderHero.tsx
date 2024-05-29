"use client";

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "@/styles/swiper.css";
import Image from "next/image";
import { Fragment } from "react";

interface ReviewProps {
  image: string;
  id: number;
}

export default function SliderReview() {
  const reviewList: ReviewProps[] = [
    {
      id: 1,
      image: "/review/1.jpg",
    },
    {
      id: 2,
      image: "/review/2.jpg",
    },
    {
      id: 8,
      image: "/review/8.jpeg",
    },
    {
      id: 16,
      image: "/review/16.jpeg",
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
      {reviewList.map((hero) => (
        <Fragment key={hero.id}>
          <SwiperSlide>
            <Image src={hero.image} alt="happy clients" width={400} height={450} />
          </SwiperSlide>
        </Fragment>
      ))}
    </Swiper>
  );
};
