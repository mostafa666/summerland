import React from "react";
import Slider from "react-slick";
import Card from "../Card";

export default function IndexDiscountSlider({ data }) {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="index__discount">
      <div className="index__discount__title__box">
        <h2>تخفیف هفتگی</h2>
      </div>
      <div className="index__discount_slider slider_ltr">
        <Slider {...settings}>
          {data.map((product, i) => {
            return <Card props={{ product }} key={i} />;
          })}
        </Slider>
      </div>
    </div>
  );
}
