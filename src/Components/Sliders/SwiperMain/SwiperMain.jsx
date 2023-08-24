import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./SwiperMain.css";

// import required modules
import { EffectCards } from "swiper";
// image
import armani from "../../../assets/image/partners/armani.png";
import gucci from "../../../assets/image/partners/gucci.png";
import versace from "../../../assets/image/partners/versace.png";
import prada from "../../../assets/image/partners/prada.png";
import dolce from "../../../assets/image/partners/dolce.png";
import dior from "../../../assets/image/partners/dior.png";
import chanel from "../../../assets/image/partners/chanel.png";
export function SwipperMain() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <a href="#">
              <img src={armani} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a href="#">
              <img src={gucci} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a href="#">
              <img src={versace} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a href="#">
              <img src={prada} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <a href="#">
              <img src={dolce} alt="" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
