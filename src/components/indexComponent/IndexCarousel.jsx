import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function IndexCarousel({ data }) {
  //Todo change dots and nextbtn and prevBtn style
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    centerMode: false
  };
  return (
    <div className="index__slider slider_ltr">
      <Slider {...settings}>
        {data.map((item, i) => {
          return (
            <div key={i}>
              <img src={item.imgSrc} alt="slider" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
