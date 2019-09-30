import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from './signin';
import { TitleText, Price, Size } from './userAccount/wishList';

// icons
import clothImage from './../common/images/shirt.jpg'
import cancelIcon from './../common/images/cancel.svg'
class CartBox extends Component {
    render() {
        return (
           <section className="cartBox">
                <div className="cartBox__right">
                    <a title="مشاهده ی محصول" href="s">
                        <Image source={clothImage} alt="shirt" className="cartBox__image" onClick={console.log()} />
                    </a>
                </div> 
                <div className="cartBox__left">
                    <TitleText text="پیراهن سیاه یقه گرد دور دوز" />
                    <span className="cartBox__size">سایز: </span><Size sizes={[{size:'XL',id:1}]} />
                    <Price price="100,000" />
                </div>
                <Image source={cancelIcon} alt="ایکون کنسل" className="cartBox__cancel" onClick={console.log()} />
                <span className="cartBox__numbers">3</span>
           </section>
        )
    }
}


export default connect(state => ({ state }))(CartBox);
