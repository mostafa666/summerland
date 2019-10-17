import React, { Component } from 'react';
import Slider from 'react-slick';
import image1 from './../common/images/110646356.jpg';
import image2 from './../common/images/3982665.jpg';
import './../../node_modules/slick-carousel/slick/slick.scss';
import './../../node_modules/slick-carousel/slick/slick-theme.scss';

export default class SliderFade extends Component {
    slider = React.createRef();
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            centerMode: true,
            centerPadding:'200px',
            className: 'sliderFade',
            customPaging: i => {
                return <button title={i}>{i + 1}</button>;
            },
            // dotsClass:'sliderFade__dot',
            // responsive:[],
            // rtl: true
        };
        return (
            <div className="slider_ltr" ref={this.slider} >
                <Slider {...settings}>
                    <div>
                        <img src={image1} />
                    </div>
                    <div>
                        <img src={image2} />
                    </div>
                </Slider>
            </div>
        );
    }
}
