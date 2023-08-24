import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, autoplay } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./SwipperHome.css";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

export default function SwipperHome() {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        loop={true}
        loopAdditionalSlides={2}
        autoplay={{ delay: 4000, pauseOnInteraction: true }}
        navigation={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
        {...params}
      >
        <SwiperSlide>
          <div className="homeSlider homeSlider_1">
            <div className="brandBlock container">
              <div className="brandText">
                <h1>Luxury brands</h1>
              </div>
              <div className="brandBtn">
                <button>Купить сейчас</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homeSlider homeSlider_2">
            <div className="brandBlock container">
              <div className="brandText">
                <h1>Louis Vuitton</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptatibus numquam commodi, est itaque culpa saepe! Neque
                  exercitationem similique sapiente ducimus harum ex dolor in
                  iste est ea. Quis, ad?
                </p>
              </div>
              <div className="brandBtn">
                <button>Купить сейчас</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homeSlider homeSlider_3">
            <div className="brandBlock container">
              <div className="brandText">
                <h1>Prada</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptatibus numquam commodi, est itaque culpa saepe! Neque
                  exercitationem similique sapiente ducimus harum ex dolor in
                  iste est ea. Quis, ad?
                </p>
              </div>
              <div className="brandBtn">
                <button>Купить сейчас</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homeSlider homeSlider_4">
            <div className="brandBlock container">
              <div className="brandText">
                <h1>Gucci</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptatibus numquam commodi, est itaque culpa saepe! Neque
                  exercitationem similique sapiente ducimus harum ex dolor in
                  iste est ea. Quis, ad?
                </p>
              </div>
              <div className="brandBtn">
                <button>Купить сейчас</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="homeSlider homeSlider_2">
            <div className="LWBlock container">
              <div className="LWText">
                <h1>Louis Vuitton</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptatibus numquam commodi, est itaque culpa saepe! Neque
                  exercitationem similique sapiente ducimus harum ex dolor in
                  iste est ea. Quis, ad?
                </p>
                <div className="brandBtn">
                  <button>Купить сейчас</button>
                </div>
              </div>
              <div className="LWImg"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homeSlider homeSlider_3">
            <div className="LWBlock container">
              <div className="GucchiImg"></div>
              <div className="LWText">
                <h1>GUCCHI</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptatibus numquam commodi, est itaque culpa saepe! Neque
                  exercitationem similique sapiente ducimus harum ex dolor in
                  iste est ea. Quis, ad?
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homeSlider homeSlider_4">
            <div className="LWBlock container">
              <div className="LWText">
                <h1>PRADA</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptatibus numquam commodi, est itaque culpa saepe! Neque
                  exercitationem similique sapiente ducimus harum ex dolor in
                  iste est ea. Quis, ad?
                </p>
              </div>
              <div className="PradaImg"></div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
