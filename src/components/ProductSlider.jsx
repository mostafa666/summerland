import React from "react";
import Slider from "react-slick";
import Card from "./Card";

export default function ProductSlider({ products }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div className="slider_ltr">
      <Slider {...settings}>
        {products.map((product, i) => {
          return <Card props={{ product }} key={i} />;
        })}
      </Slider>
    </div>
  );
}
