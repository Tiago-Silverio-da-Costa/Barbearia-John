"use client";

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "@/styles/swiper.css";
import Image from "next/image";
import { Fragment } from "react";

interface ReviewsProps {
  image: string;
  id: number;
}

export default function SliderReviews() {
  const reviewsList: ReviewsProps[] = [
    {
      id: 1,
      image: "/reviews/1.png",
    },
    {
      id: 2,
      image: "/reviews/2.png",
    },
    {
      id: 3,
      image: "/reviews/3.jpeg",
    },
    {
      id: 4,
      image: "/reviews/4.png",
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
      {reviewsList.map((about) => (
        <Fragment key={about.id}>
          <SwiperSlide className="">
            <Image src={about.image} alt="hero" width={450} height={400} />
          </SwiperSlide>
        </Fragment>
      ))}
    </Swiper>
  );
};
