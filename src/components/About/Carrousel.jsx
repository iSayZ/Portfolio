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

import { Carousel, IconButton } from "@material-tailwind/react";

function Carrousel({ skillsIcons }) {
  return (
    <>
      {/* <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={50}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
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
      </Swiper> */}
      <Carousel className="rounded-l overflow-y-visible overflow-x-hidden h-auto flex-none lg:w-45%"
                autoplay="true"
                autoplayDelay="5000"
                loop="true"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-2 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                      {new Array(length).fill("").map((_, i) => (
                        <span
                          key={i}
                          className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                            activeIndex === i ? `w-8 bg-skyz-700` : `w-4 bg-skyz-500/50`
                          }`}
                          onClick={() => setActiveIndex(i)}
                        />
                      ))}
                    </div>
                  )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
        </IconButton>
      )}>
{skillsIcons.map((skill) => (
            <div className="flex flex-col items-center justify-evenly bg-slate-50 rounded p-3 shadow-lg opacity-90 w-40 m-auto">
              <img src={skill.imgSrc} alt="" className="w-24 h-24" />
              <p className="font-semibold text-l text-center text-slate-800">
                {skill.name === "Tailwind CSS" ? "Tailwind" : skill.name}
              </p>
            </div> 
        ))}
                </Carousel>
    </>
  );
}

export default Carrousel;
