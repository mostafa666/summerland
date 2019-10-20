import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from './signin';
import { TitleText, Price, Size } from './userAccount/wishList';

// icons
import clothImage from './../common/images/shirt.jpg'
import cancelIcon from './../common/images/cancel.svg'
import { removeCarts } from './../actions/detailsPageActions';
import { Link } from 'react-router-dom';
class CartBox extends Component {
    
    render() {
        const {data, dispatch} = this.props;
        return (
           <section className="cartBox">
                <div className="cartBox__right">
                    <Link title="مشاهده ی محصول" to="/s">
                        <Image source={data.image} alt="shirt" className="cartBox__image" onClick={console.log(/* set url*/)} />
                    </Link>
                </div> 
                <div className="cartBox__left">
                    <TitleText text={data.title} />
                    <span className="cartBox__size">سایز: </span><span>{data.size}</span>
                    <Price price={data.price} />
                </div>
                <Image source={cancelIcon} alt="ایکون کنسل" className="cartBox__cancel" onClick={() => removeCart(data.productId,data.id,dispatch)} />
                <span className="cartBox__numbers">{data.count}</span>
           </section>
        )
    }
}

const removeCart = async (productId,id, dispatch) => {
    const token = localStorage.getItem('token');
    const nickname = localStorage.getItem('nickname');
    
    await dispatch(removeCarts(token,nickname,productId,id));
}

export default connect(state => ({ state }))(CartBox);
