import React from "react";
import Slider from "react-slick";
import Card from "../Card";

export default function IndexDiscountSlider({ data }) {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <div className="index_discount_slider slider_ltr">
      <Slider {...settings}>
        {data.map((product, i) => {
          return <Card props={{ product }} key={i} />;
        })}
      </Slider>
    </div>
  );
}
