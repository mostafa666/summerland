import React from "react";
import Slider from "react-slick";
import Card from "./Card";

export default function ProductSlider({ products, title }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1135,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 625,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="product__slider slider_ltr">
      <div className="product__slider__title__box">
        <h2>{title}</h2>
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
