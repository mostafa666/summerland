import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function IndexCarousel({ data }) {
  //Todo change dots and nextbtn and prevBtn style
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipeToSlide: true,
    dotsClass: "slick-dots slick-thumb"
  };
  return (
    <div className="index__slider slider_ltr">
      <Slider {...settings}>
        {data.map((item, i) => {
          return (
            <div key={i}>
              <picture>
                <source media="(max-width:480px)" srcSet={item.mobile} />
                <img src={item.desktop} alt="slider" />
              </picture>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
