import React from "react";
import "./Brands.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// image
import armani from "../../../assets/image/partners/armani.png";
import gucci from "../../../assets/image/partners/gucci.png";
import versace from "../../../assets/image/partners/versace.png";
import prada from "../../../assets/image/partners/prada.png";
import dolce from "../../../assets/image/partners/dolce.png";
import dior from "../../../assets/image/partners/dior.png";
import chanel from "../../../assets/image/partners/chanel.png";
export const BrandsSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
  };
  return (
    <div className="partners">
      <div className="container">
        <div className="partnerBlock">
          <Slider {...settings}>
            <div className="partnerBox">
              <img src={armani} alt="armani" />
            </div>
            <div className="partnerBox">
              <img src={gucci} alt="gucci" />
            </div>
            <div className="partnerBox">
              <img src={versace} alt="versace" />
            </div>
            <div className="partnerBox">
              <img src={prada} alt="prada" />
            </div>
            <div className="partnerBox">
              <img src={dolce} alt="dolce" />
            </div>
            <div className="partnerBox">
              <img src={dior} alt="dior" />
            </div>
            <div className="partnerBox">
              <img src={chanel} alt="chanel" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
