import React from "react";
import Slider from "react-slick";
import Card from "./Card";

export default function ProductSlider({ products }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6
  };
  return (
    <div className="product__slider slider_ltr">
      <div className="product__slider__title__box">
        <h2>آخرین محصولات</h2>
        <div className="product__slider__title__box__line"></div>
      </div>
      <div>
        <Slider {...settings}>
          {products.map((product, i) => {
            return <Card props={{ product }} key={i} />;
          })}
        </Slider>
      </div>
    </div>
  );
}
