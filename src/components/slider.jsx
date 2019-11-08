import React, { Component } from "react";
import Slider from "react-slick";
import image1 from "./../common/images/110646356.jpg";
import image2 from "./../common/images/3982665.jpg";
import "./../../node_modules/slick-carousel/slick/slick.scss";
import "./../../node_modules/slick-carousel/slick/slick-theme.scss";

export default class SliderFade extends Component {
  slider = React.createRef();
  render() {
    const { images, title } = this.props;
    console.log(images);
    if (!images) return null;
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      arrows: false,
      className: "sliderFade",
      customPaging: function(i) {
        return (
          <a>
            <img src={images[i].url} alt={title} />
          </a>
        );
      }
    };
    return (
      <div className="slider_ltr fade_slider" ref={this.slider}>
        <Slider {...settings}>
          {images.map(image => (
            <div key={image.id}>
              <img src={image.url} alt={title} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
