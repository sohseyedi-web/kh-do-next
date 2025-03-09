"use client";
import Stat from "@/ui/Stat";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

// data
const stats = [
  { label: "نفر در دوربین ثبت نام کردند", value: 9750 },
  { label: "نفر از دوربین خرید کردند", value: 100 },
  { label: "بلاگ نوشته شده است", value: 1000 },
];

const Stats = () => {
  return (
    <section className="mt-10">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        loop
        breakpoints={{
          1024: { slidesPerView: 3, spaceBetween: 30 },
          0: { slidesPerView: 1, spaceBetween: 5 },
        }}
        className="lg:w-full w-[60%] max-w-5xl mt-10 flex items-center justify-between"
      >
        {stats.map((stat, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Stat {...stat} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Stats;
