import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

function Carrousel({ skillsIcons }) {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={50}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      > */}
        {skillsIcons.map((skill) => (
          <SwiperSlide key={skill.name}>
            <div className="flex flex-col items-center justify-evenly bg-slate-50 h-full w-full m-2 rounded p-3 shadow-lg opacity-90">
              <img src={skill.imgSrc} alt="" className="w-24 h-24" />
              <p className="font-semibold text-l text-center text-slate-800">
                {skill.name === "Tailwind CSS" ? "Tailwind" : skill.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Carrousel;
