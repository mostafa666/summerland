import React from "react";
import Slider from "react-slick";
import Card from "./pages/card";

export default function ProductSlider({ products, title }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1135,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 625,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 325,
        settings: {
          slidesToShow: 1
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
      <div className="pad_right_med">
        <Slider {...settings}>
          {products.map(product => {
            return <Card props={product} key={product.productId} />;
          })}
        </Slider>
      </div>
    </div>
  );
}

const NextArrow = ({ className, style, onClick }) => {
  return <div className={className} style={{ ...style }} onClick={onClick} />;
};
