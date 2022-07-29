import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "./Slider.css";
import shop from "../assets/img/shop.PNG";
import realEstate from "../assets/img/real-estate.PNG";
import formik from "../assets/img/formik.PNG";
import weather from "../assets/img/weather.PNG";
import farsiPortfolio from "../assets/img/farsi-portfolio.PNG";
import todoList from "../assets/img/todolist.PNG";
import finencial from "../assets/img/expense-tracker.PNG";

const SliderComponent = () => {
  return (
    <div className="slider-container">
      <h1 className="slider-title">MY Latest Works</h1>
      <h4 className="slider-subtitle">Experiences Overview</h4>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="my-swiper-slider"
        breakpoints={{
          1800: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1000: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide className="slides">
          <img alt="shop" src={formik} className="slider-images"></img>
        </SwiperSlide>
        <SwiperSlide className="slides">
          <img alt="shop" src={weather} className="slider-images"></img>
        </SwiperSlide>
        <SwiperSlide className="slides">
          <img alt="shop" src={farsiPortfolio} className="slider-images"></img>
        </SwiperSlide>
        <SwiperSlide className="slides">
          <img alt="shop" src={shop} className="slider-images"></img>
        </SwiperSlide>
        <SwiperSlide className="slides">
          <img alt="shop" src={realEstate} className="slider-images"></img>
        </SwiperSlide>
        <SwiperSlide className="slides">
          <img alt="shop" src={todoList} className="slider-images"></img>
        </SwiperSlide>
        <SwiperSlide className="slides">
          <img alt="shop" src={finencial} className="slider-images"></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderComponent;
